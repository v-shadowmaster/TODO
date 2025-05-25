# 📝 Todo Application

A full-stack todo application built with React, Node.js, Express, and MongoDB, featuring user authentication and todo management.

## 🌟 Features

- User Authentication (Login/Register)
- Todo CRUD Operations
- JWT-based Authentication
- Modern UI with TailwindCSS
- MongoDB Integration

## 🏗️ Architecture

The application follows a client-server architecture:

- **Frontend**: React application built with Vite and TailwindCSS
- **Backend**: Node.js/Express RESTful API
- **Database**: MongoDB

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd realtime-todo
   ```

2. Install dependencies for both client and server:

   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Set up environment variables:

   - Create `.env` in server directory
   - Create `.env` in client directory

4. Start the application:

   ```bash
   # Start server (from server directory)
   npm run dev

   # Start client (from client directory)
   npm run dev
   ```

## 📚 Documentation

- [Client Documentation](./client/README.md)
- [Server Documentation](./server/README.md)

## 🛠️ Technology Stack

### Frontend

- React 18
- Vite
- TailwindCSS
- React Router DOM
- Axios

### Backend

- Node.js
- Express
- MongoDB
- JWT Authentication
- Mongoose

## 🔐 Security

- JWT Authentication
- Password Hashing
- Input Validation
- XSS Protection
- CORS Configuration
- Rate Limiting

## 🧪 Testing

Both client and server include comprehensive test suites:

```bash
# Run client tests
cd client
npm test

# Run server tests
cd server
npm test
```

## 📈 Performance

- Optimized Build Configuration
- Database Query Optimization
- Caching Strategies
- Lazy Loading
- Code Splitting

## 🚀 Deployment

### Production Build

```bash
# Build client
cd client
npm run build

# Build server
cd ../server
npm run build
```

### Docker Support

The application includes Docker configuration for containerized deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

- [Your Name] - Initial work

## 🙏 Acknowledgments

- React Team
- Node.js Community
- MongoDB Team
- All contributors
