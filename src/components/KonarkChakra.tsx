import React from 'react';

const KonarkChakra: React.FC = () => {
  return (
    <div>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" stroke="var(--gold)" strokeWidth="4" />
        <circle cx="100" cy="100" r="80" stroke="var(--saffron)" strokeWidth="2" strokeDasharray="5 5" />
        <text x="100" y="105" textAnchor="middle" fill="var(--cream)" fontSize="16">Konark Chakra</text>
      </svg>
    </div>
  );
};

export default KonarkChakra;
