import { calculateRewardPoints, calculateMonthlyRewards, calculateTotalRewards } from '../utils/pointsCalculator';

describe('Points Calculator', () => {
  describe('calculateRewardPoints', () => {
    test('should return 0 points for purchases under $50', () => {
      expect(calculateRewardPoints(0)).toBe(0);
      expect(calculateRewardPoints(25)).toBe(0);
      expect(calculateRewardPoints(49.99)).toBe(0);
    });

    test('should return 1 point per dollar for purchases between $50-$100', () => {
      expect(calculateRewardPoints(50)).toBe(0);
      expect(calculateRewardPoints(50.01)).toBe(0);
      expect(calculateRewardPoints(75)).toBe(25);
      expect(calculateRewardPoints(100)).toBe(50);
    });

    test('should return correct points for purchases over $100', () => {
      expect(calculateRewardPoints(100.01)).toBe(50);
      expect(calculateRewardPoints(120)).toBe(90);
      expect(calculateRewardPoints(150)).toBe(150);
    });

    test('should handle the example from requirements: $120 = 90 points', () => {
      expect(calculateRewardPoints(120)).toBe(90);
    });

    test('should handle edge cases and decimal values', () => {
      expect(calculateRewardPoints(100.50)).toBe(51);
      expect(calculateRewardPoints(200)).toBe(250);
    });

    test('should handle invalid inputs gracefully', () => {
      expect(calculateRewardPoints('abc')).toBe(0);
      expect(calculateRewardPoints('123abc')).toBe(0);
      expect(calculateRewardPoints('$100')).toBe(0);
      expect(calculateRewardPoints('💰')).toBe(0);
      expect(calculateRewardPoints('100💵')).toBe(0);
      expect(calculateRewardPoints(null)).toBe(0);
      expect(calculateRewardPoints(undefined)).toBe(0);
      expect(calculateRewardPoints('')).toBe(0);
      expect(calculateRewardPoints(true)).toBe(0);
      expect(calculateRewardPoints(false)).toBe(0);
      expect(calculateRewardPoints([])).toBe(0);
      expect(calculateRewardPoints({})).toBe(0);
      expect(calculateRewardPoints([100])).toBe(0);
      expect(calculateRewardPoints(-50)).toBe(0);
      expect(calculateRewardPoints(-100)).toBe(0);
      expect(calculateRewardPoints(Infinity)).toBe(0);
      expect(calculateRewardPoints(-Infinity)).toBe(0);
      expect(calculateRewardPoints(NaN)).toBe(0);
    });
  });

  describe('calculateMonthlyRewards', () => {
    const sampleTransactions = [
      { id: 1, customerId: 1, amount: 120, date: '2024-01-15' },
      { id: 2, customerId: 1, amount: 75, date: '2024-01-20' },
      { id: 3, customerId: 1, amount: 25, date: '2024-01-25' },
      { id: 4, customerId: 2, amount: 150, date: '2024-01-10' },
      { id: 5, customerId: 1, amount: 200, date: '2024-02-05' },
    ];

    test('should calculate monthly rewards for a customer correctly', () => {
      const monthlyRewards = calculateMonthlyRewards(sampleTransactions, 1, '2024-01');
      expect(monthlyRewards.totalPoints).toBe(115);
      expect(monthlyRewards.transactions).toHaveLength(3);
    });

    test('should return 0 points and empty transactions for customer with no transactions in month', () => {
      const monthlyRewards = calculateMonthlyRewards(sampleTransactions, 999, '2024-01');
      expect(monthlyRewards.totalPoints).toBe(0);
      expect(monthlyRewards.transactions).toHaveLength(0);
    });

    test('should calculate rewards for different months correctly', () => {
      const feb2024 = calculateMonthlyRewards(sampleTransactions, 1, '2024-02');
      expect(feb2024.totalPoints).toBe(250);
      expect(feb2024.transactions).toHaveLength(1);
    });
  });

  describe('calculateTotalRewards', () => {
    const sampleTransactions = [
      { id: 1, customerId: 1, amount: 120, date: '2024-01-15' },
      { id: 2, customerId: 1, amount: 75, date: '2024-01-20' },
      { id: 3, customerId: 1, amount: 200, date: '2024-02-05' },
      { id: 4, customerId: 2, amount: 150, date: '2024-01-10' },
    ];

    test('should calculate total rewards across all months for a customer', () => {
      const totalRewards = calculateTotalRewards(sampleTransactions, 1);
      expect(totalRewards).toBe(365);
    });

    test('should return 0 for customer with no transactions', () => {
      const totalRewards = calculateTotalRewards(sampleTransactions, 999);
      expect(totalRewards).toBe(0);
    });

    test('should calculate correctly for customer 2', () => {
      const totalRewards = calculateTotalRewards(sampleTransactions, 2);
      expect(totalRewards).toBe(150);
    });
  });
});
