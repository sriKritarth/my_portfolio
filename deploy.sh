#!/bin/bash

# Build the application
echo "Building the application..."
docker-compose build

# Run database migrations
echo "Running database migrations..."
docker-compose run --rm app npm run db:push

# Start the services
echo "Starting services..."
docker-compose up -d

echo "Deployment complete! The application is running at http://localhost:5000" 