# 🎓 StudyLaneX

StudyLaneX is a full-stack MERN web application that gives students a modern learning platform where they can explore course categories, read learning experiences and testimonials, share feedback and get in touch through a contact form.

This repository is a copy of the original project deployed on **AWS** with **Docker**, **Jenkins** and **VPC peering**. A push to GitHub makes Jenkins build two Docker images, push them to **Amazon ECR** and deploy them to an **EC2** server behind an **Application Load Balancer**.

> **Original project:** https://github.com/shruti-Verma64894/StudyLaneX
> This project was taken from the repository above. All credit for the application itself goes to its original author.

---

## ✨ Features

- Modern and responsive user interface
- Course category pages: Arts, Business, Computer Science, Engineering, Health and Professional
- Learning experiences and testimonials sections
- Feedback form with feedback stored in MongoDB
- Contact form with backend API integration and email sending using Nodemailer
- MongoDB Atlas database connectivity
- Dockerized frontend (nginx) and backend (Node.js), with images stored in Amazon ECR
- Jenkins pipeline that builds, pushes and deploys automatically on every new commit
- Deployment to EC2 behind an Application Load Balancer, with path-based routing for the API
- Secrets kept in AWS Systems Manager Parameter Store, and no AWS access keys stored anywhere (IAM roles are used)
- Health check after every deploy, with automatic rollback to the previous version if it fails

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 7, React Router 7, HTML5, CSS3, JavaScript |
| Frontend server | nginx 1.27 (static files, gzip, SPA fallback) |
| Backend | Node.js 20, Express 5, Mongoose 7, CORS, dotenv |
| Database | MongoDB Atlas |
| Email | Nodemailer (Gmail SMTP) |
| Containers | Docker, Amazon ECR |
| CI/CD | Jenkins (Pipeline from SCM) |
| Hosting | Amazon EC2 (Amazon Linux 2023), Application Load Balancer |
| Networking | Two VPCs connected by VPC peering |
| Secrets and access | SSM Parameter Store (SecureString), IAM roles |

---

## 🏗 Architecture

```
 Developer
    │ git push
    ▼
 GitHub ◄──────────────── polls every minute ────────────┐
                                                          │
 ┌───────────── sl-ci-vpc  (10.10.0.0/16) ─────────────┐  │
 │  EC2 "sl-jenkins"  (t3.small, Elastic IP)           │──┘
 │   1. Prepare       (find account ID, image names)   │
 │   2. Build Images  (frontend + backend)             │──► Amazon ECR
 │   3. Push to ECR   (tag = build number)             │    (2 private repos)
 │   4. Deploy        (scp + ssh deploy.sh)            │
 └───────────────────────┬─────────────────────────────┘
                         │  VPC peering  (private IPs, SSH on port 22)
                         ▼
 ┌───────────── sl-app-vpc (10.20.0.0/16) ─────────────┐
 │                                                     │
 │  Users ─► Application Load Balancer "sl-alb"        │
 │              /api/*  ─► sl-backend-tg  ─► :5000     │
 │              /*      ─► sl-frontend-tg ─► :80       │
 │                              │                      │
 │  EC2 "sl-app" 10.20.1.10 (t3.micro, Elastic IP)     │
 │    ├─ container sl-frontend  (nginx, port 80)       │
 │    └─ container sl-backend   (Node, port 5000)      │
 └──────────────┬──────────────────────┬───────────────┘
                │ reads secrets        │ database connection
                ▼                      ▼
      SSM Parameter Store        MongoDB Atlas
        /studylanex/*          (allows the app Elastic IP)
```

**Naming:** `sl` stands for **StudyLaneX** and `ci` stands for **Continuous Integration**. So `sl-ci-vpc` is the network that holds the Jenkins (CI) server, and `sl-app-vpc` is the network that holds the running application. They are kept separate so that the build system and the public-facing app are isolated from each other, and they only talk through the peering connection.

---

## 📁 Project Structure

```
StudyLaneX-jenkins-aws-main/
├── Dockerfile              # Frontend image: Vite build, then nginx serves /dist
├── nginx.conf              # nginx config (gzip, asset caching, SPA fallback)
├── .dockerignore           # Frontend build context exclusions
├── Jenkinsfile             # Pipeline: prepare → build → push to ECR → deploy
├── package.json            # Frontend dependencies and scripts
├── vite.config.js          # Vite config with a dev proxy for /api
├── index.html
├── deploy/
│   └── deploy.sh           # Runs on the app server: pull, start, health check, rollback
├── src/                    # React source code
│   ├── App.jsx
│   ├── Components/
│   └── services/           # API helper (feedbackService.js)
├── public/                 # Course pages and images
└── backend/
    ├── Dockerfile          # Backend image (Node.js 20, non-root user)
    ├── .dockerignore
    ├── package.json        # "start": "node server.js"
    ├── server.js           # Express app, CORS, MongoDB connection
    ├── models/             # Feedback.js
    └── routes/             # feedbackRoutes.js, contactRoutes.js
```

