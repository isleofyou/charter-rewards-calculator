const REWARD_TIERS = {
  HIGH_THRESHOLD: 100,
  LOW_THRESHOLD: 50,
  HIGH_RATE: 2,
  LOW_RATE: 1
}; // created tiers so we can easily change the rates or thresholds

const isValidAmount = (amount) => 
  typeof amount === 'number' && Number.isFinite(amount) && amount >= 0;

/**
 * Calculate reward points for a purchase amount
 * 2 points per dollar over $100, 1 point per dollar between $50-$100
 */
export function calculateRewardPoints(amount) {
  if (!isValidAmount(amount)) return 0;

  const { HIGH_THRESHOLD, LOW_THRESHOLD, HIGH_RATE, LOW_RATE } = REWARD_TIERS;
  
  if (amount <= LOW_THRESHOLD) return 0;
  
  if (amount <= HIGH_THRESHOLD) {
    return Math.floor(amount - LOW_THRESHOLD);
  }
  
  return Math.floor(
    (amount - HIGH_THRESHOLD) * HIGH_RATE + 
    (HIGH_THRESHOLD - LOW_THRESHOLD) * LOW_RATE
  );
}

const addPointsToTransaction = (transaction) => ({
  ...transaction,
  points: calculateRewardPoints(transaction.amount)
});

export function calculateMonthlyRewards(transactions, customerId, month) {
  const transactionsWithPoints = transactions
    .filter(transaction => 
      transaction.customerId === customerId && 
      transaction.date.startsWith(month)
    )
    .map(addPointsToTransaction);
  
  const totalPoints = transactionsWithPoints
    .reduce((total, transaction) => total + transaction.points, 0);
  
  return {
    totalPoints,
    transactions: transactionsWithPoints
  };
}

const belongsToCustomer = (customerId) => (transaction) => 
  transaction.customerId === customerId;

const sumPoints = (total, transaction) => 
  total + calculateRewardPoints(transaction.amount);

export function calculateTotalRewards(transactions, customerId) {
  return transactions
    .filter(belongsToCustomer(customerId))
    .reduce(sumPoints, 0);
}
