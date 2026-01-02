# Site Map - My Dance Academy

## Overview
This document outlines the complete site structure and navigation flow for the Bharatanatyam Dance Academy website.

## Main Navigation Structure

```
Home (/)
├── Hero Section
├── Features Section
├── Featured Courses
└── Call-to-Action

Courses (/courses)
├── Age Filter (All Ages, Kids 5-8, Juniors 9-13, Adults 14+)
├── Course Grid (Filtered by age group)
└── Course Cards with:
    ├── Course Name & Level
    ├── Price & Duration
    ├── Age Range
    ├── "View Syllabus" Button
    └── "Add to Cart" Button

Course Detail (/courses/[id])
├── Course Header
│   ├── Course Name & Level
│   ├── Description
│   ├── Price, Age Range, Duration
│   └── Prerequisites
├── "Enroll Now" Button
└── Detailed Syllabus
    ├── Mudras (Hand Gestures)
    ├── Adavus (Dance Steps)
    └── Theory

Shopping Cart (/cart)
├── Cart Items List
│   ├── Course Name
│   ├── Quantity Controls (+/-)
│   ├── Price per item
│   └── Remove Button
├── Order Summary
│   ├── Item Count
│   ├── Subtotal
│   └── Total
└── "Proceed to Checkout" Button

Checkout (/checkout)
├── Student Information Form
│   ├── Full Name
│   ├── Age
│   ├── Email Address
│   ├── Phone Number
│   └── Previous Experience
├── Payment Information
│   └── Payment Gateway Placeholder
└── Order Summary Sidebar

About (/about)
├── Mission Statement
├── Key Features Grid
└── Why Choose Us Section

Footer (Global)
├── Academy Information
├── Quick Links
└── Contact Information
```

## Data Flow

### Shopping Cart Flow
1. User browses courses → `/courses`
2. User filters by age group (optional)
3. User clicks "View Syllabus" → `/courses/[id]`
4. User clicks "Enroll Now" or "Add to Cart" → Course added to cart
5. User views cart → `/cart`
6. User adjusts quantities or removes items
7. User clicks "Proceed to Checkout" → `/checkout`
8. User fills student information form
9. User reviews order summary
10. User submits payment → Success → Cart cleared → Redirect to home

### Course Data Structure
Each course contains:
- Basic Info: ID, Name, Description, Level
- Age Information: Age Group, Age Range
- Pricing: Price, Duration
- Syllabus:
  - Mudras (array of strings)
  - Adavus (array of strings)
  - Theory (array of strings)
- Prerequisites (optional)

## User Journey Examples

### Journey 1: Parent Enrolling Child
1. Land on Home → Learn about academy
2. Navigate to Courses → Filter by "Kids (5-8 years)"
3. View "Angikam Basics" → Read syllabus
4. Add to cart
5. View "Adavu Module 1" → Add to cart (enrolling in multiple courses)
6. Go to Cart → Review selections
7. Checkout → Fill child's information
8. Complete payment

### Journey 2: Adult Beginner
1. Land on Home
2. Navigate to Courses → Filter by "Adults (14+ years)"
3. View "Shloka & Mudra Theory" → Add to cart
4. View "Alarippu & Jatiswaram" → Add to cart
5. Checkout → Fill information including previous experience
6. Complete payment

### Journey 3: Advanced Student
1. Navigate directly to Courses
2. Search for "Varnam Intensive" or "Arangetram Prep"
3. View detailed syllabus
4. Enroll in single advanced course
5. Checkout

## Technical Features

### State Management
- React Context API for cart state
- LocalStorage persistence for cart
- Student information stored in context during checkout

### Filtering
- Age-based course filtering
- Real-time filter updates
- Maintains filter state during navigation

### Responsive Design
- Mobile-first approach
- Grid layouts adapt to screen size
- Sticky navigation and order summary

## Page Components

### Global Components
- **Navbar**: Navigation with cart icon and item count
- **Footer**: Academy information and links

### Page-Specific Components
- **Home**: Hero, features, featured courses
- **Courses**: Filter bar, course grid
- **Course Detail**: Syllabus sections, enroll button
- **Cart**: Item list, quantity controls, order summary
- **Checkout**: Form, payment placeholder, order review
- **About**: Mission, features, benefits


