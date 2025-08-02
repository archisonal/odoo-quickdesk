export const useQuantumFlow = (ticket) => {
  let state = ticket.quantumState || 0.5;
  state -= (Date.now() - (ticket.lastUpdate || Date.now())) / 100000000; // Time decay
  state += ticket.replies * 0.05; // Reply boost
  return Math.max(0, Math.min(1, state));
};