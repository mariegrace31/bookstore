/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function Chapter() {
  return (
    <>
      <div className="complited-container">
        <span className="line" />
        <div className="chapter-container">
          <h2 className="current">current chapter</h2>
          <h1 className="chapter">chapter:3 " A Lesson Learned "</h1>
          <div className="update">
            <p className="update-content">UPDATE PROGRESS</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chapter;
