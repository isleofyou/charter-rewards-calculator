/**
 * Data utility functions for filtering and accessing customer/transaction data
 */

export const getCustomerById = (customers, customerId) => 
  customers.find(customer => customer.id === customerId);

export const getTransactionsByCustomer = (transactions, customerId) =>
  transactions.filter(transaction => transaction.customerId === customerId);

export const getTransactionsByMonth = (transactions, month) =>
  transactions.filter(transaction => transaction.date.startsWith(month));

export const getUniqueMonths = (transactions) => {
  const months = transactions.map(transaction => transaction.date.substring(0, 7));
  return [...new Set(months)].sort();
};

export const getCustomersWithTransactions = (customers, transactions) =>
  customers.filter(customer => 
    transactions.some(transaction => transaction.customerId === customer.id)
  );
