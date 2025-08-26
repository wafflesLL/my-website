# operating system 
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
RUN apk update
RUN apk upgrade
RUN apk add --no-cache \
    bash \
    neovim \
    clang \
    clang-extra-tools \
    build-base \
    unzip \
    gzip \
    curl \
    git \
    make \
    g++ \
    python3 \
    tmux 

RUN git config --global credential.helper cache
# Copy all project files
COPY . .

EXPOSE 3000

CMD ["bash"]
