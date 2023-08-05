import React from 'react';
import Books from './ListBooks';
import AddBook from './AddBook';

function Home() {
  return (
    <>
      <div className="main-container">
        <Books />
        <hr className="line-2" />
        <AddBook />
      </div>
    </>
  );
}

export default Home;
