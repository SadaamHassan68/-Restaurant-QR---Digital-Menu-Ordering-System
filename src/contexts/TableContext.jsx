import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const [tableNumber, setTableNumber] = useState(null);

  useEffect(() => {
    const table = searchParams.get('table');
    if (table) {
      setTableNumber(parseInt(table));
    }
  }, [searchParams]);

  const value = {
    tableNumber,
    setTableNumber
  };

  return (
    <TableContext.Provider value={value}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTable must be used within a TableProvider');
  }
  return context;
}; 