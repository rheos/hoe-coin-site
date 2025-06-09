FROM node:20

WORKDIR /app

# Install build dependencies (if still needed for native modules)
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies
COPY package*.json ./
COPY .npmrc* ./
RUN npm install

# Copy the rest of the application
COPY . .

# Start the development server
CMD ["npm", "run", "dev"]