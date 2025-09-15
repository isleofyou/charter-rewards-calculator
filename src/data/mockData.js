export const customers = [
  {
    id: 1,
    name: "David Johnson",
    email: "david.johnson@email.com"
  },
  {
    id: 2,
    name: "Caelum Smith",
    email: "caelum.smith@email.com"
  },
  {
    id: 3,
    name: "Aero Davis",
    email: "aero.davis@email.com"
  }
];

export const transactions = [
  // David Johnson - Customer 1 (High activity, good rewards)
  { id: 1, customerId: 1, amount: 120.50, date: "2024-01-15", description: "Online Shopping" },
  { id: 2, customerId: 1, amount: 75.25, date: "2024-01-20", description: "Grocery Store" },
  { id: 3, customerId: 1, amount: 25.00, date: "2024-01-25", description: "Coffee Shop" },
  { id: 4, customerId: 1, amount: 200.00, date: "2024-02-05", description: "Electronics Store" },
  { id: 5, customerId: 1, amount: 89.99, date: "2024-02-14", description: "Restaurant" },
  { id: 6, customerId: 1, amount: 156.75, date: "2024-03-08", description: "Department Store" },
  
  // Caelum Smith - Customer 2 (Medium activity)
  { id: 7, customerId: 2, amount: 150.00, date: "2024-01-10", description: "Home Improvement" },
  { id: 8, customerId: 2, amount: 45.50, date: "2024-01-28", description: "Gas Station" },
  { id: 9, customerId: 2, amount: 98.75, date: "2024-02-12", description: "Bookstore" },
  { id: 10, customerId: 2, amount: 67.25, date: "2024-03-01", description: "Pharmacy" },
  
  // Aero Davis - Customer 3 (Low activity, some below threshold)
  { id: 11, customerId: 3, amount: 35.00, date: "2024-01-05", description: "Coffee Shop" },
  { id: 12, customerId: 3, amount: 125.50, date: "2024-02-18", description: "Clothing Store" },
  { id: 13, customerId: 3, amount: 42.75, date: "2024-03-15", description: "Lunch" }
];