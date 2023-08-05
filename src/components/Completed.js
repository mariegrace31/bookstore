/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

function Completed() {
  return (
    <>
      <div className="main-completed">
        <CircularProgressbar
          value={65}
          className="oval"
          styles={{
            trail: {
              stroke: '#d6d6d6',
              strokeLinecap: 'butt',
              transformOrigin: 'center center',
            },
            path: {
              stroke: '#0290ff',
              strokeLinecap: 'butt',
              transition: 'stroke-dashoffset 0.5s ease 0s',
              transformOrigin: 'center center',
            },
          }}
        />
        <div className="comp-container">
          <h4>64%</h4>
          <p className="complited">Completed</p>
        </div>
      </div>
    </>
  );
}

export default Completed;
