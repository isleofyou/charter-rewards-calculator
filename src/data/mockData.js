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
  },
  {
    id: 5,
    name: "Zoey Martinez",
    email: "zoey.martinez@email.com"
  },
  {
    id: 6,
    name: "Leo Chen",
    email: "leo.chen@email.com"
  },
  {
    id: 7,
    name: "Catie Wilson",
    email: "catie.wilson@email.com"
  },
  {
    id: 8,
    name: "Roy Anderson",
    email: "roy.anderson@email.com"
  },
  {
    id: 9,
    name: "Andrew Parker",
    email: "andrew.parker@email.com"
  }
];

export const transactions = [
  { id: 1, customerId: 1, amount: 120.50, date: "2024-01-15", description: "Premium Lion Food (50lbs)" },
  { id: 2, customerId: 1, amount: 75.25, date: "2024-01-20", description: "Zebra Enrichment Toys" },
  { id: 3, customerId: 1, amount: 25.00, date: "2024-01-25", description: "Giraffe Vitamins" },
  { id: 4, customerId: 1, amount: 200.00, date: "2024-02-05", description: "Elephant Bath Brushes & Shampoo" },
  { id: 5, customerId: 1, amount: 89.99, date: "2024-02-14", description: "Hippo Pool Cleaning Kit" },
  { id: 6, customerId: 1, amount: 156.75, date: "2024-03-08", description: "Rhino Horn Care Set" },
  
  { id: 7, customerId: 2, amount: 150.00, date: "2024-01-10", description: "Gorilla Climbing Structure" },
  { id: 8, customerId: 2, amount: 45.50, date: "2024-01-28", description: "Monkey Treats & Bananas" },
  { id: 9, customerId: 2, amount: 98.75, date: "2024-02-12", description: "Chimpanzee Puzzle Feeders" },
  { id: 10, customerId: 2, amount: 67.25, date: "2024-03-01", description: "Orangutan Swing Rope" },
  
  { id: 11, customerId: 3, amount: 35.00, date: "2024-01-05", description: "Parrot Seed Mix" },
  { id: 12, customerId: 3, amount: 125.50, date: "2024-02-18", description: "Eagle Flight Training Equipment" },
  { id: 13, customerId: 3, amount: 42.75, date: "2024-03-15", description: "Flamingo Pink Supplements" },
  
  { id: 14, customerId: 4, amount: 180.25, date: "2024-01-12", description: "Dolphin Training Fish (Fresh)" },
  { id: 15, customerId: 4, amount: 95.50, date: "2024-01-30", description: "Sea Lion Ball Set" },
  { id: 16, customerId: 4, amount: 220.00, date: "2024-02-08", description: "Shark Tank Filtration System" },
  { id: 17, customerId: 4, amount: 67.75, date: "2024-02-20", description: "Penguin Ice Machine Maintenance" },
  { id: 18, customerId: 4, amount: 38.99, date: "2024-03-05", description: "Octopus Enrichment Puzzles" },
  { id: 19, customerId: 4, amount: 145.00, date: "2024-03-18", description: "Whale Song Audio Equipment" },

  { id: 20, customerId: 5, amount: 175.50, date: "2024-01-08", description: "Python Heating System" },
  { id: 21, customerId: 5, amount: 89.25, date: "2024-01-22", description: "Iguana UV Light Replacement" },
  { id: 22, customerId: 5, amount: 245.00, date: "2024-02-15", description: "Komodo Dragon Habitat Upgrade" },
  { id: 23, customerId: 5, amount: 134.75, date: "2024-02-28", description: "Turtle Aquatic Plants" },
  { id: 24, customerId: 5, amount: 56.00, date: "2024-03-12", description: "Gecko Climbing Branches" },

  { id: 25, customerId: 6, amount: 78.50, date: "2024-01-18", description: "Rabbit Exercise Wheels" },
  { id: 26, customerId: 6, amount: 112.25, date: "2024-02-03", description: "Ferret Tunnel System" },
  { id: 27, customerId: 6, amount: 45.75, date: "2024-02-25", description: "Guinea Pig Vitamin Pellets" },
  { id: 28, customerId: 6, amount: 189.00, date: "2024-03-10", description: "Chinchilla Dust Bath Station" },
  { id: 29, customerId: 6, amount: 67.50, date: "2024-03-22", description: "Hamster Bedding (Premium)" },

  { id: 30, customerId: 7, amount: 95.00, date: "2024-01-25", description: "Hippo Supplements" },
  { id: 31, customerId: 7, amount: 34.50, date: "2024-02-10", description: "Chicken Coop Cleaner" },
  { id: 32, customerId: 7, amount: 156.75, date: "2024-02-22", description: "Pig Feed (Organic, 100lbs)" },
  { id: 33, customerId: 7, amount: 87.25, date: "2024-03-08", description: "Sheep Shearing Equipment" },
  { id: 34, customerId: 7, amount: 123.50, date: "2024-03-20", description: "Cow Milking System Parts" },

  { id: 35, customerId: 8, amount: 67.00, date: "2024-01-14", description: "Meerkat Digging Sand" },
  { id: 36, customerId: 8, amount: 289.99, date: "2024-02-05", description: "Sloth Climbing Tree (Custom)" },
  { id: 37, customerId: 8, amount: 45.25, date: "2024-02-18", description: "Lemur Fruit Mix" },
  { id: 38, customerId: 8, amount: 178.50, date: "2024-03-02", description: "Kangaroo Pouch Care Kit" },
  { id: 39, customerId: 8, amount: 92.75, date: "2024-03-25", description: "Wallaby Exercise Equipment" },

  { id: 40, customerId: 9, amount: 134.25, date: "2024-01-20", description: "Snake Bite Kit (Professional)" },
  { id: 41, customerId: 9, amount: 78.50, date: "2024-02-08", description: "Venom Extraction Equipment" },
  { id: 42, customerId: 9, amount: 203.75, date: "2024-02-22", description: "Spider Habitat Climate Control" },
  { id: 43, customerId: 9, amount: 89.99, date: "2024-03-05", description: "Scorpion UV Sterilizer" },
  { id: 44, customerId: 9, amount: 167.50, date: "2024-03-18", description: "Antivenom Storage System" }
];