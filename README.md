# Vivek G's Personal Portfolio

A modern, interactive personal dashboard and portfolio website built with React and Vite. This project showcases my professional experience, GitHub activity, technical skills, and includes a personal blog.

## Features

- **Profile Overview**: Personal information, bio, and social links
- **GitHub Integration**: Real-time GitHub statistics, repositories, and activity
- **Programming Languages**: Visual representation of coding languages used
- **System Status**: Live system information and uptime
- **Recent Activity**: Latest GitHub commits and contributions
- **Blog**: Personal blog posts with markdown support
- **Experience & Skills**: Professional background and technical competencies
- **Responsive Design**: Optimized for desktop and mobile devices

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **Styling**: CSS with Inter font family
- **Blog Processing**: React Markdown, Gray Matter
- **API Integration**: GitHub GraphQL API
- **Development**: ESLint for code quality

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vivekgwork-cmd/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your GitHub token:
   ```
   VITE_GITHUB_TOKEN=your_github_personal_access_token
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- Navigate through different sections using the dashboard layout
- Click on blog cards to read full posts
- View GitHub repositories and statistics (requires GitHub token for full functionality)
- Responsive design works on all device sizes

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── BentoGrid.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   └── shared/
│       ├── ActivityCard.jsx
│       ├── BlogCard.jsx
│       ├── BlogDetail.jsx
│       ├── ExperienceCard.jsx
│       ├── GitHubCard.jsx
│       ├── LanguagesCard.jsx
│       ├── ProfileCard.jsx
│       ├── SkillsCard.jsx
│       └── SystemStatusCard.jsx
├── data/
│   └── resumeData.js
├── pages/
│   ├── BlogPage.jsx
│   ├── Contact.jsx
│   ├── Portfolio.jsx
│   └── Projects.jsx
├── utils/
│   └── blogLoader.js
└── assets/
    └── blog-content/
        ├── client-vs-server.md
        ├── daily-test.md
        ├── how-the-internet-works.md
        ├── ip-address.md
        └── test.md
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

This is a personal portfolio project. While contributions are not actively sought, feel free to fork and customize for your own use.

## License

This project is open source and available under the [MIT License](LICENSE).</content>
<parameter name="filePath">/workspaces/personal-portfolio/README.md