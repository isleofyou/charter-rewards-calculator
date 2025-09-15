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
  },
  {
    id: 4,
    name: "Lydia Thompson",
    email: "lydia.thompson@email.com"
  }
];

export const transactions = [
  // David Johnson - Customer 1 (High activity, good rewards - Lion keeper)
  { id: 1, customerId: 1, amount: 120.50, date: "2024-01-15", description: "Premium Lion Food (50lbs)" },
  { id: 2, customerId: 1, amount: 75.25, date: "2024-01-20", description: "Zebra Enrichment Toys" },
  { id: 3, customerId: 1, amount: 25.00, date: "2024-01-25", description: "Giraffe Vitamins" },
  { id: 4, customerId: 1, amount: 200.00, date: "2024-02-05", description: "Elephant Bath Brushes & Shampoo" },
  { id: 5, customerId: 1, amount: 89.99, date: "2024-02-14", description: "Hippo Pool Cleaning Kit" },
  { id: 6, customerId: 1, amount: 156.75, date: "2024-03-08", description: "Rhino Horn Care Set" },
  
  // Caelum Smith - Customer 2 (Medium activity - Primate specialist)
  { id: 7, customerId: 2, amount: 150.00, date: "2024-01-10", description: "Gorilla Climbing Structure" },
  { id: 8, customerId: 2, amount: 45.50, date: "2024-01-28", description: "Monkey Treats & Bananas" },
  { id: 9, customerId: 2, amount: 98.75, date: "2024-02-12", description: "Chimpanzee Puzzle Feeders" },
  { id: 10, customerId: 2, amount: 67.25, date: "2024-03-01", description: "Orangutan Swing Rope" },
  
  // Aero Davis - Customer 3 (Low activity, some below threshold - Bird enthusiast)
  { id: 11, customerId: 3, amount: 35.00, date: "2024-01-05", description: "Parrot Seed Mix" },
  { id: 12, customerId: 3, amount: 125.50, date: "2024-02-18", description: "Eagle Flight Training Equipment" },
  { id: 13, customerId: 3, amount: 42.75, date: "2024-03-15", description: "Flamingo Pink Supplements" },
  
  // Lydia Thompson - Customer 4 (Marine animal specialist)
  { id: 14, customerId: 4, amount: 180.25, date: "2024-01-12", description: "Dolphin Training Fish (Fresh)" },
  { id: 15, customerId: 4, amount: 95.50, date: "2024-01-30", description: "Sea Lion Ball Set" },
  { id: 16, customerId: 4, amount: 220.00, date: "2024-02-08", description: "Shark Tank Filtration System" },
  { id: 17, customerId: 4, amount: 67.75, date: "2024-02-20", description: "Penguin Ice Machine Maintenance" },
  { id: 18, customerId: 4, amount: 38.99, date: "2024-03-05", description: "Octopus Enrichment Puzzles" },
  { id: 19, customerId: 4, amount: 145.00, date: "2024-03-18", description: "Whale Song Audio Equipment" }
];