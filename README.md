# 📄 ResumeIta — AI-Powered Resume Builder

**ResumeIta** is a full-stack AI-powered resume builder that helps users create, edit, preview, export, and analyze resumes for ATS compatibility.

## ✨ Features

* 🔐 User authentication & protected APIs
* 📝 Dynamic resume editing
* 👀 Real-time resume preview
* 📄 PDF export
* 🤖 AI-powered ATS analysis
* 📊 ATS scoring
* 💡 Resume improvement feedback

## 🛠️ Tech Stack

**Frontend:** React.js
**Backend:** Node.js, Express.js, REST APIs
**Database:** MongoDB
**AI:** Google Gemini API
**Authentication:** JWT
**Tools:** Git, GitHub, Postman

## 🏗️ How It Works

```text id="f4a7q3"
User
  ↓
Create / Edit Resume
  ↓
React Frontend
  ↓
Express REST APIs
  ↓
MongoDB
  ↓
Resume Data
  ↓
ATS Analyzer
  ├── Rule-Based Checks
  └── Google Gemini Analysis
          ↓
    ATS Score & Feedback
```

## 👩‍💻 My Contribution

I contributed to the development of ResumeIta, including:

* Built dynamic resume editing and real-time preview
* Developed backend APIs using Node.js and Express.js
* Implemented authentication and protected APIs
* Integrated Google Gemini API for AI-powered ATS analysis
* Worked on PDF export functionality

## 📸 Screenshots

<img width="1902" height="966" alt="image" src="https://github.com/user-attachments/assets/9afae9f6-ccd0-4d35-a3dd-409fb2c429b8" />


## ⚙️ Setup

```bash id="3r7h6w"
git clone <YOUR_REPOSITORY_URL>
cd ResumeIta
npm install
npm run dev
```

Create a `.env` file with the required environment variables:

```env id="k2h8w1"
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

> Never commit your `.env` file or API keys.

## 🔗 Links

**Live Demo:** <https://resumeita-two.vercel.app/>
**GitHub:** <https://github.com/harshita-079/ResumeIta>
