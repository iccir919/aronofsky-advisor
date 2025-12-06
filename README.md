# Aronofsky Advisor 🎬

An AI-powered film recommendation application that helps you discover which Darren Aronofsky film to watch next.

## 🌟 About

Aronofsky Advisor is an intelligent web application that uses AI to recommend the perfect Darren Aronofsky film based on your preferences and mood. Named after the visionary director behind films like *Requiem for a Dream*, *Black Swan*, *The Wrestler*, and *The Whale*, this tool helps you navigate his acclaimed filmography to find the right movie for you.

## 🚀 Live Demo

Check out the live application: [aronofsky-advisor.vercel.app](https://aronofsky-advisor.vercel.app)

## 🛠️ Technologies Used

- **Frontend**: React + Vite
- **Styling**: CSS
- **Build Tool**: Vite with Hot Module Replacement (HMR)
- **Code Quality**: ESLint
- **Deployment**: Vercel
- **Architecture**: Modern React application with serverless API functions

## 🔌 APIs Used

- **[OpenAI Chat API](https://platform.openai.com/docs/api-reference/chat)** - Powers intelligent recommendations to match users with the perfect Aronofsky film from his filmography

## 📁 Project Structure

```
aronofsky-advisor/
├── api/              # Serverless API endpoints
├── data/             # Film data and recommendation logic
├── lib/              # Utility libraries and helper functions
├── scripts/          # Build and utility scripts
├── src/              # React source code
├── index.html        # Main HTML entry point
├── package.json      # Node.js dependencies and scripts
├── vite.config.js    # Vite configuration
└── eslint.config.js  # ESLint configuration
```

## 🎯 Features

- **AI-Powered Recommendations** - Uses ChatGPT to match you with the right Aronofsky film based on your preferences
- **Curated Filmography** - Covers Darren Aronofsky's complete body of work
- **Interactive User Interface** - Built with React for a smooth, responsive user experience
- **Fast Development** - Powered by Vite for lightning-fast hot module replacement
- **Modern Architecture** - Leverages serverless functions for scalable API integration
- **Code Quality** - ESLint integration ensures clean, maintainable code

## 💻 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/iccir919/aronofsky-advisor.git
cd aronofsky-advisor
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenAI API key:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

> **Note**: Get your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to the URL shown in your terminal (typically `http://localhost:5173`)

## 🔧 Available Scripts

- `npm run dev` - Start the development server with HMR
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🌐 Deployment

This project is configured for easy deployment on Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Add your `OPENAI_API_KEY` as an environment variable in Vercel project settings
4. Vercel will automatically deploy on every push to main

### Environment Variables

Make sure to set the following environment variable in your Vercel project:

```
OPENAI_API_KEY=your_openai_api_key_here
```

Alternatively, deploy manually using the Vercel CLI:
```bash
npm install -g vercel
vercel
```

## 🎭 About Darren Aronofsky

Darren Aronofsky is an acclaimed American filmmaker known for his surreal, psychologically intense films. His complete filmography includes:

- **Pi** (1998) - Surrealist psychological thriller
- **Requiem for a Dream** (2000) - Psychological drama about addiction
- **The Fountain** (2006) - Romantic sci-fi drama
- **The Wrestler** (2008) - Sports drama (Golden Lion winner)
- **Black Swan** (2010) - Psychological thriller
- **Noah** (2014) - Biblical epic
- **Mother!** (2017) - Psychological horror
- **The Whale** (2022) - Emotional drama

This application helps you discover which of these powerful films is the right choice for you.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

This project uses ESLint for code quality. Please ensure your code passes linting before submitting:

```bash
npm run lint
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**iccir919**

- GitHub: [@iccir919](https://github.com/iccir919)
- Project Link: [https://github.com/iccir919/aronofsky-advisor](https://github.com/iccir919/aronofsky-advisor)

## 🎬 Inspiration

This project was inspired by the challenge of choosing which Darren Aronofsky film to watch—each one is powerful and unique, making the decision difficult. The advisor uses AI to understand your preferences and guide you to the perfect Aronofsky film for your current mood and interests.

## ⭐ Show Your Support

Give a ⭐️ if you love cinema and appreciate Darren Aronofsky's visionary work!

---

*Built with React, powered by AI, inspired by cinema* 🎬✨
