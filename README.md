﻿# 🎬 JioStream - Open Source Streaming Platform

![JioStream Banner](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/US-en-20250317-TRIFECTA-perspective_46e2ea88-09df-4e34-8e0c-2a2e8a2cda94_large.jpg-1QadysCtqt5zBwcjLYLXQi4aOUQub6.jpeg)

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-13.0-blueviolet?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)](https://supabase.io/)
[![TMDB](https://img.shields.io/badge/TMDB-API-blue?style=for-the-badge&logo=themoviedatabase)](https://www.themoviedb.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

</div>

## 🌟 Overview

JioStream is an open-source streaming platform demo that showcases how modern streaming services work. Built with Next.js, it uses TMDB API for content data and Supabase for authentication and user management.

🔴 [Live Demo](https://jiostream.netlify.app/) | 🐛 [Report Bug](https://github.com/RavnOP/Jio-Cinema-Clone-Webapp-Using-TMDB-API-and-Supabase-Database/issues)

## ✨ Features

- 🎯 Browse Movies & TV Shows with TMDB API integration
- 🔐 User authentication with Supabase
- 📱 Responsive design for all devices
- 🎬 Third-party embedded streaming URLs
- 💾 Watchlist & Continue Watching features
- 🔍 Advanced search and filtering
- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark mode support

## 🛠️ Tech Stack

- **Frontend:** Next.js 13, React, TypeScript
- **Styling:** Tailwind CSS, Shadcn UI
- **Database:** Supabase
- **Authentication:** Supabase Auth
- **API:** TMDB API
- **Deployment:** Vercel
- **State Management:** React Context + Hooks

## 📥 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jiostream.git
cd jiostream
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

## 🌐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_TMDB_API_KEY=
```

## 📚 Project Structure

```
jiostream/
├── app/                   # Next.js 13 app directory
├── components/           # Reusable components
├── lib/                 # Utility functions and hooks
├── public/             # Static assets
├── styles/            # Global styles
└── types/            # TypeScript types
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This is an educational project and is not intended for commercial use. All movie and TV show data is sourced from TMDB API. Streaming URLs are embedded from third-party sources for demonstration purposes only.

## 👤 Author

**Abhishek Singh**
- GitHub: [@yourusername](https://github.com/RavnOP)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) for providing movie and TV show data
- [Supabase](https://supabase.io/) for authentication and database services
- [Vercel](https://netlify.com/) for hosting
- [Shadcn UI](https://ui.shadcn.com/) for UI components

---

<div align="center">
⭐️ If you found this project helpful, please give it a star!

Made with ❤️ by [Abhishek Singh](https://github.com/RavnOP)
</div>
