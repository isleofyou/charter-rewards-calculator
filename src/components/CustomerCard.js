import { calculateMonthlyRewards, calculateTotalRewards, getTransactionsByCustomer } from '../utils';
import { TransactionList } from '.';

function CustomerCard({ customer, transactions, selectedMonth }) {
  const customerTransactions = getTransactionsByCustomer(transactions, customer.id);
  
  const monthlyRewards = selectedMonth === 'all' 
    ? null 
    : calculateMonthlyRewards(transactions, customer.id, selectedMonth);
  
  const totalRewards = calculateTotalRewards(transactions, customer.id);
  
  const displayTransactions = selectedMonth === 'all' 
    ? customerTransactions 
    : monthlyRewards?.transactions || [];

  const displayPoints = selectedMonth === 'all' 
    ? totalRewards 
    : monthlyRewards?.totalPoints || 0;

  return (
    <article 
      className="customer-card" 
      role="gridcell"
      aria-labelledby={`customer-${customer.id}-name`}
      aria-describedby={`customer-${customer.id}-points customer-${customer.id}-transactions`}
    >
      <header className="customer-header">
        <div className="customer-info">
          <h4 id={`customer-${customer.id}-name`}>{customer.name}</h4>
          <p className="customer-email" aria-label={`Email address: ${customer.email}`}>
            {customer.email}
          </p>
        </div>
        
        <div 
          className="points-summary" 
          id={`customer-${customer.id}-points`}
          aria-label={`Rewards information for ${customer.name}`}
        >
          <span 
            className="points-number"
            aria-label={`${displayPoints} reward points`}
          >
            {displayPoints}
          </span>
          <span className="points-label">
            {selectedMonth === 'all' ? 'Total Points' : `${selectedMonth}`}
          </span>
        </div>
      </header>

      {selectedMonth !== 'all' && (
        <div className="rewards-info">
          <div 
            className="total-points-small"
            aria-label={`Total all time: ${totalRewards} points`}
          >
            Total All Time: {totalRewards} points
          </div>
        </div>
      )}

      <div id={`customer-${customer.id}-transactions`}>
        <TransactionList 
          transactions={displayTransactions}
          title={selectedMonth === 'all' ? 'All Transactions' : `Transactions for ${selectedMonth}`}
          customerId={customer.id}
          customerName={customer.name}
        />
      </div>
    </article>
  );
}

export default CustomerCard;
