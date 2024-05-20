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

const AddUser = () => {
  const [user, setUser] = useState('');
  const [amount, setAmount] = useState('');
  
//   const [response, setResponse] = useState();

  const handleWithdrawal = async () => {
    let response;
    try {
        response = await fetch("http://localhost:2999/addUser", {
        method: 'POST',    
        mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: user,
                amount: amount
            })
        });
    } catch(err) {
        alert(err)
    }
    
    // alert("Testing");

    // console.log("working");
    alert(response);

    // if (response.status == 200) {
        
    // } else if(response.status == 404) {

    // } else {

    // }


    // e.preventDefault();
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Add User</h1>
      {/* <p style={balanceTextStyle}>Account Balance:</p>
      <input 
        type="text"
        value= {'$'}
        readOnly
        style={readOnlyInputStyle}
        /> */}
      <form style={formStyle}>
        <input
         type="string"
         placeholder="User"
         value={user}
         onChange={(e) => setUser(e.target.value)} 
         required
         style={{ padding: '0.75rem', margin: '0.5rem 0', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '1rem' }}
        />

        <input
         type="number"
         placeholder="Starting Amount"
         value={amount}
         onChange={(e) => setAmount(e.target.value)} 
         required
         style={{ padding: '0.75rem', margin: '0.5rem 0', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '1rem' }}
        />
        <button onClick={handleWithdrawal} style={{ padding: '0.75rem', margin: '0.5rem 0', backgroundColor: '#00CED1', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1rem', cursor: 'pointer' }}>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
