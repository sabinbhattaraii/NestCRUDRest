# Use Node.js LTS version
FROM node:16-alpine

# Install PostgreSQL client (psql)
RUN apk update && apk add postgresql-client

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Build the app
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
#CMD ["npm", "run", "start:prod"]
CMD ["npm", "run", "start:dev"]