FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Download and set up Cloud SQL Proxy
RUN wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O /usr/local/bin/cloud_sql_proxy && \
	chmod +x /usr/local/bin/cloud_sql_proxy

# Entrypoint script to start Cloud SQL Proxy and your application
ENTRYPOINT ["sh", "-c", "cloud_sql_proxy -instances=kurashi-frontpage-419616:us-central1:kurashi-production-db & npm run db:deploy && npm run start"]
