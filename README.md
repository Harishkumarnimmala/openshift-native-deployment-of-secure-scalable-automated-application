# OpenShift-Native Deployment of a Secure, Scalable, and Automated Application

This project demonstrates a full-stack application deployment (React frontend, Node.js backend, and PostgreSQL database) using a fully OpenShift-native approach. No external CI/CD tools like Jenkins, GitHub Actions, or Argo CD are used. Instead, OpenShift-native objects such as BuildConfigs, DeploymentConfigs, Services, Routes, Secrets, ConfigMaps, and Persistent Volume Claims manage the complete lifecycle.

## Project Structure

- Application stack:
  - React frontend
  - Node.js backend (API)
  - PostgreSQL database
- All components are containerized, built, and deployed within OpenShift
- Security, persistence, and automation handled via native OpenShift constructs

## Key Capabilities

- Automated builds using OpenShift `BuildConfig`
- Deployments managed with `DeploymentConfig`
- PostgreSQL with persistent storage and secure credentials
- Secrets and ConfigMaps for environment isolation
- Internal Services and public exposure through OpenShift Routes
- All resources defined declaratively in a single `openshift-deployment.yaml` file

Author
Harish Kumar Nimmala