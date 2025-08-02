import React, { createContext, useState, useEffect } from 'react';
import { quantumFlow } from '../utils/quantumLogic';

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([
    { id: 1, subject: "Login Issue", category: "technical", status: "open", replies: 3, user: "user1", quantumState: 0.7 },
    { id: 2, subject: "Payment Error", category: "billing", status: "in-progress", replies: 1, user: "user2", quantumState: 0.4 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickets(tickets.map(t => ({ ...t, quantumState: quantumFlow(t) })));
    }, 5000);
    return () => clearInterval(interval);
  }, [tickets]);

  const filterTickets = (type) => {
    let filtered = [...tickets];
    if (type === 'mine') filtered = filtered.filter(t => t.user === 'user1');
    else if (type === 'high-coherence') filtered = filtered.filter(t => t.quantumState > 0.5);
    else if (type === 'category') {
      const cat = prompt('Enter Category');
      filtered = filtered.filter(t => t.category === cat);
    }
    setTickets(filtered);
  };

  const sortTickets = (type) => {
    let sorted = [...tickets];
    if (type === 'quantum') sorted.sort((a, b) => b.quantumState - a.quantumState);
    setTickets(sorted);
  };

  const addTicket = (ticket) => {
    setTickets([...tickets, { ...ticket, id: tickets.length + 1, status: 'open', replies: 0 }]);
  };

  const upvote = (id) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, replies: t.replies + 1, quantumState: t.quantumState + 0.1 } : t));
  };

  const downvote = (id) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, replies: Math.max(0, t.replies - 1), quantumState: t.quantumState - 0.1 } : t));
  };

  return (
    <TicketContext.Provider value={{ tickets, filterTickets, sortTickets, addTicket, upvote, downvote }}>
      {children}
    </TicketContext.Provider>
  );
};