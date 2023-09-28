# Real-Time Chat App by
- Alay Kabir 
- IIT Dhanbad
- Mechanical Engineering

This is a real-time chat application built using React.js, Node.js, MongoDB, and Socket.io. It allows users to engage in real-time chat conversations with multiple participants.

## Features

- Real-time chat with multiple users
- User authentication and registration
- Persistent message storage using MongoDB
- User avatars
- Typing indicators
- Online/offline status

## Technologies Used

- React.js: Frontend user interface
- Node.js: Backend server
- MongoDB: Database for message storage
- Socket.io: Real-time communication
- Express.js: Web server framework
- CSS: Styling and design

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/alaykabir/Message-App
.git
   ```

2. Navigate to the project directory:

   ```shell
   cd Message-App

   ```

3. Install the server dependencies:

   ```shell
   cd server
   npm install
   ```

4. Install the client dependencies:

   ```shell
   cd ../client
   npm install
   ```

## Configuration

1. Create a `.env` file in the `server` directory with the following environment variables:

   ```
   MONGODB_URI=your_mongodb_uri
   PORT=5000
   ```

2. Update the `client/src/config.js` file with the server URL:

   ```javascript
   const config = {
     serverUrl: 'http://localhost:5000', // Update this with your server URL
   };

   export default config;
   ```

## Usage

1. Start the server:

   ```shell
   cd server
   npm start
   ```

2. Start the client:

   ```shell
   cd ../client
   npm start
   ```

3. Access the application in your web browser at `http://localhost:3000`.

## Acknowledgments

- This project was inspired by the need for real-time communication in modern web applications.
- Special thanks to the creators and maintainers of React, Node.js, MongoDB, Socket.io, and other open-source technologies used in this project.

## Contributors

- Alay Kabir (@alaykabir)
