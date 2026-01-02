# My Dance Academy - Bharatanatyam Dance Academy Website

A professional full-stack website for a Bharatanatyam Dance Academy with integrated enrollment and payment system.

## Features

### 🎭 Course Organization
- **10 Structured Levels**: From Angikam Basics to Arangetram Prep
- **Age-Based Filtering**: Filter courses by Kids (5-8), Juniors (9-13), Adults (14+), or All Ages
- **Detailed Syllabus**: Each course includes:
  - Mudras (Hand Gestures)
  - Adavus (Dance Steps)
  - Theory components

### 🛒 E-commerce Features
- **Shopping Cart System**: Add multiple courses to cart
- **Quantity Management**: Adjust quantities for each course
- **Checkout Process**: Collects student details (Name, Age, Email, Phone, Previous Experience)
- **Payment Gateway Placeholder**: Ready for Stripe, Razorpay, or other payment integrations

### 🎨 Design
- **Traditional Color Palette**: Deep maroon (#8B0000), Gold (#D4AF37), and Cream (#F5E6D3)
- **Modern UI/UX**: Clean, responsive design with smooth transitions
- **Mobile-First**: Fully responsive across all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: React Icons (Font Awesome)

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with CartProvider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── courses/
│   │   ├── page.tsx        # Course catalog with filters
│   │   └── [id]/
│   │       └── page.tsx    # Course detail page
│   ├── cart/
│   │   └── page.tsx        # Shopping cart
│   ├── checkout/
│   │   └── page.tsx        # Checkout with student form
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   └── Footer.tsx          # Footer component
├── contexts/
│   └── CartContext.tsx     # Shopping cart context
├── data/
│   └── courses.ts          # Course data structure
└── SITE_MAP.md            # Site structure documentation
```

## Course Data Structure

Each course includes:
- Basic information (name, description, level, price, duration)
- Age group classification
- Detailed syllabus:
  - Mudras (hand gestures)
  - Adavus (dance steps)
  - Theory topics
- Prerequisites (if applicable)

See `data/courses.ts` for the complete course catalog.

## Shopping Cart Logic

The shopping cart is managed through React Context API (`contexts/CartContext.tsx`):

- **addToCart(course)**: Adds a course to cart or increments quantity
- **removeFromCart(courseId)**: Removes a course from cart
- **updateQuantity(courseId, quantity)**: Updates course quantity
- **clearCart()**: Empties the cart
- **getTotalPrice()**: Calculates total cart value
- **getTotalItems()**: Returns total number of items

Cart state is persisted in localStorage for user convenience.

## Payment Integration

The checkout page includes a payment gateway placeholder. To integrate a real payment gateway:

1. Install the payment SDK (e.g., `@stripe/stripe-js` or Razorpay SDK)
2. Replace the payment form in `app/checkout/page.tsx`
3. Implement payment processing logic
4. Handle success/failure callbacks

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
- Maroon: `maroon-950` (#8B0000)
- Gold: `gold-950` (#D4AF37)
- Cream: `cream-600` (#F5E6D3)

### Courses
Add or modify courses in `data/courses.ts`. Each course follows the `Course` interface.

### Styling
Global styles are in `app/globals.css`. Component-specific styles use Tailwind utility classes.

## Future Enhancements

- User authentication and accounts
- Course progress tracking
- Instructor profiles
- Class schedule and booking
- Student dashboard
- Email notifications
- Admin panel for course management
- Integration with actual payment gateways
- Multi-language support

## License

This project is created for educational and commercial use.

## Contact

For questions or support, please contact: info@mydanceacademy.com



