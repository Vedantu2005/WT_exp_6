
FROM node:18


WORKDIR /app


COPY package*.json ./
RUN npm install


COPY . .

# App will run on port 5000 (adjust if needed)
EXPOSE 5000

# Start the app
CMD ["node", "server.js"]
