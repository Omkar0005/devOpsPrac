pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18'  // Define this in Jenkins global tool config
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/yourusername/nodejs-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo Deploying...'
                // Add actual deploy command like scp or rsync here
            }
        }
    }
}
