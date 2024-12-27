# Use Node.js LTS version
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the entire application
COPY . .

# Install PostgreSQL client (psql)
RUN apk update && apk add postgresql-client

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]