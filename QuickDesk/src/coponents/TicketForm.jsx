import React, { useState, useContext } from 'react';
import { TicketContext } from '../context/TicketContext';
import './TicketForm.css';

const TicketForm = () => {
  const [formData, setFormData] = useState({ subject: '', description: '', category: '' });
  const { addTicket } = useContext(TicketContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTicket({ ...formData, quantumState: 0.5 });
    setFormData({ subject: '', description: '', category: '' });
    document.getElementById('ticketModal').classList.add('hidden');
  };

  return (
    <div id="ticketModal" className="modal hidden">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="input"
            required
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="input"
            required
          />
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="input"
            required
          >
            <option value="">Select Category</option>
            <option value="technical">Technical</option>
            <option value="billing">Billing</option>
            <option value="general">General</option>
          </select>
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" onClick={() => document.getElementById('ticketModal').classList.add('hidden')} className="close-btn">
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;