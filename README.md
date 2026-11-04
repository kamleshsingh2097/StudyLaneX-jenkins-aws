# 🎓 StudyLaneX

StudyLaneX is a full-stack MERN web application that gives students a modern learning platform where they can explore course categories, read learning experiences and testimonials, share feedback and get in touch through a contact form.

This repository is a copy of the original project with **Docker**, **Jenkins** and **Kubernetes** added. A push to GitHub makes Jenkins build two Docker images, push them to Docker Hub and roll them out to a Kubernetes cluster.

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
- Dockerized frontend and backend, with images pushed to Docker Hub
- Jenkins pipeline that builds, pushes and deploys on every new commit
- Kubernetes deployment with 2 replicas per service, readiness probes and resource limits

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, React Router, HTML5, CSS3, JavaScript |
| Backend | Node.js, Express 5, Mongoose, CORS, dotenv |
| Database | MongoDB Atlas |
| Email | Nodemailer (Gmail SMTP) |
| Containers | Docker, Docker Hub |
| CI/CD | Jenkins (Pipeline from SCM) |
| Orchestration | Kubernetes (Deployments + NodePort Services) |

---

## 📁 Project Structure

```
StudyLaneX-main/
├── Dockerfile              # Frontend image (Vite build + preview server)
├── .dockerignore           # Frontend build context exclusions
├── Jenkinsfile             # Pipeline: build → push → deploy
├── package.json            # Frontend dependencies and scripts
├── vite.config.js
├── index.html
├── src/                    # React source code
│   ├── App.jsx
│   ├── Components/
│   └── services/           # API helper (feedbackService.js)
├── public/                 # Course pages and images
├── k8s/
│   ├── backend.yaml        # Backend Deployment + NodePort Service
│   └── frontend.yaml       # Frontend Deployment + NodePort Service
└── backend/
    ├── Dockerfile          # Backend image (plain Node.js)
    ├── .dockerignore
    ├── package.json        # "start": "node server.js"
    ├── server.js           # Express app, CORS, MongoDB connection
    ├── models/             # Feedback.js
    └── routes/             # feedbackRoutes.js, contactRoutes.js
```

---

## 🌐 Accessing the App (Ports)

| What | Port | Address |
|---|---|---|
| **Frontend** (the website) | **30173** | `http://<node-ip>:30173` |
| **Backend** (the API) | **30500** | `http://<node-ip>:30500` |

