# Shopping Cart Logic - React Context API Implementation

## Overview
The shopping cart functionality is implemented using React Context API, providing a centralized state management solution that persists cart data across page navigations and browser sessions.

## Architecture

### Context Provider (`contexts/CartContext.tsx`)

The `CartProvider` component wraps the entire application and provides cart state and methods to all child components.

### State Structure

```typescript
interface CartItem extends Course {
  quantity: number;
}

interface StudentInfo {
  name: string;
  age: string;
  previousExperience: string;
  email: string;
  phone: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: string) => void;
  updateQuantity: (courseId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  studentInfo: StudentInfo | null;
  setStudentInfo: (info: StudentInfo | null) => void;
}
```

## Core Functions

### 1. `addToCart(course: Course)`
Adds a course to the cart or increments its quantity if already present.

**Logic:**
```typescript
const addToCart = (course: Course) => {
  setCartItems((prevItems: CartItem[]) => {
    const existingItem = prevItems.find((item: CartItem) => item.id === course.id);
    
    if (existingItem) {
      // Increment quantity if course already exists
      return prevItems.map((item: CartItem) =>
        item.id === course.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new course with quantity 1
      return [...prevItems, { ...course, quantity: 1 }];
    }
  });
};
```

**Usage Example:**
```typescript
const { addToCart } = useCart();
addToCart(selectedCourse);
```

### 2. `removeFromCart(courseId: string)`
Removes a course completely from the cart.

**Logic:**
```typescript
const removeFromCart = (courseId: string) => {
  setCartItems((prevItems: CartItem[]) => 
    prevItems.filter((item: CartItem) => item.id !== courseId)
  );
};
```

**Usage Example:**
```typescript
const { removeFromCart } = useCart();
removeFromCart('angikam-basics');
```

### 3. `updateQuantity(courseId: string, quantity: number)`
Updates the quantity of a specific course. If quantity is 0 or less, removes the item.

**Logic:**
```typescript
const updateQuantity = (courseId: string, quantity: number) => {
  if (quantity <= 0) {
    removeFromCart(courseId);
    return;
  }
  
  setCartItems((prevItems: CartItem[]) =>
    prevItems.map((item: CartItem) =>
      item.id === courseId ? { ...item, quantity } : item
    )
  );
};
```

**Usage Example:**
```typescript
const { updateQuantity } = useCart();
updateQuantity('angikam-basics', 2); // Set quantity to 2
updateQuantity('angikam-basics', 0); // Removes item
```

### 4. `clearCart()`
Empties the entire cart and clears localStorage.

**Logic:**
```typescript
const clearCart = () => {
  setCartItems([]);
  localStorage.removeItem('danceAcademyCart');
};
```

**Usage Example:**
```typescript
const { clearCart } = useCart();
clearCart(); // After successful payment
```

### 5. `getTotalPrice(): number`
Calculates the total price of all items in the cart.

**Logic:**
```typescript
const getTotalPrice = (): number => {
  return cartItems.reduce((total: number, item: CartItem) => 
    total + item.price * item.quantity, 0
  );
};
```

**Usage Example:**
```typescript
const { getTotalPrice } = useCart();
const total = getTotalPrice(); // Returns total in rupees
```

### 6. `getTotalItems(): number`
Returns the total number of items (sum of all quantities) in the cart.

**Logic:**
```typescript
const getTotalItems = (): number => {
  return cartItems.reduce((total: number, item: CartItem) => 
    total + item.quantity, 0
  );
};
```

**Usage Example:**
```typescript
const { getTotalItems } = useCart();
const itemCount = getTotalItems(); // Returns total quantity
```

## Persistence

### LocalStorage Integration
The cart state is automatically saved to and loaded from localStorage:

```typescript
// Load on mount
useEffect(() => {
  const savedCart = localStorage.getItem('danceAcademyCart');
  if (savedCart) {
    try {
      setCartItems(JSON.parse(savedCart));
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  }
}, []);

// Save on change
useEffect(() => {
  localStorage.setItem('danceAcademyCart', JSON.stringify(cartItems));
}, [cartItems]);
```

**Benefits:**
- Cart persists across page refreshes
- Cart persists across browser sessions
- No data loss if user accidentally closes browser

## Usage in Components

### Accessing Cart Context

```typescript
'use client';
import { useCart } from '@/contexts/CartContext';

export default function MyComponent() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  // Use cart methods and state
}
```

### Example: Adding to Cart from Course Card

```typescript
const handleAddToCart = (course: Course) => {
  addToCart(course);
  alert(`${course.name} added to cart!`);
};
```

### Example: Displaying Cart Count in Navbar

```typescript
const { getTotalItems } = useCart();
const cartItemCount = getTotalItems();

// Display badge with count
{cartItemCount > 0 && (
  <span className="cart-badge">{cartItemCount}</span>
)}
```

## Data Flow

### Adding Multiple Courses
1. User clicks "Add to Cart" on Course A → `addToCart(courseA)`
2. User clicks "Add to Cart" on Course B → `addToCart(courseB)`
3. User clicks "Add to Cart" on Course A again → Quantity of Course A increases to 2
4. Cart now contains: [Course A (qty: 2), Course B (qty: 1)]

### Checkout Flow
1. User views cart → `/cart` displays all items
2. User adjusts quantities → `updateQuantity(courseId, newQuantity)`
3. User proceeds to checkout → `/checkout`
4. User fills form → `setStudentInfo(formData)`
5. User completes payment → `clearCart()` → Redirect to home

## Error Handling

- **Invalid localStorage data**: Catches JSON parse errors and logs them
- **Missing context**: `useCart()` throws error if used outside `CartProvider`
- **Empty cart operations**: Functions handle empty cart gracefully

## Performance Considerations

- **LocalStorage writes**: Debounced through React's state batching
- **Re-renders**: Only components using `useCart()` re-render on cart changes
- **Computed values**: `getTotalPrice()` and `getTotalItems()` are computed on-demand, not stored

## Future Enhancements

- Add cart expiration (e.g., clear after 30 days)
- Add cart sharing functionality
- Add save for later feature
- Add cart analytics
- Add cart validation (e.g., check course availability)



