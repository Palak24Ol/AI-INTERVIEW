# MockMate - AI Mock Interview Intelligence

<div align="center">
  <img src="/public/mockmate-logo.svg" alt="MockMate Logo" width="80" height="68">
  <h3>Master your interviews with AI-powered mock practice sessions and real-time feedback</h3>
</div>

## 🚀 Features

### 🤖 AI-Powered Interviews
- **Real-time Voice Conversations**: Conduct mock interviews with advanced AI using natural voice interactions
- **Dynamic Question Generation**: AI generates relevant questions based on role, experience level, and tech stack
- **Intelligent Follow-ups**: AI asks contextual follow-up questions based on your responses

### 📊 Comprehensive Feedback System
- **Detailed Performance Analysis**: Get scored feedback across 5 key categories:
  - Communication Skills
  - Technical Knowledge
  - Problem Solving
  - Cultural Fit
  - Confidence and Clarity
- **Strengths & Improvement Areas**: Receive specific insights on what you did well and areas to focus on
- **Overall Score**: Get a comprehensive score out of 100 with detailed breakdown

### 🎯 Customizable Interview Experience
- **Role-Specific Questions**: Tailor interviews for specific job roles
- **Tech Stack Integration**: Questions adapted to your technology preferences
- **Experience Level Matching**: Adjust difficulty based on Junior, Mid, or Senior levels
- **Interview Types**: Choose between Technical, Behavioral, or Mixed interview formats

### 📱 Modern User Experience
- **Cyber-themed UI**: Futuristic design with smooth animations and micro-interactions
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Real-time Transcription**: See your conversation transcribed in real-time
- **Interview History**: Track your progress and review past performances

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

### Backend & AI
- **Firebase Admin SDK** - Server-side Firebase operations
- **Google AI (Gemini)** - Advanced AI model for feedback generation
- **VAPI** - Voice AI integration for real-time conversations
- **Vercel AI SDK** - AI utilities and integrations

### Database & Authentication
- **Firebase Firestore** - NoSQL database for storing interviews and feedback
- **Firebase Authentication** - Secure user authentication
- **Session Management** - Server-side session handling with cookies

### Voice & Audio
- **VAPI Web SDK** - Real-time voice AI conversations
- **Deepgram** - Speech-to-text transcription
- **ElevenLabs** - High-quality text-to-speech

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project
- VAPI account
- Google AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mockmate.git
   cd mockmate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   FIREBASE_PROJECT_ID=your-project-id
   FIREBASE_CLIENT_EMAIL=your-client-email
   FIREBASE_PRIVATE_KEY=your-private-key

   # VAPI Configuration
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your-vapi-web-token
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=your-workflow-id

   # Google AI
   GOOGLE_GENERATIVE_AI_API_KEY=your-google-ai-key
   ```

4. **Configure Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication and Firestore
   - Download service account key and add credentials to environment variables
   - Update `firebase/client.ts` with your Firebase config

5. **Set up VAPI**
   - Create account at [VAPI](https://vapi.ai)
   - Create a voice assistant workflow
   - Add your tokens to environment variables

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
mockmate/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (root)/                   # Protected routes
│   │   ├── interview/
│   │   │   ├── [id]/
│   │   │   │   ├── feedback/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── profile/
│   │   └── page.tsx
│   ├── api/                      # API routes
│   │   └── vapi/
│   ├── globals.css               # Global styles
│   └── layout.tsx
├── components/                   # Reusable components
│   ├── ui/                       # UI components
│   ├── Agent.tsx                 # Voice AI component
│   ├── AuthForm.tsx              # Authentication forms
│   ├── InterviewCard.tsx         # Interview display card
│   └── ...
├── lib/                          # Utilities and actions
│   ├── actions/                  # Server actions
│   │   ├── auth.action.ts
│   │   └── general.action.ts
│   ├── utils.ts
│   └── vapi.sdk.ts
├── firebase/                     # Firebase configuration
│   ├── admin.ts
│   └── client.ts
├── constants/                    # App constants
├── types/                        # TypeScript definitions
└── public/                       # Static assets
```

## 🔧 Configuration

### Firebase Setup
1. Create collections in Firestore:
   - `users` - User profiles
   - `interviews` - Interview sessions
   - `feedback` - AI-generated feedback

2. Set up Firestore security rules:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
       match /interviews/{interviewId} {
         allow read, write: if request.auth != null;
       }
       match /feedback/{feedbackId} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

### VAPI Configuration
Configure your VAPI assistant with:
- **Transcriber**: Deepgram Nova-2 model
- **Voice**: ElevenLabs Sarah voice
- **Model**: OpenAI GPT-4
- **System Prompt**: Professional interviewer persona

## 🎨 Customization

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind configuration in `tailwind.config.js`
- Customize color scheme in CSS custom properties

### AI Behavior
- Adjust interviewer personality in `constants/index.ts`
- Modify feedback criteria in `lib/actions/general.action.ts`
- Update question generation prompts in API routes

### Tech Stack Icons
- Add new technology mappings in `constants/index.ts`
- Icons are fetched from [Devicons](https://devicons.github.io/devicon/)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
The app can be deployed on any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📊 Usage

### For Candidates
1. **Sign Up**: Create an account with email/password
2. **Start Interview**: Choose role, experience level, and tech stack
3. **Practice**: Engage in real-time voice conversations with AI
4. **Get Feedback**: Receive detailed performance analysis
5. **Track Progress**: Review past interviews and improvements

### For Recruiters/Companies
- Use the platform to standardize interview processes
- Generate consistent evaluation criteria
- Track candidate performance over time
- Customize questions for specific roles

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use conventional commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check our [Wiki](https://github.com/yourusername/mockmate/wiki)
- **Issues**: Report bugs on [GitHub Issues](https://github.com/yourusername/mockmate/issues)
- **Discussions**: Join our [GitHub Discussions](https://github.com/yourusername/mockmate/discussions)

## 🙏 Acknowledgments

- [VAPI](https://vapi.ai) for voice AI technology
- [Firebase](https://firebase.google.com) for backend services
- [Vercel](https://vercel.com) for hosting and deployment
- [Devicons](https://devicons.github.io/devicon/) for technology icons

## 🔮 Roadmap

- [ ] **Multi-language Support** - Support for interviews in different languages
- [ ] **Video Interviews** - Add video call capabilities
- [ ] **Team Interviews** - Multi-interviewer scenarios
- [ ] **Industry-Specific Templates** - Pre-built interview templates for different industries
- [ ] **Analytics Dashboard** - Advanced analytics for performance tracking
- [ ] **Mobile App** - Native mobile applications
- [ ] **Integration APIs** - APIs for third-party integrations

---

<div align="center">
  <p>Built with ❤️ by the MockMate team</p>
  <p>
    <a href="https://github.com/yourusername/mockmate">⭐ Star us on GitHub</a> •
    <a href="https://twitter.com/mockmate">🐦 Follow on Twitter</a> •
    <a href="https://mockmate.ai">🌐 Visit Website</a>
  </p>
</div>