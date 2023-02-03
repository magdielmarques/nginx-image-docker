# Docker with Reverse Proxy

Laboratory project with the intention of studying an environment with several applications running simultaneously. Using Docker and Reverse Proxy for this.

![Proxy Reverso](https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2022/03/servidor-proxy.webp)

## Tech Stack

1. JavaScript
2. Node
3. Docker
4. Mysql
5. Nginx

## Concepts

1.Reverse Proxy

## Start the project:

1. On "app" directory run **npm start** to run only Node App
2. On "app" directory run **npm start:dev** to run all apps. **If you wanna do it, you should firts uncoment "volumes" in docker-compose.yaml**
3. On "app" directory run **npm start:docker**. **You can do it if you wanna only see the project working**
4. On "main" directory run **docker-compose up -d**. This is only different form to do the step 3.
