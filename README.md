# Wix Automations Hackathon

A modern, responsive website for the Wix Automations Hackathon featuring project showcases, team registration, and comprehensive hackathon information.

## Features

- **🚀 Project Showcase**: Display hackathon projects with filtering and search capabilities
- **📝 Team Registration**: Comprehensive registration forms for each project
- **📋 Guidelines & Rules**: Detailed hackathon rules and judging criteria
- **🎓 Preparation Resources**: Training sessions, tutorials, and development resources
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean design with Wix brand colors and smooth animations

## Tech Stack

- **Frontend**: React 18 with modern hooks
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Data**: Google Sheets integration (configurable)

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wix-automations-hackathon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:3000` to see the application

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Projects.jsx    # Projects showcase
│   ├── Registration.jsx # Team registration
│   ├── Guidelines.jsx  # Rules and guidelines
│   └── Preparation.jsx # Resources and training
├── utils/              # Utility functions
│   └── sheetsApi.js    # Google Sheets integration
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Configuration

### Google Sheets Integration

To connect to your Google Sheets data:

1. **Get a Google Sheets API key**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable the Google Sheets API
   - Create credentials (API key)

2. **Update the configuration**
   ```javascript
   // src/utils/sheetsApi.js
   const SHEET_ID = 'your-google-sheet-id'
   const API_KEY = 'your-api-key'
   ```

3. **Make your sheet public**
   - Open your Google Sheet
   - Click Share → Anyone with the link can view
   - Copy the sheet ID from the URL

### Customization

#### Colors and Branding
Update the Tailwind configuration in `tailwind.config.js`:

```javascript
colors: {
  wix: {
    blue: '#0070E0',
    purple: '#6B46C1', 
    orange: '#FF6B35'
  }
}
```

#### Content Updates
- **Project data**: Modify `src/utils/sheetsApi.js` for mock data or Google Sheets integration
- **Guidelines**: Update content in `src/pages/Guidelines.jsx`
- **Resources**: Modify training sessions and resources in `src/pages/Preparation.jsx`

## Features Breakdown

### 🏠 Home Page
- Hero section with event information
- Key statistics and timeline
- Feature highlights
- Call-to-action buttons

### 📊 Projects Page
- Dynamic project loading from Google Sheets
- Search and filter functionality
- Project categories and difficulty levels
- Detailed project information with expandable sections
- Direct registration links

### 📝 Registration Page
- Multi-step team registration form
- Dynamic team member management
- Project-specific form fields
- Form validation and submission handling
- Success/error states

### 📋 Guidelines Page
- Complete hackathon rules and requirements
- Judging criteria with detailed breakdown
- Prize information and special awards
- Important dates and deadlines
- Code of conduct

### 🎓 Preparation Page
- Pre-hackathon training sessions
- Essential development resources
- Interactive preparation checklist
- Community and support information
- Links to documentation and tutorials

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run start` - Alias for dev command

### Code Style

The project follows modern React best practices:
- Functional components with hooks
- Proper component composition
- Responsive design patterns
- Accessible UI components

### Adding New Features

1. **Create new components** in `src/components/`
2. **Add new pages** in `src/pages/`
3. **Update routing** in `src/App.jsx`
4. **Add navigation links** in `src/components/Navbar.jsx`

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Enable continuous deployment

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## Google Sheets Data Format

Expected format for project data in Google Sheets:

| Column | Description | Example |
|--------|-------------|---------|
| id | Unique project ID | 1 |
| title | Project name | "Smart Content Generator" |
| description | Project description | "Build an AI-powered tool..." |
| category | Project category | "AI & Content" |
| difficulty | Difficulty level | "Medium" |
| techStack | Technologies (comma-separated) | "JavaScript,OpenAI API,Wix Velo" |
| estimatedTime | Time estimate | "24-36 hours" |
| maxTeamSize | Maximum team size | 4 |
| prizes | Prize information | "$15,000 First Prize,$8,000 Second Prize" |
| mentors | Mentor names | "Sarah Chen - AI Engineer,David Rodriguez" |
| requirements | Requirements list | "Integration with Wix Editor,Support for multiple content types" |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support:
- 📧 Email: hackathon@wix.com  
- 💬 Discord: [Join our community](https://discord.gg/wix-hackathon)
- 📚 Documentation: [Wix Developers](https://dev.wix.com)

---

Built with ❤️ for the Wix developer community 