function TransactionList({ transactions, title, customerId, customerName }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const listId = customerId ? `transactions-${customerId}` : 'transactions-list';
  const headingId = customerId ? `transactions-heading-${customerId}` : 'transactions-heading';

  if (transactions.length === 0) {
    return (
      <section className="transaction-list" aria-labelledby={headingId}>
        <h5 id={headingId}>{title}</h5>
        <p 
          className="no-transactions"
          role="status"
          aria-label={`No transactions found for ${customerName || 'this customer'}`}
        >
          No transactions found
        </p>
      </section>
    );
  }

  return (
    <section className="transaction-list" aria-labelledby={headingId}>
      <h5 id={headingId}>{title}</h5>
      <ul 
        className="transactions"
        id={listId}
        aria-label={`${transactions.length} transactions for ${customerName || 'customer'}`}
      >
        {transactions.map((transaction, index) => (
          <li 
            key={transaction.id} 
            className="transaction-item"
            aria-label={`Transaction ${index + 1} of ${transactions.length}`}
          >
            <div className="transaction-main">
              <span 
                className="transaction-description"
                aria-label={`Purchase description: ${transaction.description}`}
              >
                {transaction.description}
              </span>
              <span 
                className="transaction-amount"
                aria-label={`Amount spent: ${formatCurrency(transaction.amount)}`}
              >
                {formatCurrency(transaction.amount)}
              </span>
            </div>
            <div className="transaction-details">
              <span 
                className="transaction-date"
                aria-label={`Transaction date: ${formatDate(transaction.date)}`}
              >
                {formatDate(transaction.date)}
              </span>
              {transaction.points !== undefined && (
                <span 
                  className="transaction-points"
                  aria-label={`Reward points earned: ${transaction.points} points`}
                >
                  {transaction.points} pts
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TransactionList;
