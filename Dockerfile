FROM node:20

WORKDIR /app

# Install optional build tools (safe to keep for native modules)
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy only package files and install dependencies
COPY package*.json ./
COPY .npmrc* ./
RUN npm install

# Set path for local binaries
ENV PATH /app/node_modules/.bin:$PATH

# Copy everything else
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
