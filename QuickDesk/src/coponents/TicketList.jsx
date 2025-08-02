import React, { useContext } from 'react';
import { TicketContext } from '../context/TicketContext';
import './TicketList.css';

const TicketList = () => {
  const { tickets, upvote, downvote } = useContext(TicketContext);

  return (
    <div className="ticket-list">
      {tickets.map(ticket => (
        <div key={ticket.id} className="ticket">
          <span>{ticket.subject} ({ticket.category}) - {ticket.status}</span>
          <div className="actions">
            <button onClick={() => upvote(ticket.id)} className="action-btn upvote">Up</button>
            <button onClick={() => downvote(ticket.id)} className="action-btn downvote">Down</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketList;