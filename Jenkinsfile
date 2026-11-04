pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = 'kamleshsingh2097'
        FRONTEND_IMAGE  = "${DOCKER_HUB_USER}/studylanex-frontend"
        BACKEND_IMAGE   = "${DOCKER_HUB_USER}/studylanex-backend"
        TAG             = "${BUILD_NUMBER}"
    }

    stages {
        stage('Build Images') {
            steps {
                sh 'docker build -t ${FRONTEND_IMAGE}:${TAG} .'
                sh 'docker build -t ${BACKEND_IMAGE}:${TAG} ./backend'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
                    sh 'echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin'
                    sh 'docker push ${FRONTEND_IMAGE}:${TAG}'
                    sh 'docker push ${BACKEND_IMAGE}:${TAG}'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                    sed "s|__BACKEND_IMAGE__|${BACKEND_IMAGE}:${TAG}|" k8s/backend.yaml | kubectl apply -f -
                    sed "s|__FRONTEND_IMAGE__|${FRONTEND_IMAGE}:${TAG}|" k8s/frontend.yaml | kubectl apply -f -
                    kubectl rollout status deployment/studylanex-backend -n studylanex --timeout=180s
                    kubectl rollout status deployment/studylanex-frontend -n studylanex --timeout=180s
                '''
            }
        }
    }

    post {
        always {
            sh 'docker logout || true'
        }
    }
}