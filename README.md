# DevOps Internship — Complete Project Portfolio

> **Intern Name:** Udit Prasad  
> **Domain:** DevOps / Cloud Computing / Automation  
> **Duration:** 1 Month  
> **Status:** ✅ All Projects Completed  

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Project 1: CI/CD Pipeline Automation](#project-1-cicd-pipeline-automation)
3. [Project 2: Dockerized Web Application](#project-2-dockerized-web-application)
4. [Project 3: Kubernetes Deployment](#project-3-kubernetes-deployment)
5. [Technology Stack](#technology-stack)
6. [CI/CD Pipeline Overview](#cicd-pipeline-overview)
7. [Setup Instructions](#setup-instructions)
8. [Testing Results](#testing-results)
9. [Architecture Diagrams](#architecture-diagrams)
10. [Learning Outcomes](#learning-outcomes)
11. [Future Enhancements](#future-enhancements)
12. [Author](#author)

---

## Overview

This repository contains the complete portfolio of **3 major DevOps projects** completed during a 1-month internship program. Each project demonstrates practical experience in modern DevOps practices including CI/CD automation, containerization, and container orchestration.

### Projects at a Glance

| # | Project | Focus Area | Tests | Status |
|---|---------|-----------|-------|--------|
| 1 | [CI/CD Pipeline Automation](#project-1-cicd-pipeline-automation) | GitHub Actions, Automated Testing, Deployment | 16 | ✅ |
| 2 | [Dockerized Web Application](#project-2-dockerized-web-application) | Docker, Docker Compose, Nginx, MySQL | 25 | ✅ |
| 3 | [Kubernetes Deployment](#project-3-kubernetes-deployment) | K8s, Rolling Updates, Health Probes, Scaling | 32 | ✅ |

**Total Tests:** 73 automated tests | **Total Pass Rate:** 100% ✅

---

## Project 1: CI/CD Pipeline Automation

### 🎯 Objective
Implement a complete Continuous Integration and Continuous Deployment pipeline using GitHub Actions that automatically tests, builds, and deploys applications on every code push.

### ✨ Key Features
- Automated code quality checks (linting)
- 16 automated validation tests
- Build artifact management
- GitHub Pages deployment
- Push and Pull Request triggers

### 🛠️ Technology Stack
- **CI/CD Platform:** GitHub Actions
- **Languages:** HTML5, CSS3, JavaScript
- **Testing:** Node.js (Custom validation suite)
- **Code Quality:** ESLint, HTML5 validation
- **Deployment:** GitHub Pages

### 📁 Project Structure
```
project1/
├── index.html                    # Portfolio website
├── package.json                  # Project configuration
├── .github/workflows/ci-cd.yml   # CI/CD pipeline
├── test/validate.js              # 16 automated tests
├── assets/profile.jpg            # Profile photo
└── README.md                     # Documentation
```

### 🔧 Setup Instructions
```bash
git clone https://github.com/uditprasad2903/project1-cicd-pipeline.git
cd project1-cicd-pipeline
npm install
npm test    # Run tests
npm run build   # Build project
```

---

## Project 2: Dockerized Web Application

### 🎯 Objective
Build, containerize, and deploy a modern web application using Docker technologies with multi-container orchestration via Docker Compose.

### ✨ Key Features
- Multi-stage Docker builds
- Docker Compose orchestration (3 services)
- Nginx reverse proxy
- MySQL database with persistent volumes
- Environment variable management
- 25 automated validation tests

### 🛠️ Technology Stack
- **Containerization:** Docker
- **Orchestration:** Docker Compose
- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js / Express.js
- **Database:** MySQL 8
- **Web Server:** Nginx
- **CI/CD:** GitHub Actions

### 📁 Project Structure
```
project2/
├── index.html                    # Portfolio website
├── Dockerfile                    # Docker image config
├── docker-compose.yml            # Multi-container orchestration
├── api/
│   ├── Dockerfile                # Backend container
│   └── server.js                 # Node.js API
├── database/init.sql             # DB initialization
├── nginx/nginx.conf              # Reverse proxy config
├── .github/workflows/ci-cd.yml   # CI/CD pipeline
├── test/validate.js              # 25 automated tests
├── assets/profile.jpg            # Profile photo
└── README.md                     # Documentation
```

### 🔧 Setup Instructions
```bash
git clone https://github.com/uditprasad2903/project2-docker-app.git
cd project2-docker-app

# Option 1: Run with Docker Compose
docker-compose up --build

# Option 2: Run tests only
npm install
npm test
npm run build
```

---

## Project 3: Kubernetes Deployment

### 🎯 Objective
Deploy a containerized web application on Kubernetes with production-grade configuration including rolling updates, health probes, and auto-scaling.

### ✨ Key Features
- Docker containerization with Alpine base
- Kubernetes deployment (2+ replicas)
- Rolling update strategy (zero downtime)
- Liveness & readiness health probes
- NodePort service exposure
- Ingress controller configuration
- Namespace management
- Resource limits and requests
- 32 automated validation tests

### 🛠️ Technology Stack
- **Orchestration:** Kubernetes
- **Containerization:** Docker
- **CLI Tools:** kubectl
- **Local Cluster:** Minikube / Kind
- **Web Server:** Nginx (Alpine)
- **CI/CD:** GitHub Actions
- **Monitoring:** Prometheus & Grafana (Optional)

### 📁 Project Structure
```
project3/
├── index.html                    # Portfolio website
├── Dockerfile                    # Docker image config
├── .github/workflows/ci-cd.yml   # CI/CD pipeline
├── k8s/
│   ├── namespace.yaml            # Namespace definition
│   ├── deployment.yaml           # Deployment with probes
│   ├── service.yaml              # Service exposure
│   └── ingress.yaml              # Ingress routing
├── test/validate.js              # 32 automated tests
├── assets/profile.jpg            # Profile photo
└── README.md                     # Documentation
```

### 🔧 Setup Instructions
```bash
git clone https://github.com/uditprasad2903/project3-kubernetes-deploy.git
cd project3-kubernetes-deploy

# Option 1: Deploy to Kubernetes
minikube start
kubectl apply -f k8s/
kubectl get pods -n sample-app

# Option 2: Run tests only
npm install
npm test
npm run build
```

---

## Technology Stack

### Core Technologies
| Category | Technologies |
|----------|-------------|
| **Containerization** | Docker, Docker Compose |
| **Orchestration** | Kubernetes, kubectl |
| **CI/CD** | GitHub Actions, YAML |
| **Frontend** | HTML5, CSS3, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL 8 |
| **Web Server** | Nginx |
| **Cloud** | AWS, Render, Vercel |
| **Monitoring** | Prometheus, Grafana |

### DevOps Tools
- **Version Control:** Git & GitHub
- **Code Quality:** ESLint, HTML5 Validation
- **Testing:** Node.js Custom Test Suite
- **Package Manager:** npm
- **Container Registry:** Docker Hub

---

## CI/CD Pipeline Overview

All 3 projects include a standardized CI/CD pipeline using GitHub Actions with the following stages:

### Pipeline Workflow
```
┌─────────────────┐     ┌──────────────┐     ┌────────────┐     ┌─────────────┐
│   Code Push     │────▶│   Lint Job   │────▶│  Test Job  │────▶│  Build Job  │
│   to GitHub     │     │              │     │            │     │  (dist/)    │
└─────────────────┘     └──────────────┘     └────────────┘     └──────┬──────┘
                                                                        │
                                                                        ▼
                                                              ┌─────────────────┐
                                                              │  Deploy Job     │
                                                              │  (GitHub Pages) │
                                                              └─────────────────┘
```

### Pipeline Stages

| Stage | Purpose | Tools |
|-------|---------|-------|
| **Lint** | Code quality validation | ESLint, HTML check |
| **Test** | Automated validation tests | Node.js custom suite |
| **Build** | Generate production output | npm build script |
| **Deploy** | Deploy to GitHub Pages | peaceiris/actions-gh-pages |

### Key Features
- ✅ All actions using `@v4` (latest versions)
- ✅ Proper dependency chain (lint → test → build → deploy)
- ✅ Build artifact management
- ✅ `.nojekyll` file for static site deployment
- ✅ Push and Pull Request triggers
- ✅ Environment protection for production

---

## Setup Instructions

### Prerequisites
- Node.js v18 or higher
- npm (comes with Node.js)
- Git
- Docker Desktop (for Project 2)
- Minikube (for Project 3)
- A GitHub account

### Quick Start

#### Clone All Projects
```bash
# Project 1
git clone https://github.com/uditprasad2903/project1-cicd-pipeline.git

# Project 2
git clone https://github.com/uditprasad2903/project2-docker-app.git

# Project 3
git clone https://github.com/uditprasad2903/project3-kubernetes-deploy.git
```

#### Run Tests
```bash
cd project1  # or project2, project3
npm install
npm test
```

#### Build Projects
```bash
npm run build
```

#### Run Dockerized App (Project 2)
```bash
cd project2
docker-compose up --build
```

#### Deploy to Kubernetes (Project 3)
```bash
cd project3
minikube start
kubectl apply -f k8s/
kubectl get pods -n sample-app
```

---

## Testing Results

### Comprehensive Test Coverage

| Project | Test Category | Tests | Pass Rate |
|---------|--------------|-------|-----------|
| **Project 1** | Structure Tests | 3 | ✅ 100% |
| | Content Tests | 6 | ✅ 100% |
| | Configuration Tests | 3 | ✅ 100% |
| | CI/CD Workflow Tests | 4 | ✅ 100% |
| **Total Project 1** | | **16** | **✅ 100%** |
| | | | |
| **Project 2** | Structure Tests | 4 | ✅ 100% |
| | Content Tests | 6 | ✅ 100% |
| | Docker Tests | 6 | ✅ 100% |
| | Configuration Tests | 3 | ✅ 100% |
| | CI/CD Workflow Tests | 6 | ✅ 100% |
| **Total Project 2** | | **25** | **✅ 100%** |
| | | | |
| **Project 3** | Structure Tests | 8 | ✅ 100% |
| | Content Tests | 6 | ✅ 100% |
| | Dockerfile Tests | 3 | ✅ 100% |
| | K8s Manifest Tests | 7 | ✅ 100% |
| | Configuration Tests | 2 | ✅ 100% |
| | CI/CD Workflow Tests | 6 | ✅ 100% |
| **Total Project 3** | | **32** | **✅ 100%** |

### Grand Total: 73 Tests | 73 Passed | 0 Failed | 100% Pass Rate ✅

---

## Architecture Diagrams

### Project 1: CI/CD Pipeline Architecture
```
┌──────────────┐     ┌──────────────────────┐     ┌─────────────────┐
│   Developer  │────▶│   GitHub Repository  │────▶│  GitHub Actions │
│   (Push PR)  │     │   (Source Code)      │     │  (CI/CD Engine) │
└──────────────┘     └──────────────────────┘     └────────┬────────┘
                                                            │
                                              ┌─────────────┴─────────────┐
                                              ▼                           ▼
                                    ┌──────────────────┐       ┌──────────────────┐
                                    │   CI Stage       │       │   CD Stage       │
                                    │ • Lint           │       │ • Build          │
                                    │ • Test (16)      │       │ • Deploy         │
                                    │ • Build          │       │ • Verify         │
                                    └──────────────────┘       └──────────────────┘
```

### Project 2: Docker Compose Architecture
```
                    ┌──────────────┐
                    │    User      │
                    │   Request    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │     Nginx    │
                    │  Reverse     │
                    │   Proxy      │
                    └──────┬───────┘
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
    ┌──────────────────┐     ┌──────────────────┐
    │   Frontend       │     │   Backend API    │
    │   Container      │     │   Container      │
    │   (HTML/CSS/JS)  │     │   (Node.js)      │
    └──────────────────┘     └────────┬─────────┘
                                      │
                                      ▼
                            ┌──────────────────┐
                            │   Database       │
                            │   Container      │
                            │   (MySQL 8)      │
                            └──────────────────┘
```

### Project 3: Kubernetes Architecture
```
                    ┌──────────────┐
                    │    Users     │
                    │   Request    │
                    └──────┬───────┘
                           ▼
                    ┌──────────────┐
                    │  Ingress     │
                    │  Controller  │
                    └──────┬───────┘
                           ▼
                    ┌──────────────┐
                    │   Service    │
                    │  (NodePort)  │
                    └──────┬───────┘
                           ▼
              ┌────────────┴────────────┐
              ▼                         ▼
    ┌──────────────────┐     ┌──────────────────┐
    │  Pod Replica 1   │     │  Pod Replica 2   │
    │  Docker Container│     │  Docker Container│
    │   Nginx Server   │     │   Nginx Server   │
    │   Health Probes  │     │   Health Probes  │
    └──────────────────┘     └──────────────────┘
```

---

## Learning Outcomes

### Technical Skills Acquired

| Skill | Proficiency | Projects |
|-------|-------------|----------|
| Git & GitHub | Advanced | All 3 |
| GitHub Actions | Advanced | All 3 |
| Docker | Advanced | Project 2, 3 |
| Docker Compose | Advanced | Project 2 |
| Kubernetes | Intermediate | Project 3 |
| YAML Configuration | Advanced | All 3 |
| CI/CD Concepts | Advanced | All 3 |
| Nginx Configuration | Intermediate | Project 2 |
| MySQL Database | Intermediate | Project 2 |
| Node.js | Intermediate | All 3 |
| HTML/CSS/JavaScript | Advanced | All 3 |
| Automated Testing | Intermediate | All 3 |
| Container Orchestration | Intermediate | Project 3 |
| Health Monitoring | Intermediate | Project 3 |
| Deployment Automation | Advanced | All 3 |

### Soft Skills Developed

- ✅ **Problem-Solving:** Debugging complex CI/CD and Docker issues
- ✅ **Documentation:** Comprehensive README and project reports
- ✅ **Time Management:** Completed all 3 projects within 1 month
- ✅ **Self-Learning:** Mastered Kubernetes and Docker Compose independently
- ✅ **Attention to Detail:** 73 automated tests with 100% pass rate
- ✅ **Best Practices:** Security, modularity, and maintainability focus

---

## Future Enhancements

### Project 1: CI/CD Pipeline
- 🐳 Docker integration for consistent build environments
- ☸️ Kubernetes deployment instead of static hosting
- 🌐 Multi-cloud deployment (AWS, GCP, Azure)
- 🔔 Slack/Discord notifications on deployment
- 📊 Advanced monitoring with Prometheus & Grafana
- 🔄 Automated rollback system
- 🧪 Integration tests with Playwright

### Project 2: Dockerized Web Application
- ☸️ Kubernetes integration for orchestration
- 📊 Monitoring dashboards with Prometheus
- 📋 Logging system with ELK stack
- 🔒 SSL/TLS configuration
- 🌐 Multi-environment deployment
- 📦 Container registry integration
- 🔄 Auto-scaling support

### Project 3: Kubernetes Deployment
- 📦 Helm chart implementation
- 📈 Horizontal Pod Autoscaler (HPA)
- 🔒 Kubernetes Secrets management
- 💾 Persistent Volumes
- 📊 Monitoring dashboards with Prometheus & Grafana
- 🌐 Multi-service microservices deployment

---

## Security Practices

### Implemented Across All Projects

| Practice | Implementation |
|----------|----------------|
| GitHub Secrets | Used for deployment tokens |
| No Hardcoded Credentials | All sensitive data via environment variables |
| Protected Branches | Deploy only from `main` |
| Minimal Permissions | Workflows use least-privilege access |
| Minimal Base Images | Alpine-based images reduce attack surface |
| Health Monitoring | Liveness/readiness probes ensure reliability |
| Network Isolation | Custom Docker network for service isolation |
| Resource Limits | CPU and memory limits prevent resource exhaustion |

---

## Repository Links

| Project | Repository | Live Demo |
|---------|-----------|-----------|
| **Master Portfolio** | [GitHub](https://github.com/uditprasad2903/udit-portfolio) | [Live](https://uditprasad2903.github.io/udit-portfolio/) |
| **Project 1: CI/CD Pipeline** | [GitHub](https://github.com/uditprasad2903/project1-cicd-pipeline) | [Live](https://uditprasad2903.github.io/project1-cicd-pipeline/) |
| **Project 2: Dockerized Web App** | [GitHub](https://github.com/uditprasad2903/project2-docker-app) | [Live](https://uditprasad2903.github.io/project2-docker-app/) |
| **Project 3: Kubernetes Deployment** | [GitHub](https://github.com/uditprasad2903/project3-kubernetes-deploy) | [Live](https://uditprasad2903.github.io/project3-kubernetes-deploy/) |

---

## Author

### Udit Prasad
- 📧 **Email:** [uditprasad32@gmail.com](mailto:uditprasad32@gmail.com)
- 🔗 **LinkedIn:** [linkedin.com/in/uditprasad32](https://www.linkedin.com/in/uditprasad32)
- 🐙 **GitHub:** [github.com/uditprasad2903](https://github.com/uditprasad2903)

---

## License

This project is created for educational and internship purposes.

---

## Submission Checklist

| Item | Status |
|------|--------|
| Project 1: CI/CD Pipeline Source Code | ✅ |
| Project 2: Dockerized Web App Source Code | ✅ |
| Project 3: Kubernetes Deployment Source Code | ✅ |
| Master Portfolio Website | ✅ |
| GitHub Actions Workflow Files (3 projects) | ✅ |
| Dockerfile (Projects 2 & 3) | ✅ |
| Docker Compose Configuration | ✅ |
| Kubernetes YAML Manifests (4 files) | ✅ |
| Automated Test Suites (73 tests total) | ✅ |
| README Documentation (All projects) | ✅ |
| Project Reports (All projects) | ✅ |
| Deployment URLs (GitHub Pages) | ✅ |
| Screenshots of Successful Workflows | ✅ |

---

*DevOps Internship Program — Completed June 2026*
