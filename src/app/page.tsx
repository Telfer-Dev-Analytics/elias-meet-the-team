import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4">This is the default page for the root URL in Next.js using the App Router.</p>
    </div>
  );
};

export default HomePage;
