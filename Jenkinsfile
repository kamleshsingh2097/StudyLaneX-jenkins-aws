pipeline {

    agent any
 
    options {

        timestamps()

        disableConcurrentBuilds()

        timeout(time: 30, unit: 'MINUTES')

    }
 
    triggers { pollSCM('* * * * *') }
 
    environment {

        AWS_REGION = 'ap-south-1'

        PROJECT    = 'studylanex'

        APP_HOST   = '10.20.1.10'

        APP_USER   = 'ec2-user'

        TAG        = "${BUILD_NUMBER}"

    }
 
    stages {

        stage('Prepare') {

            steps {

                script {

                    env.ACCOUNT_ID     = sh(script: 'aws sts get-caller-identity --query Account --output text', returnStdout: true).trim()

                    env.REGISTRY       = "${env.ACCOUNT_ID}.dkr.ecr.${env.AWS_REGION}.amazonaws.com"

                    env.FRONTEND_IMAGE = "${env.REGISTRY}/${env.PROJECT}-frontend:${env.TAG}"

                    env.BACKEND_IMAGE  = "${env.REGISTRY}/${env.PROJECT}-backend:${env.TAG}"

                }

            }

        }
 
        stage('Build Images') {

            steps {

                sh 'docker build -t $FRONTEND_IMAGE .'

                sh 'docker build -t $BACKEND_IMAGE ./backend'

            }

        }
 
        stage('Push to ECR') {

            steps {

                sh '''

                    aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $REGISTRY

                    docker push $FRONTEND_IMAGE

                    docker push $BACKEND_IMAGE

                '''

            }

        }
        stage('Deploy over VPC Peering') {
            steps {
                sshagent(credentials: ['app-ssh']) {
                    sh '''
                        OPTS="-o StrictHostKeyChecking=accept-new -o ConnectTimeout=10"
                        scp $OPTS deploy/deploy.sh $APP_USER@$APP_HOST:/tmp/deploy.sh
                        ssh $OPTS $APP_USER@$APP_HOST "sudo AWS_REGION=$AWS_REGION bash /tmp/deploy.sh $FRONTEND_IMAGE $BACKEND_IMAGE"
                    '''
                }
            }
        }
 
        
                

    }
 
    post {

        always {

            sh 'docker logout $REGISTRY || true'

            sh 'docker image prune -af --filter "until=72h" || true'

        }

    }

}
 
