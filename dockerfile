# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Set environment variable default (optional)
ENV NODE_ENV=development

# Expose the app port
EXPOSE 5000

# Start the app
CMD ["npm", "run", "dev"]
