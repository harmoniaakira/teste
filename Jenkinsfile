pipeline {
    environment {
        DOCKER_REPOSITORY_PUSH = "nxs.tribanco.com.br:8082/"
		DOCKER_REPOSITORY_PULL = "nxs.tribanco.com.br:8181/"
        IMAGE_NAME = "${SERVICE_NAME}"
		IMAGE_TAG_NAME = "${ENVIRONMENT_PROFILE}"
    }
    agent {label 'DEVOPS-CRP'}
    stages {
        stage('Get image tag name'){
			steps{
				script{
					IMAGE_TAG_NAME = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
				}
				echo "${IMAGE_TAG_NAME}"
			}
		}
        stage("NPN Install")
        {
            steps{
                sh "docker run --rm -v ${env.WORKSPACE}:/usr/project -w /usr/project ${DOCKER_REPOSITORY_PULL}node:13.12.0-alpine npm install"
            }
        }
        stage("NPN Build")
        {
            steps{
                sh "docker run --rm -v ${env.WORKSPACE}:/usr/project -w /usr/project ${DOCKER_REPOSITORY_PULL}node:13.12.0-alpine npm run build:${ENVIRONMENT_PROFILE}"
            }
        }
        stage("NPN Test")
        {
            steps{
                sh "docker run --rm -v ${env.WORKSPACE}:/usr/project -w /usr/project ${DOCKER_REPOSITORY_PULL}node:13.12.0-alpine npm run test"
            }
        }
        // stage('Analize Application (Sonar Scanner)') {
		// 	steps {
		// 		script {
		// 			def projectKey = "${env.JOB_NAME}-k8sdev".replaceAll("/", "-")
		// 			def projectName = "${env.JOB_NAME}-k8sdev"
		// 			def version = "${IMAGE_TAG_NAME}"
		// 			def sonarExclusions = "**/contexts/**/*,**/utils/**/*,**/components/**/*,**/resources/**/*,**/common/**/*,**/routes/**/*,**/mock/**/*,**/public/**/*,**/*.styles.js,**/*.test.js,**/setupTests.js,**/serviceWorker.js,**/jest.config.js,**/index.js,**/containers/Geo/*"
		// 			def sonarCoverageExclusions = "**/contexts/**/*,**/utils/**/*,**/components/**/*,**/resources/**/*,**/common/**/*,**/routes/**/*,**/mock/**/*,**/public/**/*,**/*.styles.js,**/*.test.js,**/setupTests.js,**/serviceWorker.js,**/jest.config.js,**/index.js,**/containers/Geo/*"
		// 			withSonarQubeEnv {
		// 					def script = "docker run --rm -v ${env.WORKSPACE}:/usr/src  ${DOCKER_REPOSITORY_PULL}sonarsource/sonar-scanner-cli " +
		// 						"-Dsonar.host.url=${env.SONAR_HOST_URL} " +
		// 					    "-Dsonar.login=${env.SONAR_AUTH_TOKEN} " +
		// 					    "-Dsonar.projectKey=${projectKey} " +
		// 					    "-Dsonar.projectName=${projectName} " +
		// 						"-Dsonar.projectVersion=${version} " +
		// 						"-Dsonar.exclusions=${sonarExclusions} " +
		// 						"-Dsonar.coverage.exclusions=${sonarCoverageExclusions} " +
        //                         "-Dproject.settings=sonar-project.properties"
		// 					sh script
		// 			}
		// 		}
		// 	}
		// }
		// stage('Sonar Quality Gate Status') {
		// 	steps {
		// 		script {
		// 			sleep 30
		// 			timeout(time: 60, unit: "SECONDS") {
		// 				def qg = waitForQualityGate()
		// 				if (qg.status != "OK" && config.envName != jenkinsEnv().DEV.getValue()) {
		// 					error("Deploy interrompido devido a falhas no Sonar: ${qg.status}")
		// 				} else if (qg.status != "OK"){
		// 					currentBuild.result = 'UNSTABLE'
		// 					echo "Aplicacao possui falhas no Sonar, realize as devidas correcoes."
		// 				}
		// 			}
		// 		}
		// 	}
		// }
        stage('Build Docker Image') {
            steps {
                sh "docker build --build-arg dockerRepository=${DOCKER_REPOSITORY_PULL} -t ${DOCKER_REPOSITORY_PUSH}${IMAGE_NAME}:${IMAGE_TAG_NAME} ."
            }
        }
        stage('Push Docker Image to Nexus Repository') {
            steps {
                sh "docker push ${DOCKER_REPOSITORY_PUSH}${IMAGE_NAME}:${IMAGE_TAG_NAME}"
            }
        }
        stage("Publish")
		{
			steps {
				build job: 'deploy-onboarding-pf-frontend', parameters: [
					string(name: 'IMAGE_TAG_NAME', value: "${IMAGE_TAG_NAME}")
				], wait: false
			}
		}
    }
}