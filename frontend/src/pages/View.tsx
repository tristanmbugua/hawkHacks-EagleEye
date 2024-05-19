import React, { useState } from 'react';

const App = () => {
    const [balance, setBalance] = useState(''); // Empty initial balance
    const [transactionAmount, setTransactionAmount] = useState('');
    const [transactionType, setTransactionType] = useState('deposit'); // Default to deposit

    return (
        <div className="container">
            <h1 style={{ color: '#333', textAlign: 'center' }}>Account Balance</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                <h2 style={{ marginRight: '10px' }}>Current Balance:</h2>
                <h2 style={{ color: 'green' }}>{balance ? `$${parseFloat(balance).toFixed(2)}` : 'N/A'}</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <input
                    type="number"
                    placeholder="Enter amount"
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}
                    style={{ padding: '10px', marginBottom: '10px' }}
                />
                <select
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                    style={{ padding: '10px', marginBottom: '10px' }}
                >
                    <option value="deposit">Deposit</option>
                    <option value="withdrawal">Withdrawal</option>
                </select>
                <button style={{ padding: '10px', backgroundColor: '#00CED1', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Process Transaction
                </button>
            </div>
        </div>
    );
};

export default App;