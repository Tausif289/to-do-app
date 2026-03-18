# Use official Node image
FROM node:20-alpine AS build

# Set working directory
WORKDIR /to-do-app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Expose backend port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]