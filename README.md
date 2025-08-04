# Restaurant QR - Digital Menu & Ordering System

A modern React-based restaurant ordering website with QR code table support, allowing customers to browse menus, place orders, and have them automatically assigned to their table.

## 🍽️ Features

### Customer Features
- **Digital Menu**: Browse menu items organized by categories (Starters, Mains, Drinks, Desserts)
- **Table-Specific Ordering**: QR codes automatically assign orders to specific tables
- **Shopping Cart**: Add/remove items with quantity controls
- **Checkout Process**: Complete order submission with confirmation
- **Responsive Design**: Works perfectly on mobile and desktop devices

### Restaurant Owner Features
- **QR Code Generator**: Create table-specific QR codes for easy menu access
- **Customizable Settings**: Configure base URL, number of tables, and QR code size
- **Download & Print**: Export QR codes for table placement
- **Admin Panel**: Easy management of table QR codes

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd "Resturaunt QR"
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
   Navigate to `http://localhost:3000`

## 📱 How It Works

### For Customers
1. **Scan QR Code**: Customers scan the QR code at their table
2. **Browse Menu**: View menu items organized by categories
3. **Add to Cart**: Select items and quantities
4. **Checkout**: Review order and submit
5. **Confirmation**: Receive order confirmation with table assignment

### For Restaurant Owners
1. **Access Admin Panel**: Go to `/admin/qr` in your browser
2. **Configure Settings**: Set your domain URL and number of tables
3. **Generate QR Codes**: Create QR codes for each table
4. **Download & Print**: Export QR codes and place them on tables
5. **Monitor Orders**: Orders are automatically assigned to tables

## 🛠️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.jsx      # Navigation bar with cart indicator
├── contexts/           # React Context for state management
│   ├── CartContext.jsx # Shopping cart state
│   └── TableContext.jsx # Table number state
├── data/              # Static data
│   └── menuData.js    # Menu items and categories
├── pages/             # Main application pages
│   ├── Home.jsx       # Landing page
│   ├── Menu.jsx       # Menu display with filtering
│   ├── Cart.jsx       # Shopping cart
│   ├── Checkout.jsx   # Order submission
│   ├── Confirmation.jsx # Order confirmation
│   └── QRGenerator.jsx # Admin QR code generator
├── App.jsx            # Main app component with routing
├── main.jsx          # Application entry point
└── index.css         # Global styles with Tailwind
```

## 🎨 Customization

### Menu Items
Edit `src/data/menuData.js` to customize your menu:
- Add/remove categories
- Modify item names, descriptions, and prices
- Change item images (currently using emojis)

### Styling
The project uses Tailwind CSS for styling. Customize colors and design in:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Custom CSS classes

### Restaurant Information
Update restaurant details in:
- `src/pages/Home.jsx` - Restaurant story and contact info
- `src/pages/Checkout.jsx` - Location and hours
- `src/pages/Confirmation.jsx` - Restaurant details

## 🔧 Configuration

### QR Code Settings
In the QR Generator (`/admin/qr`):
- **Base URL**: Set your domain (e.g., `https://yourrestaurant.com/menu`)
- **Number of Tables**: Configure how many tables you have
- **QR Code Size**: Adjust the size of generated QR codes

### Development vs Production
- **Development**: Uses `http://localhost:3000` as base URL
- **Production**: Update base URL to your actual domain

## 📦 Build for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy**: Upload the `dist` folder to your web hosting service

## 🌐 Deployment Options

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with default settings

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve the `index.html` file

## 🔒 Security Considerations

- The current implementation is client-side only
- For production use, consider adding:
  - Backend API for order processing
  - Database for order storage
  - Authentication for admin panel
  - HTTPS for secure QR code scanning

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the browser console for errors
2. Ensure all dependencies are installed
3. Verify your Node.js version is compatible
4. Check that the development server is running on the correct port

## 🎯 Future Enhancements

- Backend integration for real order processing
- Payment gateway integration
- Real-time order status updates
- Customer accounts and order history
- Kitchen display system
- Analytics and reporting dashboard
- Multi-language support
- Dietary restrictions and allergens
- Special requests and modifications
- Loyalty program integration

---

**Enjoy your digital restaurant ordering system! 🍽️📱** 