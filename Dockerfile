FROM node:22.14.0-alpine AS node-base

# deps stage → Install dependencies
FROM node-base AS deps-stage

WORKDIR /app

# set registry && proxy
# RUN npm config set registry http://10.167.84.199:4873/
# RUN yarn config set registry http://10.167.84.199:4873/
# RUN npm config set registry https://registry.npmmirror.com/
# RUN npm config set proxy http://10.167.23.54:8080/
# RUN yarn config set registry https://registry.npmmirror.com/
# RUN yarn config set proxy http://10.167.23.54:8080/

# Install dependencies based on the preferred package manager
COPY ["package.json","yarn.lock*","package-lock.json*","pnpm-lock.yaml*","./"]

RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

# build stage → build the source
FROM node-base AS build-stage

WORKDIR /app

# copy node_modules from deps-stage to build-stage(current)
COPY --from=deps-stage /app/node_modules ./node_modules
# copy all files(except content in .dockerignore)
# from current folder(where Dockerfile is set[docker build context])
# to build-stage(current)
COPY . .

RUN yarn run build
# If using npm comment out above and use below instead
# RUN npm run build

# production stage → copy built files then set to nginx
FROM nginx:latest

# Copy built files from the build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html/zero-test-factory

# Copy the custom Nginx config file from the host
COPY /nginx/conf/zero-test-factory.conf /etc/nginx/conf.d/default.conf

# Expose Nginx port
EXPOSE 80

# Expose Nginx config directory as a volume
VOLUME ["/etc/nginx/conf.d"]

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]