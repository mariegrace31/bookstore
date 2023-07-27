import React, { useState } from 'react';
import Books from './ListBooks';
import AddBook from './AddBook';

function Home() {
  const [books] = useState([
    {
      id: 1,
      title: 'the hunger games',
      author: 'suzanne collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'capital in the twenty-first century',
      author: 'suzanne collins',
    },
  ]);
  return (
    <>
      <div>
        <Books books={books} />
        <AddBook />
      </div>
    </>
  );
}

export default Home;
