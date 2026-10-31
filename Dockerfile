#stage 1 (for just to create a build of angular app)

From node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

#stage 2 (code for creating the actual image of angular app)
FROM nginx:alpine
COPY --from=build /app/dist/angular_practice/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]