---

## 🌐 How Requests Flow

Users open **one address only**: the DNS name of the load balancer, `http://<ALB-DNS-name>`.

| Request path | Goes to | Container port |
|---|---|---|
| `/api/*` | `sl-backend-tg` (Express API) | 5000 |
| everything else | `sl-frontend-tg` (nginx + React) | 80 |

- The React code calls the API with **relative URLs** (`/api/feedback`, `/api/contact/send`), so the browser always talks to the same address the page was loaded from. There are no hard-coded hostnames or ports.
- Because the page and the API share one origin, the backend CORS rule accepts same-origin requests (the `Origin` host equals the `Host` header). It also still accepts `localhost`, `127.0.0.1` and `192.168.x.x` on ports `30173` and `5173` for local development.
- `nginx.conf` returns `index.html` for unknown paths, so React Router pages survive a browser refresh.

---

## 💻 Local Development

Requirements: Node.js 20 or newer, and a MongoDB connection string.

```bash
# 1. Backend  (http://localhost:5000)
cd backend
npm install
# create backend/.env with:
#   MONGO_URI=mongodb+srv://<user>:<password>@<cluster-host>/studylanex
#   EMAIL_USER=<your gmail address>        (optional, for the contact form)
#   EMAIL_PASS=<your gmail app password>   (optional, for the contact form)
npm start

# 2. Frontend  (http://localhost:5173), in a second terminal from the repo root
npm install
npm run dev
```

`vite.config.js` proxies `/api` to `http://localhost:5000`, so the relative API URLs work during development.

You can also test the Docker builds locally:

```bash
docker build -t fe-test .
docker build -t be-test ./backend
```

---

## 🐳 Docker Images

| Image | Base | What it does |
|---|---|---|
| `studylanex-frontend` | `node:22-alpine` (build), `nginx:1.27-alpine` (runtime) | Builds the React app, then serves the static files with nginx on port 80 |
| `studylanex-backend` | `node:20-alpine` | Runs `node server.js` on port 5000 as the non-root `node` user |

- Both images are stored in private **ECR** repositories, `studylanex-frontend` and `studylanex-backend`.
- Jenkins tags each image with the **build number**, so every build produces a unique, traceable version.
- The frontend uses a multi-stage build, so the final image holds only nginx and the built files (small, and low on memory).
- The `.dockerignore` files keep `node_modules`, `dist`, `.git` and `.env` out of the images. The root one also skips `backend`, `deploy`, `k8s` and the `Jenkinsfile`.

---

## 🔁 CI/CD with Jenkins

```
git push ──► GitHub ◄── Jenkins polls every minute
                              │ new commit
                              ▼
                      1. Prepare           (AWS account ID → ECR image names)
                      2. Build Images      (frontend + backend)
                      3. Push to ECR       (tag = build number)
                      4. Deploy            (scp + ssh over VPC peering)
                              │
                              ▼
              deploy.sh on sl-app (10.20.1.10)
              login → read secrets → pull → start → health check → rollback if failed
```

**Pipeline stages (`Jenkinsfile`):**

