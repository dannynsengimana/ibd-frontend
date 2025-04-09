# Use an official Nginx image to serve static files
FROM nginx:alpine

# Copy the frontend files to the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80
