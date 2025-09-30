FROM nginx:alpine 
# Remove default Nginx static files
 RUN rm -rf /usr/share/nginx/html/*

# Copy our web app files into the container
 COPY index.html /usr/share/nginx/html/ 
# Expose port 80 to access the app 
EXPOSE 80