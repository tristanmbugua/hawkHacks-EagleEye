import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Deposit from './pages/Deposit.tsx';
import Menu from './pages/Menu.tsx';
import Withdrawal from './pages/Withdrawal.tsx';
import AddUser from './pages/AddUser.tsx';
import RemoveUser from './pages/RemoveUser.tsx'
import Transactions from './pages/Transactions.tsx';
import View from './pages/Balance.tsx';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
      <br/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addUser" element={<AddUser/>}/>
          <Route path="/removeUser" element={<RemoveUser/>}/>
          <Route path="/deposit" element={<Deposit/>}/>
          <Route path="/view" element={<View/>}/>
          <Route path="/withdrawal" element={<Withdrawal/>}/>
          {/* <Route path="/viewAll" element={}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}