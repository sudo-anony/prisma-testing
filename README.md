# Docker and WSL Installation Guide For Windows

This guide will walk you through installing WSL and Docker, and getting Docker up and running on your machine.

## Prerequisites

- **Windows 11** (Ensure your system is up to date).

## Installation Steps

### 1. Install WSL (Windows Subsystem for Linux)

1. Open **Command Prompt** as Administrator:
   - Press `Windows Key`, type `cmd`, right-click on **Command Prompt**, and select **Run as Administrator**.
   
2. Run the following command in the terminal:

   ```bash
   wsl --install
   ```
### 3- Install the docker desktop app from www.docker.com and after installation restart the PC 
### 4- Make sure to run the docker desktop app
### 5- Go to the repo root directory open cmd as administrator and run 
```bash
docker compose up --build
```

# Docker and WSL Installation Guide For Mac/ Linux
```bash
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce
sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep -oP '(?<=tag_name": "v)[^"]*')" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo docker-compose up --build
```
