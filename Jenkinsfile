pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Vedantu2005/WT_exp_6.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the app...'
                // You would add real build commands here, e.g., sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // You would add real test commands here, e.g., sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to server...'
                // You would add real deployment commands here
            }
        }
    }
}