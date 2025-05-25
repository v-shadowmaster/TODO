# Realtime Todo Application - Client

A modern, responsive React application for managing todos in real-time, built with Vite, React, and TailwindCSS.

## 📋 Features

- User Authentication (Login/Register)
- Real-time Todo Management
- Responsive Design
- Search Functionality
- Modern UI with TailwindCSS

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Server application running (see server README)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd realtime-todo/client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── auth/            # Authentication components
│   ├── todo/            # Todo-related components
│   └── ...
├── services/            # API service layers
├── utils/              # Utility functions
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## 📚 Component Documentation

### Authentication Components

#### Login.jsx

- Handles user login
- Form validation
- JWT token management

#### Register.jsx

- New user registration
- Form validation
- Automatic login after registration

### Todo Components

#### TodoList.jsx

- Displays list of todos
- Real-time updates
- Filtering capabilities

#### TodoForm.jsx

- Create new todos
- Form validation
- Real-time submission

#### TodoItem.jsx

- Individual todo display
- Edit/Delete functionality
- Status toggle

### Services

#### authService.js

- Authentication API calls
- Token management
- User session handling

#### todoService.js

- Todo CRUD operations
- Real-time updates
- Error handling

## 🛠️ Technologies Used

- React 18
- Vite
- TailwindCSS
- ESLint
- React Router DOM
- Axios

## 🔧 Configuration

### Vite Configuration

The project uses Vite for fast development and optimized builds. Configuration can be found in `vite.config.js`.

### TailwindCSS

Styling is managed through TailwindCSS. Configuration is in `tailwind.config.js`.

### ESLint

Code quality is maintained through ESLint. Configuration is in `eslint.config.js`.

## 📦 Build

To build for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

Run tests with:

```bash
npm test
```

## 🔐 Environment Variables

Required environment variables:

- `VITE_API_URL`: Backend API URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.
