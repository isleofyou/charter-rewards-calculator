import { useState, useEffect } from 'react';
import { customers, transactions } from '../data';
import { getUniqueMonths, calculateTotalRewards } from '../utils';
import { CustomerCard, MonthSelector } from '.';

function RewardsCalculator() {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const enrichedCustomers = customers.map(customer => ({
          ...customer,
          totalRewards: calculateTotalRewards(transactions, customer.id)
        }));
        
        setCustomerData(enrichedCustomers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRetry = () => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const enrichedCustomers = customers.map(customer => ({
          ...customer,
          totalRewards: calculateTotalRewards(transactions, customer.id)
        }));
        
        setCustomerData(enrichedCustomers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  };

  const forceError = () => {
    setLoading(false);
    setError('Simulated API failure for testing error handling');
  };

  const availableMonths = getUniqueMonths(transactions);

  if (loading) {
    return (
      <div className="loading-container" role="status" aria-live="polite">
        <div 
          className="loading-spinner" 
          aria-hidden="true"
        ></div>
        <p aria-label="Loading customer rewards data, please wait">
          Loading animal care specialist rewards...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container" role="alert" aria-live="assertive">
        <div className="error-icon" aria-hidden="true">⚠️</div>
        <h3 aria-label="Error occurred while loading data">
          Oops! Something went wrong
        </h3>
        <p 
          className="error-message" 
          aria-label={`Technical error details: ${error}`}
        >
          {error}
        </p>
        <p className="error-description">
          We're having trouble connecting to our rewards system. 
          This might be a temporary network issue.
        </p>
        <div className="error-actions" role="group" aria-label="Error recovery options">
          <button 
            className="retry-button" 
            onClick={handleRetry}
            aria-label="Retry loading customer rewards data"
          >
            Try Again
          </button>
          <button 
            className="refresh-button" 
            onClick={() => window.location.reload()}
            aria-label="Refresh the entire page to restart the application"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rewards-calculator" role="application" aria-label="Customer Rewards Calculator">
      <div className="controls" role="toolbar" aria-label="Filter and testing controls">
        <MonthSelector 
          months={availableMonths}
          selectedMonth={selectedMonth}
          onMonthChange={setSelectedMonth}
        />
        <button 
          className="test-error-button"
          onClick={forceError}
          aria-label="Test error handling by simulating a failed API call"
          title="Click to test error handling"
        >
          🧪 Test Error
        </button>
      </div>

      <section className="rewards-summary" aria-label="Customer rewards data">
        <h3 id="summary-heading">Customer Rewards Summary</h3>
        <div 
          className="customers-grid" 
          role="grid" 
          aria-labelledby="summary-heading"
          aria-live="polite"
        >
          {customerData.map(customer => (
            <CustomerCard
              key={customer.id}
              customer={customer}
              transactions={transactions}
              selectedMonth={selectedMonth}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default RewardsCalculator;
