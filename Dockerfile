FROM node:20

WORKDIR /app

# Install build dependencies (if still needed for native modules)
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Set PATH to include node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

# Copy package files and install dependencies
COPY package*.json ./
COPY .npmrc* ./
RUN npm install

# Copy the rest of the application
COPY . .

# Start the development server
CMD ["npm", "run", "dev"]