1. **Prepare:** reads the AWS account ID with `aws sts get-caller-identity` and builds the ECR registry address and the two image names.
2. **Build Images:** builds `studylanex-frontend:<build-number>` and `studylanex-backend:<build-number>`.
3. **Push to ECR:** logs in with `aws ecr get-login-password` (using the Jenkins server's IAM role) and pushes both images.
4. **Deploy over VPC Peering:** uses the Jenkins credential `app-ssh` to copy `deploy/deploy.sh` to the app server at `10.20.1.10` and run it with `sudo`.
5. **Post:** always logs out of ECR and removes images older than 72 hours.

**Pipeline options:** timestamps in the log, no concurrent builds, 30 minute timeout, and `pollSCM('* * * * *')` (checks GitHub every minute so changes deploy quickly; a value like `H/5 * * * *` polls every 5 minutes and creates less load).

**What `deploy/deploy.sh` does on the app server:**

1. Logs in to ECR.
2. Reads every parameter under `/studylanex/` from Parameter Store and writes it to `/opt/studylanex/backend.env` (readable only by root). It stops if `MONGO_URI` is missing.
3. Remembers the currently running image versions.
4. Pulls the new images.
5. Starts `sl-backend` (256 MB limit, port 5000) and `sl-frontend` (64 MB limit, port 80), both with `--restart unless-stopped`.
6. Checks `http://localhost:5000/` and `http://localhost/` for up to 90 seconds.
7. On success, records the new versions and prunes old images. On failure, it prints the backend logs and **rolls back** to the previous versions.

---

## ☁️ AWS Setup (one-time)

Use **one region** for everything (this project uses `ap-south-1`, Mumbai). Do the phases in order, because each one depends on the one before. The Jenkinsfile expects the app server to be at **`10.20.1.10`**.

### 1. Key pair
EC2 → Key Pairs → create `studylanex-key` (RSA, `.pem`). It is the SSH login for both servers, and Jenkins also uses it to reach the app server.

### 2. Two VPCs
Create them with **VPC only** (not "VPC and more", which adds paid NAT gateways).

| | `sl-ci-vpc` (Jenkins) | `sl-app-vpc` (application) |
|---|---|---|
| CIDR | `10.10.0.0/16` | `10.20.0.0/16` |
| Subnets | `sl-ci-public` `10.10.1.0/24` | `sl-app-public-1` `10.20.1.0/24` and `sl-app-public-2` `10.20.2.0/24` (two different AZs) |
| Internet gateway | `sl-ci-igw` | `sl-app-igw` |
| Route table | `sl-ci-rt`: `0.0.0.0/0` → `sl-ci-igw` | `sl-app-rt`: `0.0.0.0/0` → `sl-app-igw`, on both subnets |

Enable **DNS hostnames** on both VPCs and **auto-assign public IPv4** on every subnet. The app VPC needs two AZs because the load balancer requires them. There is no NAT gateway (about $32/month); the app server sits in a public subnet protected by its security group.

### 3. VPC peering
Create `sl-ci-to-app` (requester `sl-ci-vpc`, acceptor `sl-app-vpc`) and **accept** it. Then add a route on **each side**:

- `sl-ci-rt`: `10.20.0.0/16` → `sl-ci-to-app`
- `sl-app-rt`: `10.10.0.0/16` → `sl-ci-to-app`

A peering connection is only a pipe, so both routes are needed. Without them traffic or replies get lost.

### 4. Security groups

| Name | VPC | Inbound rules |
|---|---|---|
| `sl-jenkins-sg` | `sl-ci-vpc` | TCP 22 from My IP; TCP 8080 from My IP |
| `sl-alb-sg` | `sl-app-vpc` | TCP 80 from `0.0.0.0/0` |
| `sl-app-sg` | `sl-app-vpc` | TCP 80 and TCP 5000 from `sl-alb-sg`; TCP 22 from `10.10.0.0/16` |

Only you can reach Jenkins, only the load balancer can reach the containers, and only the Jenkins network can SSH to the app server. Create `sl-alb-sg` before `sl-app-sg`, because the second refers to it.

### 5. ECR repositories
Create two private repositories, `studylanex-frontend` and `studylanex-backend`, with **Scan on push** enabled. Add a lifecycle rule to each: expire images when the **image count is more than 5**. This keeps storage cost low and leaves recent versions for rollback.

### 6. IAM roles
Roles give servers temporary credentials, so no access keys are stored.

| Role | Attached to | Permissions |
|---|---|---|
| `sl-jenkins-role` | Jenkins server | Inline policy: `ecr:GetAuthorizationToken`, plus push and pull on the two repositories only |
| `sl-app-role` | App server | `AmazonSSMManagedInstanceCore` (Session Manager), plus an inline policy: pull from the two repositories, and `ssm:GetParameter`, `GetParameters`, `GetParametersByPath` on `/studylanex` and `/studylanex/*` |

Scope every ECR and SSM permission to your own account ID, region and the project's resource names (least privilege).

### 7. Secrets in Parameter Store
Create three **SecureString** parameters (Standard tier, free):

| Name | Value |
|---|---|
| `/studylanex/MONGO_URI` | your MongoDB Atlas connection string |
| `/studylanex/EMAIL_USER` | your Gmail address |
| `/studylanex/EMAIL_PASS` | your Gmail **app password** |

### 8. App server (`sl-app`)

- Amazon Linux 2023, `t3.micro`, 12 GiB gp3, key pair `studylanex-key`.
- VPC `sl-app-vpc`, subnet `sl-app-public-1`, security group `sl-app-sg`, auto-assign public IP, and **Primary IP `10.20.1.10`** (under Advanced network configuration).
- IAM instance profile `sl-app-role`.
- Attach an **Elastic IP**, then add that IP to **MongoDB Atlas → Network Access**. Atlas only accepts allowed IPs, and a normal public IP changes when the instance restarts.
- Connect with **Session Manager** and prepare the server:

```bash
sudo fallocate -l 1G /swapfile && sudo chmod 600 /swapfile
sudo mkswap /swapfile && sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

sudo dnf install -y docker
sudo mkdir -p /etc/docker
echo '{"log-driver":"json-file","log-opts":{"max-size":"10m","max-file":"3"}}' | sudo tee /etc/docker/daemon.json
sudo systemctl enable --now docker
sudo usermod -aG docker ec2-user
sudo mkdir -p /opt/studylanex
```

Swap protects a 1 GB server from running out of memory, and the log limits stop container logs from filling the disk.

### 9. Target groups and load balancer

| | Frontend | Backend |
|---|---|---|
| Name | `sl-frontend-tg` | `sl-backend-tg` |
| Target type | Instances | Instances |
| Protocol : Port | HTTP : 80 | HTTP : 5000 |
| VPC | `sl-app-vpc` | `sl-app-vpc` |
| Health check path | `/` | `/` |
| Registered target | `sl-app` on port 80 | `sl-app` on port 5000 |

Set **Deregistration delay** to `10` seconds on both.

Create an **internet-facing Application Load Balancer** `sl-alb` in `sl-app-vpc`, using **both** public subnets and only `sl-alb-sg`. The `HTTP:80` listener forwards to `sl-frontend-tg` by default. Add a rule: **path `/api/*`** → `sl-backend-tg`, priority `10`. Both target groups stay *unhealthy* until the first deploy, which is expected.

### 10. Jenkins server (`sl-jenkins`)

- Amazon Linux 2023, `t3.small`, 20 GiB gp3, key pair `studylanex-key`.
- VPC `sl-ci-vpc`, subnet `sl-ci-public`, security group `sl-jenkins-sg`, auto-assign public IP, IAM instance profile `sl-jenkins-role`, and its own Elastic IP.
- SSH in and install the tools:

```bash
ssh -i studylanex-key.pem ec2-user@<JENKINS_ELASTIC_IP>

sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile
sudo mkswap /swapfile && sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

sudo dnf install -y docker git java-21-amazon-corretto-headless fontconfig
sudo curl -fsSL -o /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
sudo dnf install -y jenkins

sudo usermod -aG docker jenkins
sudo systemctl enable --now docker
sudo systemctl enable --now jenkins
```

**Checkpoint: run these three tests before continuing.**

```bash
sudo -u jenkins aws sts get-caller-identity    # prints your account → IAM role works
sudo -u jenkins docker ps                       # no error → Docker permission works
nc -zv 10.20.1.10 22                            # "succeeded" → peering works
```

If `docker ps` fails, run `sudo systemctl restart jenkins` and test again. If `nc` times out, recheck the two peering routes and the SSH rule on `sl-app-sg`.

### 11. Configure Jenkins in the browser

1. Open `http://<JENKINS_ELASTIC_IP>:8080` and unlock it with `sudo cat /var/lib/jenkins/secrets/initialAdminPassword`.
2. Choose **Install suggested plugins**, create the admin user, then install the **SSH Agent** plugin.
3. **Manage Jenkins → Credentials → System → Global credentials → Add Credentials**:

| Field | Value |
|---|---|
| Kind | SSH Username with private key |
| ID | `app-ssh` (the Jenkinsfile uses this exact ID) |
| Username | `ec2-user` |
| Private Key | Enter directly → paste the contents of `studylanex-key.pem` |

4. **New Item** → name `studylanex` → **Pipeline**, with these settings:

| Setting | Value |
|---|---|
| Definition | Pipeline script from SCM |
| SCM | Git |
| Repository URL | `https://github.com/kamleshsingh2097/StudyLaneX-jenkins-aws.git` |
| Branch specifier | `*/main` (or `*/master`, whichever you use) |
| Script path | `Jenkinsfile` |

5. Save, then **Build Now**. For a private repository, add a GitHub personal access token as a "Username with password" credential and select it on the job.

---

## ✅ Verifying the Deployment

1. **Jenkins:** open the build → Console Output. All four stages are green and the log ends with `>> Deploy OK`.
2. **ECR:** both repositories contain an image tagged with the build number.
3. **EC2 → Target Groups:** both show **healthy** within about a minute.
4. Open `http://<ALB-DNS-name>`. The site loads.
5. Open `http://<ALB-DNS-name>/api/feedback`. It returns JSON.
6. Submit the feedback form and the contact form.
7. Push a small visible change to GitHub. A new build starts within a minute and the change appears on the site.

Useful commands on the app server (Session Manager):

```bash
sudo docker ps                    # sl-frontend and sl-backend should be running
sudo docker logs sl-backend       # expect "✅ MongoDB Connected"
curl http://localhost:5000/       # backend health check
curl http://localhost/            # frontend
```

### Troubleshooting

| Problem | Likely cause |
|---|---|
| Jenkins can't reach `10.20.1.10` | Missing route in either route table, or the SSH rule on `sl-app-sg` |
| `no basic auth credentials` on push | The IAM role is not attached to the Jenkins instance |
| Backend target unhealthy | Atlas does not allow the app server's Elastic IP, or `MONGO_URI` is wrong. Run `docker logs sl-backend` |
| Forms fail with 500 or CORS errors | The CORS change in `backend/server.js` is not in the deployed image |
| Page loads but data is empty | The frontend is still calling a hard-coded port instead of relative `/api/...` URLs |
| ALB shows 502 or 503 | Target unhealthy, or `sl-app-sg` does not allow `sl-alb-sg` on ports 80 and 5000 |
| Build killed during `npm run build` | Out of memory. Check `free -h` for swap |
| `MONGO_URI missing in SSM` in the deploy log | The parameter is missing, misnamed, or `sl-app-role` cannot read `/studylanex/*` |

---

## 🔐 Environment Variables

| Variable | Used by | Required | Where it is set |
|---|---|---|---|
| `MONGO_URI` | Backend | Yes | SSM parameter `/studylanex/MONGO_URI` (local: `backend/.env`) |
| `EMAIL_USER` | Contact form | For email sending | SSM parameter `/studylanex/EMAIL_USER` (local: `backend/.env`) |
| `EMAIL_PASS` | Contact form | For email sending | SSM parameter `/studylanex/EMAIL_PASS` (local: `backend/.env`) |
| `PORT` | Backend | No (default 5000) | Set to `5000` by `deploy.sh` |

`deploy.sh` turns every parameter under `/studylanex/` into an environment variable named after the last part of the path. Never commit `.env` files or real credentials.

---

## 🔌 API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Backend health check (used by `deploy.sh`) |
| GET | `/api/feedback` | List feedback, newest first |
| POST | `/api/feedback` | Submit feedback (`name`, `role`, `rating`, `message`) |
| POST | `/api/contact/send` | Send a message from the contact form (`name`, `email`, `message`) |

---

## 💰 Cost

Expect roughly **$58/month** if everything runs all the time (ALB about $24, Jenkins about $16, app server about $8, public IPv4 addresses about $7). Check the AWS Pricing Calculator for current prices.

- Stop the Jenkins instance when you are not building to save about $14/month.
- Create a budget alert: Billing → Budgets, around $60 with an email alert.
- To remove everything, delete in this order: ALB → target groups → EC2 instances → release Elastic IPs → peering connection → ECR repositories → VPCs. Unattached Elastic IPs still cost money.

---

## ⚠️ Notes and Known Limitations

- **HTTP only.** The load balancer listens on port 80. For HTTPS, add an ACM certificate and an HTTPS listener on the ALB.
- **Single app server.** There is one EC2 instance and one copy of each container, so a deploy has a short gap while containers restart, and an instance failure means downtime.
- **Public subnet for the app server.** This avoids the cost of a NAT gateway. Access is limited by `sl-app-sg`, which only accepts traffic from the load balancer and SSH from the Jenkins VPC.
- **Jenkins access is limited to your IP.** If your IP changes, update the `sl-jenkins-sg` rules.
- **Host key checking.** The pipeline uses `StrictHostKeyChecking=accept-new`, which trusts the app server's key the first time it connects.
- **Gmail.** The contact form needs a Gmail **app password**, not your normal password.
- Never commit `.env` files or real credentials.

---

## 📌 Future Improvements

- Authentication system (Login / Signup)
- Course listing and filtering
- Admin dashboard
- Student progress tracking
- HTTPS with a custom domain (Route 53 + ACM)
- Infrastructure as code (Terraform or CloudFormation) for the AWS setup
- Auto Scaling or a second app instance for zero-downtime deploys
- Automated tests and a lint stage in the Jenkins pipeline
- A GitHub webhook instead of polling

---

## 🔗 Credits

- **Original project and author:** Shruti Verma, https://github.com/shruti-Verma64894/StudyLaneX
  B.Tech IT Student | MERN Stack Learner
- **Docker, Jenkins and AWS deployment (this repository):** https://github.com/kamleshsingh2097/StudyLaneX-jenkins-aws

---

⭐ If you like this project, feel free to give it a star on GitHub!