- `<node-ip>` is the IP address of a node in your Kubernetes cluster (for example the machine's LAN IP, or the output of `minikube ip` if you use Minikube).
- **Only open the frontend (30173) in the browser.** The React code calls the backend on port 30500 by itself, using the same hostname as the page.
- Open the backend (30500) directly only to check it is running.
- Inside the cluster the containers listen on 4173 (frontend) and 5000 (backend). Those numbers are not used in the browser.
- The two ports above are fixed in `k8s/*.yaml` (`nodePort`). The backend CORS rule in `backend/server.js` only accepts pages opened from port **30173**.

---

## 🐳 Docker Images

```bash
# Frontend
docker build -t <dockerhub-user>/studylanex-frontend:<tag> .

# Backend
docker build -t <dockerhub-user>/studylanex-backend:<tag> ./backend
```

Jenkins uses the Docker Hub user `kamleshsingh2097` and the Jenkins build number as the tag, so every build produces a new, unique image version.

The `.dockerignore` files keep `node_modules`, `dist`, `.git` and `.env` out of the images (the root one also skips `backend/`, because the frontend image does not need it).

---

## ☸️ Kubernetes Resources

Each file in `k8s/` contains a **Deployment** and a **Service**.

| | Backend (`k8s/backend.yaml`) | Frontend (`k8s/frontend.yaml`) |
|---|---|---|
| Namespace | `studylanex` | `studylanex` |
| Deployment name | `studylanex-backend` | `studylanex-frontend` |
| Replicas | 2 | 2 |
| Container port | 5000 | 4173 |
| Service type / port | NodePort `5000` → `30500` | NodePort `4173` → `30173` |
| Readiness probe | `GET /` on 5000 | `GET /` on 4173 |
| Resources | request 100m CPU, 128Mi; limit 256Mi | request 100m CPU, 128Mi; limit 384Mi |
| Secret used | `mongo-uri` (key `MONGO_URI`) | none |

- The `image:` field in each file holds a placeholder (`__BACKEND_IMAGE__`, `__FRONTEND_IMAGE__`). Jenkins replaces it with the real image and tag at deploy time.
- The readiness probe keeps traffic away from a pod until it answers. The backend only starts listening after MongoDB connects, so a wrong `MONGO_URI` leaves its pods not ready.
- Deployments update with the default **rolling update**, so the old pods are replaced step by step while the new ones become ready.

---

## 🔁 CI/CD with Jenkins

```
git push ──► GitHub ◄── Jenkins (job reads the Jenkinsfile)
                              │ new commit
                              ▼
                      1. Build Images        (frontend + backend)
                      2. Push to Docker Hub  (tag = build number)
                      3. Deploy to Kubernetes
                              │ kubectl apply + rollout status
                              ▼
                  Kubernetes: namespace "studylanex"
```

**Pipeline stages (`Jenkinsfile`):**

1. **Build Images:** builds `<user>/studylanex-frontend:<build-number>` and `<user>/studylanex-backend:<build-number>`.
2. **Push to Docker Hub:** logs in with the Jenkins credential `dockerhub-creds` (password sent through stdin), then pushes both images.
3. **Deploy to Kubernetes:** replaces the image placeholder in each manifest with `sed`, applies it with `kubectl apply -f -`, then waits with `kubectl rollout status` (180 s timeout per deployment).
4. **Post:** always runs `docker logout`.

### One-time setup

**1. Kubernetes: create the namespace and the database secret**

```bash
kubectl create namespace studylanex

kubectl create secret generic mongo-uri \
  --namespace studylanex \
  --from-literal=MONGO_URI='mongodb+srv://<DB_USERNAME>:<DB_PASSWORD>@<cluster-host>/studylanex'
```

- Use your own MongoDB Atlas connection string, with the database name at the end (`/studylanex`) and no extra quotes inside the value.
- The secret name (`mongo-uri`) and key (`MONGO_URI`) must match `k8s/backend.yaml`.
- Neither the namespace nor the secret is created by the pipeline. They must exist before the first deploy.

**2. Jenkins: add the Docker Hub credential**

**Manage Jenkins → Credentials → System → Global credentials → Add Credentials**

| Field | Value |
|---|---|
| Kind | Username with password |
| Username | your Docker Hub username |
| Password | your Docker Hub password or access token |
| ID | `dockerhub-creds` (the Jenkinsfile uses this exact ID) |

**3. Jenkins machine requirements**

- The Linux user `jenkins` can use Docker:
  ```bash
  sudo usermod -aG docker jenkins
  sudo systemctl restart jenkins
  ```
- `kubectl` is installed and the `jenkins` user has a working kubeconfig that can reach the cluster. Check with:
  ```bash
  sudo -u jenkins kubectl get nodes
  ```
- The cluster nodes can pull the images from Docker Hub (public images, or add an image pull secret).

**4. Jenkins job**

| Setting | Value |
|---|---|
| Job type | Pipeline |
| Definition | Pipeline script from SCM |
| SCM | Git |
| Repository URL | `https://github.com/kamleshsingh2097/StudyLaneX-main.git` |
| Branch specifier | the branch you push to (this snapshot is `master`) |
| Script path | `Jenkinsfile` |
| Build trigger | Poll SCM, for example `H/2 * * * *` (webhooks need Jenkins to be reachable from the internet) |

### Secrets used

| Secret | Where it lives | Used for |
|---|---|---|
| `dockerhub-creds` | Jenkins (Username with password) | Pushing images to Docker Hub |
| `mongo-uri` (key `MONGO_URI`) | Kubernetes Secret in namespace `studylanex` | Backend database connection |

The older Docker-only version used a Jenkins credential called `mongodb-uri`. This version does not, because the database string now comes from the Kubernetes Secret.

---

## ✅ Verifying the Deployment

```bash
kubectl get pods -n studylanex                      # all pods should be Running and READY
kubectl get svc  -n studylanex                      # shows NodePorts 30173 and 30500
kubectl logs deployment/studylanex-backend -n studylanex   # expect "✅ MongoDB Connected"
kubectl rollout status deployment/studylanex-backend -n studylanex
curl http://<node-ip>:30500                         # backend responds
```

Then open `http://<node-ip>:30173` in the browser.

| Problem | Likely cause |
|---|---|
| `kubectl: command not found` or `connection refused` in Jenkins | `kubectl` or the kubeconfig is missing for the `jenkins` user |
| `namespaces "studylanex" not found` | Namespace was not created |
| Backend pods `Running` but not `READY` | Wrong or missing `mongo-uri` secret, so MongoDB never connects |
| `ImagePullBackOff` | Image not pushed, or the repository is private without a pull secret |
| Browser shows a CORS error | Page not opened on port 30173 (see below) |

---

## 🔐 Environment Variables

| Variable | Used by | Required | Where it is set |
|---|---|---|---|
| `MONGO_URI` | Backend | Yes | Kubernetes Secret `mongo-uri` |
| `PORT` | Backend | No (default 5000) | Not set in the manifests |
| `EMAIL_USER` | Contact form | No | Not set in the manifests |
| `EMAIL_PASS` | Contact form | No | Not set in the manifests |

The manifests only pass `MONGO_URI`. Without the email variables, only the contact form's email sending fails; the rest of the app works.

---

## 🔌 API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Backend health check (also used by the readiness probe) |
| GET | `/api/feedback` | List feedback |
| POST | `/api/feedback` | Submit feedback |
| POST | `/api/contact/send` | Send a message from the contact form |

---

## ⚠️ Notes and Known Limitations

- **CORS is tied to port 30173.** `backend/server.js` accepts only origins matching `localhost`, `127.0.0.1` or `192.168.x.x` on port 30173. Opening the site through another hostname (a domain or a public IP) is blocked until the pattern is extended.
- **Contact form emails.** Both forms call the backend on port `30500`. The contact form also needs `EMAIL_USER` and `EMAIL_PASS` to send email, and the manifests do not pass them yet, so submitting the contact form shows an error until they are added (for example from a Kubernetes Secret).
- **Health route text.** `GET /` returns `StudyLaneX Backend Testing 🚀`. It is only a status message, but it differs from the older "Running" text.
- **Local development.** The URLs and CORS rule are set for the Kubernetes ports. For plain local development (`npm run dev` on 5173 and `npm start` on 5000), use the Docker-only version of the project, or adjust those two values.
- Never commit `.env` files or real credentials.

---

## 📌 Future Improvements

- Authentication system (Login / Signup)
- Course listing and filtering
- Admin dashboard
- Student progress tracking
- Ingress instead of NodePort, and an environment-based API URL instead of a hard-coded port
- Pass the email variables through a Kubernetes Secret

---

## 🔗 Credits

- **Original project and author:** Shruti Verma, https://github.com/shruti-Verma64894/StudyLaneX
  B.Tech IT Student | MERN Stack Learner
- **Docker, Jenkins and Kubernetes automation (this repository):** https://github.com/kamleshsingh2097/StudyLaneX-main

---

⭐ If you like this project, feel free to give it a star on GitHub!
