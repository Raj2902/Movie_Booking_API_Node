# The base image that we want to use
FROM node:22.21.0

# The working directory
WORKDIR /app

# COPY the frequent changing files first for caching  this reduces build time of the image
COPY package*.json ./

# install all the depencies
RUN npm install

# COPY the rest of the files
COPY . .

# Expose the port
EXPOSE 3000

# End command when the container starts
CMD ["npm","start"]