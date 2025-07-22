# Resume Maker — ATS-Friendly Resume Builder

[![React](https://img.shields.io/badge/Built%20With-React-blue?logo=react)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/State-Redux%20Toolkit-purple?logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind](https://img.shields.io/badge/Styling-Tailwind%20CSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![GitHub Issues](https://img.shields.io/github/issues/Vishrut99/Resume_Maker)](https://github.com/Vishrut99/Resume_Maker/issues)

> A sleek, professional and intuitive resume builder optimized for **Applicant Tracking Systems** and modern design standards.

---

## ✨ Features

- 🎨 **Professional Templates** — Elegant layouts for all professions
- 🧠 **ATS-Optimized** — Pass the resume scanners with ease
- 🔁 **Real-Time Preview** — Instant updates as you type
- 💾 **Auto-Save & Cloud Storage** — Resume saved automatically
- 📲 **Responsive Design** — Works across all devices
- 📥 **Export Options** — Multiple format support (coming soon)
- 🔒 **Secure Auth** — JWT-based login system
- 🖱️ **Drag & Drop Interface** — Effortless editing

---

## 🖥️ Tech Stack

| Area         | Tech Used                             |
|--------------|----------------------------------------|
| Frontend     | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) |
| State        | ![Redux Toolkit](https://img.shields.io/badge/-Redux%20Toolkit-764abc?logo=redux&logoColor=white) |
| Styling      | ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38BDF8?logo=tailwindcss&logoColor=black) |
| Animations   | ![Framer Motion](https://img.shields.io/badge/-Framer%20Motion-e52e71?logo=framer&logoColor=white) |
| Icons        | ![Lucide React](https://img.shields.io/badge/-Lucide%20React-000?logo=lucide&logoColor=white) |
| Routing      | ![React Router](https://img.shields.io/badge/-React%20Router-ca4245?logo=reactrouter&logoColor=white) |
| HTTP Client  | ![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white) |

---

## 📸 Screenshots

<div align="center">
  <img width="1883" height="864" alt="image" src="https://github.com/user-attachments/assets/c29084f9-c1eb-4a67-a9c7-9d55af49918d" />
  <img width="1900" height="820" alt="image" src="https://github.com/user-attachments/assets/c61e2135-eefc-48cb-ac67-b6ab890d6ec8" />


</div>

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/Vishrut99/Resume_Maker.git
cd Resume_Maker

# 2. Install dependencies
npm install

# 3. Configure environment variables
touch .env
# Add the following to .env
REACT_APP_BASE_URL=your_backend_url
REACT_APP_API_KEY=your_api_key_if_any

# 4. Start development server
npm start


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


## 🐛 Bug Reports

If you encounter any bugs or issues, please report them on the [Issues](https://github.com/Vishrut99/Resume_Maker/issues) page.

## 📧 Contact

- **Developer**: Vishrut & Raj
- **GitHub**: [@Vishrut99](https://github.com/Vishrut99) & [@RajBorad1729](https://github.com/RajBorad1729)
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
