# Resume Builder

A professional, modern resume builder application that helps users create ATS-friendly resumes with ease. Built with React and Redux, featuring multiple professional templates and a user-friendly interface.

## 🚀 Features

- **Professional Templates**: Multiple hand-crafted resume templates optimized for different industries
- **ATS-Friendly**: Resumes are optimized for Applicant Tracking Systems used by employers
- **Real-time Preview**: See changes instantly as you edit your resume
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Data Persistence**: Save your resume data securely in the cloud
- **Export Options**: Download your resume in multiple formats
- **User Authentication**: Secure login and profile management
- **Drag & Drop Interface**: Intuitive editing experience

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux Toolkit
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **HTTP Client**: Axios
- **State Management**: Redux with Redux Toolkit
- **Icons**: Lucide React (if used)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vishrut99/Resume_Maker.git
   cd Resume_Maker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```env
   REACT_APP_BASE_URL=your_backend_api_url
   REACT_APP_API_KEY=your_api_key_if_needed
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
Resume_Maker/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   └── ...
│   ├── redux/
│   │   ├── store.js
│   │   ├── educationSlice.js
│   │   ├── profileSlice.js
│   │   ├── projectSlice.js
│   │   ├── experienceSlice.js
│   │   └── extraDetailsSlice.js
│   ├── assets/
│   │   ├── img1.jpg
│   │   ├── img2.jpg
│   │   └── img3.jpg
│   ├── api/
│   │   └── index.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Usage

1. **Sign Up/Login**: Create an account or log in to access the resume builder
2. **Choose Template**: Select from our professional resume templates
3. **Add Information**: Fill in your:
   - Personal profile information
   - Educational background
   - Work experience
   - Projects
   - Skills
   - Achievements
   - Extra-curricular activities
4. **Preview**: See real-time preview of your resume
5. **Export**: Download your completed resume

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px and above)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔐 Authentication

The app includes secure user authentication with:
- User registration and login
- JWT token-based authentication
- Protected routes
- Session management

## 💾 Data Management

- **Redux Store**: Centralized state management for all resume data
- **API Integration**: Seamless backend integration for data persistence
- **Auto-save**: Automatic saving of user progress
- **Data Validation**: Input validation and error handling

## 🎨 Templates

Currently available templates:
- **Executive**: Clean and professional design
- **Modern**: Creative and elegant layout
- **Classic**: Traditional and formal structure

## 🚦 API Endpoints

The application integrates with backend APIs for:
- User authentication
- Resume data storage and retrieval
- Template management
- Export functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports

If you encounter any bugs or issues, please report them on the [Issues](https://github.com/Vishrut99/Resume_Maker/issues) page.

## 📧 Contact

- **Developer**: Vishrut
- **GitHub**: [@Vishrut99](https://github.com/Vishrut99)
- **Project Link**: [https://github.com/Vishrut99/Resume_Maker](https://github.com/Vishrut99/Resume_Maker)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped improve this project
- Inspiration from modern resume builders and design patterns
- Open source community for tools and libraries used

## 🔮 Future Enhancements

- [ ] More resume templates
- [ ] PDF export functionality
- [ ] Resume sharing capabilities
- [ ] AI-powered content suggestions
- [ ] Integration with job boards
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Resume analytics and tips

---

⭐ **Star this repository if you find it helpful!**
