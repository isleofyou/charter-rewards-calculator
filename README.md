# Charter Communications Rewards Calculator

A React-based customer rewards program calculator that demonstrates modern frontend development practices and clean code architecture.

## Core Requirements

- [x] **Customer rewards program calculator**
- [x] **2 points per dollar spent over $100**
- [x] **1 point per dollar spent between $50-$100**
- [x] **No points for dollars spent under $50**
- [x] **Example: $120 purchase = 2×$20 + 1×$50 = 90 points**
- [x] **Calculate rewards per customer per month and total**
- [x] **Use React JS (NO TypeScript)**
- [x] **Simulate async API call**
- [x] **No Redux**
- [x] **Create sample dataset**

## MVP Features

- [x] **Display customer transactions by month**
- [x] **Calculate reward points per transaction**
- [x] **Show monthly totals per customer**
- [x] **Show grand totals per customer**
- [x] **Async data loading simulation**

## Problem Statement

Create a web application that calculates reward points for customers based on their purchase amounts:
- **2 points** for every dollar spent over $100
- **1 point** for every dollar spent between $50-$100  
- **0 points** for amounts under $50

**Example:** A $120 purchase earns 90 points (2×$20 + 1×$50)

## Features

### Core Functionality
- **Real-time rewards calculation** for individual transactions
- **Monthly filtering** to view rewards by specific time periods
- **Customer-specific totals** showing both monthly and all-time points
- **Transaction history** with detailed purchase information
- **Async data simulation** with realistic loading states

### Technical Excellence
- **React functional components** with modern hooks (useState, useEffect)
- **Component composition** with reusable, focused components
- **Responsive design** that works on desktop, tablet, and mobile
- **Accessibility compliant** with ARIA labels and semantic HTML
- **Comprehensive testing** with Jest and React Testing Library
- **Clean code architecture** with separation of concerns
- **Performance optimized** with efficient rendering patterns

### User Experience
- **Professional UI design** with modern styling and animations
- **Loading states** with elegant spinners during data fetching
- **Error handling** with user-friendly error messages
- **Intuitive navigation** with clear visual hierarchy
- **Mobile-first responsive** design for all screen sizes

### Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/charter-rewards-calculator.git
cd charter-rewards-calculator

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

### Available Scripts

```bash
# Development
npm start          # Start development server
npm test           # Run test suite
npm run build      # Create production build
npm run eject      # Eject from Create React App (one-way operation)
```



### Key Components

**RewardsCalculator** - Main application container managing state and data flow
**CustomerCard** - Displays customer info with rewards summary in clean card layout  
**TransactionList** - Shows transaction history with calculated points
**MonthSelector** - Enables filtering by specific months or viewing all-time totals

### Business Logic

The core rewards calculation follows these rules:
```javascript
// Example: $120 purchase
// $50-$100 range: $50 × 1 point = 50 points
// Over $100 range: $20 × 2 points = 40 points
// Total: 90 points
```

## Testing

Comprehensive test suite covering:
- **Core calculation logic** - All reward point scenarios
- **Edge cases** - Boundary values ($50, $100) and invalid inputs
- **Monthly calculations** - Time-based filtering and aggregation
- **Integration scenarios** - Component interaction testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage --watchAll=false
```

## Responsive Design

The application adapts seamlessly across devices:
- **Desktop (1200px+)**: 3×3 customer grid layout
- **Tablet (768px-1024px)**: 2-column responsive grid  
- **Mobile (<768px)**: Single column with optimized spacing

## Design Decisions

### Layout Strategy
- **Card-based design** for clean data presentation
- **Narrow rectangular cards** for better information density
- **Consistent spacing** with 1.5rem gaps for visual breathing room
- **Typography hierarchy** with clear size and weight distinctions

### User Experience
- **Loading simulation** (1 second) to demonstrate async handling
- **Smooth hover effects** for interactive feedback
- **Error boundary protection** for graceful failure handling
- **Accessibility first** with proper ARIA labels and keyboard navigation

## Technical Skills Demonstrated

### React & JavaScript
- Modern React patterns with functional components and hooks
- Clean state management without external libraries
- Component composition and reusability
- Event handling and data flow management

### Styling & Design
- SCSS with variables, mixins, and nested selectors
- CSS Grid and Flexbox for responsive layouts
- Mobile-first responsive design principles
- Modern UI patterns with cards, animations, and micro-interactions

### Testing & Quality
- Jest and React Testing Library for comprehensive coverage
- Test-driven development approach
- Edge case consideration and input validation
- Code organization and maintainability

### Performance & Best Practices
- Efficient re-rendering patterns
- Clean separation of concerns
- Semantic HTML for accessibility
- Production-ready build optimization

## Sample Data

The application includes realistic sample data featuring:
- **9 customers** representing various animal care specialists
- **44 transactions** across 3 months with diverse spending patterns
- **Reward point totals** ranging from low to high earners
- **Realistic purchase descriptions** for zoo/animal supply context

## Deployment Ready

This application is production-ready and can be deployed to:
- **Netlify** - `npm run build` then drag/drop build folder
- **Vercel** - Connect GitHub repo for automatic deployments
- **GitHub Pages** - Use `gh-pages` package for static hosting
- **AWS S3** - Upload build folder to S3 bucket with static hosting

## Future Enhancements

While the current implementation meets all requirements, potential improvements include:
- Customer search and advanced filtering
- Dark mode theme toggle
- Real backend API integration
- Additional reward tier configurations

## Developer Notes

This project demonstrates proficiency in:
- React ecosystem and modern JavaScript
- Component-driven architecture
- Responsive web design
- Testing methodologies  
- Code organization and documentation
- Professional development practices

Built with attention to code quality, user experience, and maintainability.