# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the entire application
COPY . .

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 3000

# Build the app
RUN npm run build

# Start the application
CMD ["npm", "run", "start:dev"]