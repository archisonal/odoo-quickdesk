import React, { useContext } from 'react';
import TicketList from './TicketList';
import TicketForm from './TicketForm';
import UserProfile from './UserProfile';
import { TicketContext } from '../context/TicketContext';
import './Dashboard.css';

const Dashboard = () => {
  const { tickets, filterTickets, sortTickets } = useContext(TicketContext);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h3 className="text-teal-600">Quantum Filters</h3>
        <button onClick={() => filterTickets('mine')} className="btn">My Tickets</button>
        <button onClick={() => filterTickets('high-coherence')} className="btn">High Coherence</button>
        <button onClick={() => filterTickets('category')} className="btn">By Category</button>
        <button onClick={() => sortTickets('quantum')} className="btn">Quantum Priority</button>
      </div>
      <div className="main-content">
        <TicketList />
        <button onClick={() => document.getElementById('ticketModal').classList.remove('hidden')} className="create-btn">
          Create Ticket
        </button>
        <TicketForm />
        <UserProfile />
      </div>
    </div>
  );
};

export default Dashboard;