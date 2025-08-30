<div align="center">

#  WASAL


---

</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [User Roles](#user-roles)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Color Scheme](#color-scheme)
- [Configuration](#configuration)
- [Responsive Design](#responsive-design)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 Overview

**Wasal** is a modern web application built with Next.js that serves as a **fabric waste management and recycling platform**. The primary goal is to **connect workers who have leftover fabric scraps with factories for reuse and recycling**.

### 🎯 **Main Purpose**
The platform bridges the gap between:
- **Workers** who collect and accumulate fabric waste from construction sites
- **Factories** that can process and recycle these materials
- **Raw Material Dealers** who facilitate the collection and distribution

This creates a **sustainable ecosystem** that reduces waste, promotes recycling, and provides economic benefits for all parties involved.

---

## ✨ Features

### 🔐 Authentication System
- User registration and login
- Password recovery
- Role-based access control

### 🎭 Multi-Role Interface
- **Raw Material Dealer**: Post available work opportunities and manage fabric waste distribution
- **Worker**: Self-register on the platform and apply for available work
- **Factory**: Browse available fabric waste and request materials

### ♻️ **Waste Management & Recycling**
- **Job Posting System**: Dealers post available work opportunities
- **Worker Self-Registration**: Workers can join the platform independently
- **Application Management**: Track job applications and worker profiles
- **Waste-to-Product Pipeline**: Complete traceability from collection to reuse
- **Environmental Impact Metrics**: Track waste reduction and recycling success

### 🎨 Modern UI/UX
- Responsive design for all devices
- Beautiful color scheme and animations
- Intuitive navigation and user experience

### 📱 Responsive Design
- Mobile-first approach
- Cross-browser compatibility
- Optimized for all screen sizes

---

## 👥 User Roles

### 🏪 Raw Material Dealer
- **Interface**: Work opportunity posting and fabric waste management
- **Features**: Post available work, manage worker applications, coordinate waste distribution
- **Functionality**: Create job postings, review worker profiles, manage waste inventory

### 👷 Worker
- **Interface**: Self-registration and job application
- **Features**: Create profile, browse available work, apply for jobs, track applications
- **Functionality**: Self-register on platform, submit job applications, monitor application status

### 🏭 Factory
- **Interface**: Fabric waste browsing and request
- **Features**: Browse available waste materials, request specific quantities
- **Functionality**: Select suitable waste materials for recycling and production

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Welcome page with role selection |
| **Role Selection** | `/role-selection` | Choose user role |
| **Sign In** | `/signin` | User authentication |
| **Sign Up** | `/signup` | User registration |
| **Forgot Password** | `/forgot-password` | Password recovery |
| **Contact** | `/contact` | Contact information and form |
| **Raw Material Dealer** | `/raw-material-dealer` | Work posting and waste management page |
| **Worker** | `/worker` | Self-registration and job application page |
| **Factory** | `/factory` | Waste browsing and request page |

---

## 🌱 **Environmental & Economic Benefits**

### ♻️ **Waste Reduction**
- **Reduce Landfill Waste**: Divert fabric scraps from landfills
- **Resource Conservation**: Maximize material utilization
- **Circular Economy**: Create sustainable material cycles

### 💰 **Economic Benefits**
- **Worker Income**: Workers earn from waste collection
- **Factory Savings**: Factories reduce material costs
- **Dealer Profits**: Dealers profit from waste distribution
- **Cost Efficiency**: Lower production costs through recycling

### 🌍 **Sustainability Impact**
- **Carbon Footprint Reduction**: Less waste transportation and processing
- **Resource Efficiency**: Optimize material usage across industries
- **Green Business Model**: Promote environmentally conscious practices

---

## 🔄 **Workflow Process**

### 📝 **Step 1: Worker Registration**
- Workers **self-register** on the platform
- Create detailed profiles with skills and experience
- Upload identification documents and certifications

### 💼 **Step 2: Job Posting**
- Raw Material Dealers post **available work opportunities**
- Specify job requirements, location, and compensation
- Set deadlines and application criteria

### 📋 **Step 3: Job Application**
- Workers browse and apply for **suitable jobs**
- Submit applications with relevant experience
- Track application status and updates

### 🤝 **Step 4: Job Assignment**
- Dealers review worker applications
- Select suitable candidates for the work
- Coordinate waste collection and distribution

### ♻️ **Step 5: Waste Processing**
- Workers collect fabric waste from assigned locations
- Materials are transported to factories for recycling
- Complete traceability from collection to reuse

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5.2** - React framework
- **React 19.1.0** - UI library
- **Tailwind CSS 4.0** - Utility-first CSS framework

### Development Tools
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Git** - Version control

### Browser Support
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Installation

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd cis
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

---

## 🔗 **Repository Links**

### **Frontend Repository**
- **Current Repository**: This repository contains the frontend application built with Next.js

### **Backend Repository**
- **Backend API**: [https://github.com/Omar113650/wasal](https://github.com/Omar113650/wasal)
  - Contains the backend API built with Node.js/Express
  - Includes Controllers, Middleware, Routes, Models, and Validation
  - Built with JavaScript (100%)

---

## 🛠️ **Technologies & Tools**

### **Frontend Technologies**
- **Next.js 15.5.2** - React framework for production
- **React 19.1.0** - JavaScript library for building user interfaces
- **Tailwind CSS 4.0** - Utility-first CSS framework for rapid UI development

### **Development Tools**
- **Node.js** - JavaScript runtime environment
- **npm** - Package manager for JavaScript
- **PostCSS** - CSS processing tool
- **ESLint** - Code linting and quality tool
- **Git** - Version control system

### **Build & Deployment**
- **Vercel** - Platform for deploying Next.js applications
- **Webpack** - Module bundler (included with Next.js)
- **Babel** - JavaScript compiler (included with Next.js)

### **Browser Support**
- **Chrome** - Full support
- **Firefox** - Full support  
- **Safari** - Full support
- **Edge** - Full support
- **Mobile Browsers** - iOS Safari, Chrome Mobile

---

## 💻 Usage

### Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Project Structure

```
cis/
├── src/
│   ├── app/
│   │   ├── page.js              # Home page
│   │   ├── layout.js            # Root layout
│   │   ├── globals.css          # Global styles
│   │   ├── role-selection/      # Role selection page
│   │   ├── signin/              # Sign in page
│   │   ├── signup/              # Sign up page
│   │   ├── forgot-password/     # Password recovery
│   │   ├── contact/             # Contact page
│   │   ├── raw-material-dealer/ # Dealer dashboard
│   │   ├── worker/              # Worker dashboard
│   │   └── factory/             # Factory dashboard
│   └── components/              # Reusable components
├── public/                      # Static assets
├── package.json                 # Dependencies
├── tailwind.config.mjs         # Tailwind configuration
└── next.config.mjs             # Next.js configuration
```

---

## 🎨 Color Scheme

### Primary Colors
- **Primary Blue**: `#448AB1` - Main buttons and links
- **Dark Blue**: `#1E3A8A` - Headers and branding
- **Light Blue**: `#25ABCD` - Accents and highlights
- **Dark Teal**: `#1D3B4B` - Secondary elements

### Usage
- **Buttons**: `#448AB1` for primary actions
- **Headers**: `#1E3A8A` for main titles
- **Links**: `#448AB1` for interactive elements
- **Accents**: `#25ABCD` for highlights

---

## 🔧 Configuration

### Tailwind CSS
```javascript
// tailwind.config.mjs
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#448AB1',
        darkBlue: '#1E3A8A',
        lightBlue: '#25ABCD',
        darkTeal: '#1D3B4B'
      }
    }
  }
}
```

### Next.js
```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@next/font']
  }
}
```

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `< 768px` - Single column layout
- **Tablet**: `768px - 1024px` - Two column layout
- **Desktop**: `> 1024px` - Full layout with sidebars

### Features
- Mobile-first approach
- Flexible grid systems
- Adaptive navigation
- Touch-friendly interfaces

---

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_APP_NAME=Wasal
```

---

### Code Standards
- Follow React best practices
- Use Tailwind CSS for styling
- Maintain responsive design
- Write clean, readable code

---

<div align="center">

**Built with love using Next.js, React, and Tailwind CSS**

</div>
