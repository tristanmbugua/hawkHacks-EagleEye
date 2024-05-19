import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Deposit from './pages/Deposit.tsx';
import Menu from './pages/Menu.tsx';
import Withdrawal from './pages/Withdrawal.tsx';
import Transactions from './pages/Transactions.tsx';
import View from './pages/View.tsx';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
      <br/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/deposit" element={<Deposit/>}/>
          <Route path="/withdrawal" element={<Withdrawal/>}/>
          <Route path="/view" element={<View/>}/>
          <Route path="/transactions" element={<Transactions/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}