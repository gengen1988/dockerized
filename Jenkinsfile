node {

  def app

  stage('Preparation') {
    checkout scm
  }

  stage('Build') {
    app = docker.build('alsorunning/dockerized')
  }

  stage('Push') {
    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
      app.push("${env.BUILD_NUMBER}")
      app.push("latest")
    }
  }

}
