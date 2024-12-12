import React from 'react';

const Pagination = ({ activePage, setActivePage, pageSize }) => {
  const totalPages = Math.ceil(100 / pageSize); // Assuming 100 projects for now

  return (
    <div className="pagination">
      <button
        disabled={activePage === 1}
        onClick={() => setActivePage(activePage - 1)}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={activePage === i + 1 ? 'active' : ''}
          onClick={() => setActivePage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        disabled={activePage === totalPages}
        onClick={() => setActivePage(activePage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;