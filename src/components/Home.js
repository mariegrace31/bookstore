import React from 'react';
import Books from './ListBooks';
import AddBook from './AddBook';

function Home() {
  return (
    <>
      <div>
        <Books />
        <AddBook />
      </div>
    </>
  );
}

export default Home;
