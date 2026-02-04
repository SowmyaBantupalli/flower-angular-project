# Flowers By Colour - Angular Project

A modern, responsive Angular application for browsing and purchasing flowers organized by color.

## Features

- **Flower Catalog**: Browse flowers with beautiful UI components
- **Color Filtering**: Filter flowers by their color for easy browsing
- **Shopping Cart**: Add flowers to cart with quantity management
- **Checkout Process**: Complete checkout with customer information
- **Order Management**: Track orders with confirmation details
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Beautiful gradient colors and smooth animations

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── catalog/        # Main product catalog
│   │   ├── cart/           # Shopping cart
│   │   ├── checkout/       # Checkout form
│   │   ├── header/         # Navigation header
│   │   ├── footer/         # Footer
│   │   └── order-confirmation/  # Order confirmation page
│   ├── services/
│   │   ├── flower.service.ts    # Flower data management
│   │   ├── cart.service.ts      # Shopping cart logic
│   │   └── order.service.ts     # Order management
│   ├── models/
│   │   └── flower.model.ts      # Data models
│   ├── app.component.ts         # Root component
│   ├── app.config.ts            # Application configuration
│   └── app.routes.ts            # Application routes
├── styles.scss                  # Global styles
├── index.html                   # HTML template
└── main.ts                      # Application entry point
```

## Technologies

- **Angular 17**: Modern web framework
- **TypeScript**: Type-safe development
- **RxJS**: Reactive programming
- **SCSS**: Advanced styling
- **Standalone Components**: Modern Angular architecture

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to project directory:
```bash
cd flower-angular-project
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Open browser and navigate to:
```
http://localhost:4200
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Run linting

## Features in Detail

### Catalog
- Browse all available flowers
- Filter by color
- View flower details (name, price, description)
- Check inventory status
- Add to cart with quantity selection

### Shopping Cart
- View all added items
- Update quantities
- Remove items
- See real-time total with tax calculation
- Free shipping

### Checkout
- Enter customer information
- Confirm shipping address
- Review order summary
- Place order

### Order Confirmation
- View order details
- See order ID and status
- Review order items and total
- Download invoice functionality

## Color Palette

- Primary: #d946a0 (Pink)
- Secondary: #ec4899 (Hot Pink)
- Accent: #f472b6 (Light Pink)
- Text Dark: #1a1a1a
- Background Light: #fafafa

## Sample Data

The application includes sample data for 6 flowers:
- Red Rose
- Pink Carnation
- Yellow Sunflower
- White Lily
- Purple Iris
- Orange Tulip

## Future Enhancements

- User authentication and accounts
- Real payment integration
- Email notifications
- Advanced search and filtering
- Wishlist functionality
- Product reviews and ratings
- Admin dashboard for inventory management
- API integration with backend

## License

MIT License

## Support

For support, please contact info@flowerbycolour.com
