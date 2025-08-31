# 3D Print Studio - Castylabz

A modern React-based website for professional 3D printing services, featuring custom keychains, lamps, decor, gifts, and custom orders.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, React Router, and modern JavaScript
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Product Showcase**: Display your 3D printed products with detailed information
- **Category Filtering**: Easy navigation through different product categories
- **WhatsApp Integration**: Direct contact through WhatsApp for orders and inquiries
- **Professional UI/UX**: Clean, modern design with smooth transitions
- **GitHub Pages Ready**: Optimized for deployment on GitHub Pages

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: CSS3 with CSS Variables and Flexbox/Grid
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Comic Relief, Delius Swash Caps, Pacifico, Poppins)
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   ├── ProductCard.js  # Product display component
│   └── Footer.js       # Footer component
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── Products.js     # Products listing page
│   ├── About.js        # About page
│   └── Contact.js      # Contact page
├── data/               # Data files
│   └── products.js     # Product information
├── App.js              # Main app component
└── index.js            # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📸 Adding Your Own Products

### 1. Update Product Images

Place your product images in the `public/images/` folder and update the image paths in `src/data/products.js`:

```javascript
{
  id: 1,
  name: "Your Product Name",
  description: "Your product description",
  category: "your-category",
  weight: "Your weight info",
  time: "Your print time",
  image: "/images/your-image.jpg" // Update this path
}
```

### 2. Customize Product Information

Edit `src/data/products.js` to:
- Add your own products
- Update product descriptions
- Modify categories
- Change weights and print times

### 3. Update Contact Information

Modify the contact details in:
- `src/pages/Contact.js`
- `src/components/Footer.js`
- WhatsApp links throughout the app

## 🌐 Deployment to GitHub Pages

### 1. Update Package.json

Edit the `homepage` field in `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

### 2. Deploy

```bash
npm run deploy
```

### 3. GitHub Repository Settings

1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Set source to "Deploy from a branch"
4. Select `gh-pages` branch
5. Save

## 🎨 Customization

### Colors and Theme

Update CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #1E88E5;    /* Your primary color */
  --secondary-color: #FF6F00;  /* Your secondary color */
  --charcoal: #212121;         /* Your text color */
  /* ... other variables */
}
```

### Fonts

Update Google Fonts import in `public/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

### Company Information

Update company details in:
- `src/components/Navbar.js` (logo/brand name)
- `src/components/Footer.js` (company info)
- All page components

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📞 Support

For support or questions:
- WhatsApp: +91 505 629 86
- Instagram: @casty_labz
- Email: info@castylabz.com

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for placeholder images
- React community for amazing tools and libraries

---

**Made with ❤️ by Castylabz Team**
