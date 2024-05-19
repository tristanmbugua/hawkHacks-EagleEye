import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  backgroundColor: '#FFDAB9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
  margin: '2rem auto',
};

const titleStyle = {
  fontSize: '1.5rem',
  color: '#00CED1',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

const readOnlyInputStyle = {
    padding: '0.75rem',
    margin: '0.5rem 0',
    border: '1px solid #FFDAB9',
    borderRadius: '4px',
    fontSize: '1rem',
    backgroundColor: '#FFDAB9',
    color: 'turquoise',
    cursor: 'not-allowed',
  };
  
  const balanceTextStyle={
    color: 'turquoise',
  };

const Withdrawal = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [name,setName] = useState('')
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState();
  const [transactionType, setTransactionType] = useState('Withdrawal');

  const handleWithdrawal = async (e) => {
    e.preventDefault();
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{name}, How can we help you today?</h1>
      <h1 style={titleStyle}>Account Overview</h1>
      <p style={balanceTextStyle}>Account Balance:</p>
      <input
        type="text"
        value={'$'}
        readOnly
        style={readOnlyInputStyle}
      />
      <form style={formStyle} onSubmit={handleWithdrawal}>
        <select
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
          style={{
            padding: '0.75rem',
            margin: '0.5rem 0',
            border: '1px solid #ced4da',
            borderRadius: '4px',
            fontSize: '1rem',
          }}
        >
          <option value="Withdrawal">Withdrawal</option>
          <option value="Deposit">Deposit</option>
          <option value="Transactions">Transactions</option>
        </select>

        <button
          type="submit"
          style={{
            padding: '0.75rem',
            margin: '0.5rem 0',
            backgroundColor: '#00CED1',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Withdrawal;
