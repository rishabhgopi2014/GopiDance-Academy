# Quick Start Guide

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Key Features to Test

### 1. Course Catalog with Age Filtering
- Navigate to `/courses`
- Try filtering by different age groups:
  - All Ages
  - Kids (5-8 years)
  - Juniors (9-13 years)
  - Adults (14+ years)

### 2. Course Details & Syllabus
- Click "View Syllabus" on any course
- Review the detailed syllabus showing:
  - Mudras (Hand Gestures)
  - Adavus (Dance Steps)
  - Theory topics

### 3. Shopping Cart
- Click "Add to Cart" on multiple courses
- Navigate to `/cart` to see your cart
- Adjust quantities using +/- buttons
- Remove items if needed

### 4. Checkout Process
- Click "Proceed to Checkout" from cart
- Fill in student information:
  - Name
  - Age
  - Email
  - Phone
  - Previous Experience
- Review order summary
- Submit payment (demo mode)

## Project Structure Overview

```
MyDanceAcad/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── courses/           # Course pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout page
│   └── about/             # About page
├── components/            # Reusable components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── contexts/              # React Context
│   └── CartContext.tsx    # Shopping cart logic
├── data/                  # Data files
│   └── courses.ts         # Course data structure
└── Documentation files
    ├── SITE_MAP.md
    ├── SHOPPING_CART_LOGIC.md
    └── COURSE_DATA_STRUCTURE.md
```

## Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'maroon': { '950': '#8B0000' },
  'gold': { '950': '#D4AF37' },
  'cream': { '600': '#F5E6D3' }
}
```

### Add/Modify Courses
Edit `data/courses.ts` and follow the `Course` interface structure.

### Modify Payment Gateway
Replace the payment placeholder in `app/checkout/page.tsx` with your preferred payment SDK.

## Troubleshooting

### TypeScript Errors
If you see TypeScript errors, ensure dependencies are installed:
```bash
npm install
```

### Build Errors
Clear `.next` folder and rebuild:
```bash
rm -rf .next
npm run build
```

### Cart Not Persisting
Check browser localStorage is enabled. The cart automatically saves to localStorage.

## Next Steps

1. **Integrate Real Payment Gateway**
   - Stripe: `npm install @stripe/stripe-js`
   - Razorpay: `npm install razorpay`

2. **Add Backend API**
   - Create API routes for course management
   - Add user authentication
   - Store enrollments in database

3. **Enhance Features**
   - Add course search functionality
   - Implement user accounts
   - Add course reviews/ratings
   - Create admin dashboard

## Support

For questions or issues, refer to:
- `README.md` - Full documentation
- `SITE_MAP.md` - Site structure
- `SHOPPING_CART_LOGIC.md` - Cart implementation details
- `COURSE_DATA_STRUCTURE.md` - Course data format



