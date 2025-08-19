# ----------------------------
# Stage 1: Build environment
# ----------------------------
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
RUN apk add --no-cache \
    bash \
    curl \
    git \
    make \
    g++ \
    python3 \
    tmux \
    vim 

# Copy all project files
COPY . .

EXPOSE 3000

CMD ["bash"]
