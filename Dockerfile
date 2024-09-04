# Use the official Node.js image as a base
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Run migrations (consider running this during container startup instead)

# Expose the port your application will run on
EXPOSE 3000

# Command to run your application
CMD [ "node", "index.js" ]
