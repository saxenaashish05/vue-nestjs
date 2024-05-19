###################################
# BUILD FOR DEVELOPMENT ENVIRONMENT
# Author: Ashish Kumar Saxena
###################################


# This line specifies the base image , which is Node.js with the LTS (Long-Term Support) version running on Alpine Linux
FROM node:lts-alpine 

WORKDIR /app


 # Copies the package.json and package-lock.json files from the current directory on the host machine to the /app 
 # directory in the contaner. The * in package*.json allows us to copy both files at once.

COPY package*.json ./

# Clear npm cache
RUN npm cache clean --force

# install the application dependencies in the container. (As per listed in the package.json)
RUN npm install -g @vue/cli
RUN npm install

# Copies the application code from the host machine to the /app
COPY . .

# Set permission
RUN chmod -R 755 /app

# it is required when we needed production build. it will typically create a dist folder.



# production stage
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose the port for the application
EXPOSE 8080



CMD ["npm", "run", "serve"]