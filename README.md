# Portfolio - MERN Stack

A modern portfolio website built with the MERN stack (MongoDB, Express, React, Node.js). The frontend is built with React and Vite, while the backend uses Express.js and MongoDB for data management.

## 🏗️ Architecture

This project follows a MERN-stack architecture:

- **Frontend (Client)**: React + Vite application located in `/client`
- **Backend (Server)**: Node.js + Express API located in `/server`
- **Database**: MongoDB for storing projects, skills, and contact messages

## 📁 Project Structure

```
my_profile/
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── assets/         # Images and static assets
│   │   └── utils/          # API utilities
│   ├── public/             # Public assets
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js + Express backend
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── index.js           # Server entry point
│   └── package.json
└── package.json           # Root package.json for managing both apps
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd my_profile
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```
   
   This will install dependencies for:
   - Root project (concurrently for running both apps)
   - Client (React frontend)
   - Server (Express backend)

### Environment Setup

1. **Backend Environment Variables**
   
   Create a `.env` file in the `server/` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/portfolio
   ```
   
   For MongoDB Atlas, use:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

2. **Frontend Environment Variables**
   
   Create a `.env` file in the `client/` directory (optional):
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   ```
   
   If not set, it defaults to `http://localhost:5000/api`

### Running the Application

#### Development Mode (Both Client and Server)

Run both frontend and backend concurrently:
```bash
npm run dev
```

This will start:
- Frontend dev server on `http://localhost:5173` (Vite default)
- Backend API server on `http://localhost:5000`

#### Run Separately

**Frontend only:**
```bash
npm run dev:client
```

**Backend only:**
```bash
npm run dev:server
```

**Backend production:**
```bash
npm run start:server
```

## 📡 API Endpoints

The backend provides the following REST API endpoints:

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create a new project (admin)

### Skills
- `GET /api/skills` - Get all skills organized by categories

### Contact
- `POST /api/contact` - Submit a contact form message
- `GET /api/contact` - Get all contact messages (admin)

### Health Check
- `GET /api/health` - Server health status

## 🗄️ Database

The application uses MongoDB to store:
- **Projects**: Portfolio projects with details, tech stack, and links
- **Skills**: Technical skills organized by categories
- **Contact Messages**: Form submissions from the contact page

On first run, the API returns mock data if the database is empty. You can populate the database through the API endpoints or MongoDB directly.

## 🎨 Frontend Features

- **React Components**: Modular, reusable components
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations
- **Responsive Design**: Mobile-first approach

## 🔧 Technologies Used

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB


## 📝 Notes

- **UI Consistency**: The UI remains simple.
- **Data Flow**: Frontend components fetch data from the backend API instead of using hardcoded data.
- **Image Handling**: Images are still served from the frontend assets, but paths are mapped from API responses.
- **Error Handling**: The frontend gracefully handles API errors and falls back to empty states.

## 🚢 Production Build

Build the frontend for production:
```bash
npm run build
```

The built files will be in `client/dist/` directory.

## 📄 License

This project is private and for portfolio purposes.
