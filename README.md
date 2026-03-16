# Taskify - Full Stack Task Management Application

A beautiful and modern task management application built with React (frontend) and Node.js/Express (backend) with MongoDB.

## 🚀 Features

- ✅ **Create Tasks** - Add new tasks with title, description, priority, status, and due date
- ✅ **View All Tasks** - Display all tasks in attractive cards
- ✅ **Edit Tasks** - Inline editing of task details directly on the card
- ✅ **Delete Tasks** - Remove tasks with confirmation
- ✅ **Toggle Status** - Mark tasks as pending or completed
- ✅ **Filter Tasks** - Filter by status (pending/completed) and priority (low/medium/high)
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile devices
- ✅ **Modern UI** - Beautiful gradients, animations, and hover effects

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
taskify/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTask.jsx
│   │   │   └── TaskCard.jsx
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js backend
│   ├── controllers/
│   │   └── taskControllers.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   - Copy `.env.example` to `.env`
   - Update the following variables:
     ```env
     PORT=3000
     MONGO_URI=mongodb://localhost:27017/taskify
     JWT_SECRET=your_jwt_secret_here
     ```

4. **Start the server:**
   ```bash
   npm start
   ```
   Server will run on `http://localhost:3000`

### Frontend Setup

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## 🎯 Usage

1. **Access the application** at `http://localhost:5173`
2. **Add new tasks** using the form at the top
3. **View tasks** in the grid layout below
4. **Edit tasks** by clicking the "Edit" button on any card
5. **Toggle status** using the "Mark Complete/Pending" button
6. **Delete tasks** with the "Delete" button
7. **Filter tasks** using the dropdown menus

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks (with optional filters) |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Query Parameters for GET /api/tasks
- `status`: Filter by status (pending/completed)
- `priority`: Filter by priority (low/medium/high)

## 🗃️ Database Schema

### Task Model
```javascript
{
  title: String (required),
  description: String,
  status: String (enum: ["pending", "completed"], default: "pending"),
  priority: String (enum: ["low", "medium", "high"], default: "medium"),
  dueDate: Date,
  createdAt: Date (default: Date.now)
}
```

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Ensure MongoDB connection string is configured
3. Deploy to platforms like Heroku, Railway, or Vercel

### Frontend Deployment
1. Build the production version:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to platforms like Netlify, Vercel, or GitHub Pages
3. Update API base URL in `src/services/api.js` for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by popular task management applications
- UI design using Tailwind CSS

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Happy Task Managing! 🎉**