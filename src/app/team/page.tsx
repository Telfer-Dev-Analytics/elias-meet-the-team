// app/team/page.tsx

import React from 'react';
import Team from '../components/Team'; // Adjust the import path as necessary

const TeamPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">Meet The Team</h1>
      <Team />  {/* Include the Team component here */}
    </div>
  );
};

export default TeamPage;
