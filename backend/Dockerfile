###################
# BUILD FOR DEVELOPMENT ENVIRONMENT
# Author: Ashish Kumar Saxena
###################

# Specifies the base image for the Docker container. We use the official Node.js 18.x image as the base in this case

FROM node:18

# Sets the working directory inside the container to /usr/src/app. This is where the application code will be copied and where 
# the  container will run from.

WORKDIR /app

COPY --chmod=777 src /app

 # Copies the package.json and package-lock.json files from the current directory on the host machine to the /usr/src/app 
 # directory in the contaner. The * in package*.json allows us to copy both files at once.

COPY package*.json ./

# install the application dependencies in the container. (As per listed in the package.json)
RUN npm install


# Copies the application code from the host machine to the /usr/src/app

COPY . .

# it is required when we needed production build. it will typically create a dist folder.
# RUN npm run build

# Expose the port for the application
EXPOSE 3000

# Local development , we are running the npm run start:dev command which will start the server in development mode
CMD ["npm", "run","start:dev"]