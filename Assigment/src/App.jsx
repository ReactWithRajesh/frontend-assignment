import { useState } from 'react'
import './style.css'
import Table from './Table';
import Pagination from './Pagination';

function App() {
  const ITEMS_PER_PAGE = 5;
  const [activePage,setActivePage]=useState(1)

  return (
    <div className="app">
    <Table activePage={activePage} pageSize={ITEMS_PER_PAGE} />
    <Pagination
      activePage={activePage}
      setActivePage={setActivePage}
      pageSize={ITEMS_PER_PAGE}
    />
  </div>
  )
}

export default App
