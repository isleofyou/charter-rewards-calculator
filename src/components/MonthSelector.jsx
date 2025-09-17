function MonthSelector({ months, selectedMonth, onMonthChange }) {
  const formatMonth = (month) => {
    const date = new Date(month + '-01');
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <div className="month-selector" role="group" aria-label="Month filter controls">
      <label 
        htmlFor="month-select"
        id="month-select-label"
      >
        View rewards for:
      </label>
      <select 
        id="month-select"
        value={selectedMonth} 
        onChange={(e) => onMonthChange(e.target.value)}
        className="month-dropdown"
        aria-labelledby="month-select-label"
        aria-describedby="month-select-description"
      >
        <option value="all">All Time</option>
        {months.map(month => (
          <option key={month} value={month}>
            {formatMonth(month)}
          </option>
        ))}
      </select>
      <div 
        id="month-select-description" 
        className="sr-only"
      >
        Filter customer rewards by time period. Choose All Time to see total rewards or select a specific month.
      </div>
    </div>
  );
}

export default MonthSelector;
