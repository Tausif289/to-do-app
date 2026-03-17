# Step 1: Build React App
FROM node:20 AS build

WORKDIR /to-do-app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# ✅ Correct path
COPY --from=build /to-do-app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]