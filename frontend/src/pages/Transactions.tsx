import React from 'react';

const TransactionsList = () => {
    return (
        <div className="container" style={{backgroundColor: "#FFDAB9", padding: '20px'}}>
            <h1 style={{ color:'turquoise',textAlign: 'center', marginBottom: '20px' }}> Transactions List</h1>
            <div className="criteria-container">
                <label htmlFor="sort-by" style={{ color: 'turquoise' }}>Sort By:</label>
                <select id ="sort-by">
                    <option value="date">Date</option>
                    <option value="time">Time</option>
                    <option value="Type of Transaction">TypeofTransaction</option>
                    <option value="amount">Amount</option>
                </select>
            </div>
            <table style={{width: '100%', marginTop: '20px'}}>
                <thead>
                    <tr>
                        <th style={{color:'turquoise',paddingLeft: '20px'}}>Date</th>
                        <th style={{ color:'turquoise',paddingLeft: '20px'}}>Time</th>
                        <th style={{ color:'turquoise',paddingLeft: '20px'}}>Type of Transaction</th>
                        <th style={{ color:'turquoise',paddingLeft: '20px'}}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* This line will populated the transaction*/}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionsList;