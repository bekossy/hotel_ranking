import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import { Chain, Hotel } from './Model';

function App() {
  const [chain, setChain] = useState<Chain[]>([]);
  const [addChain, setAddChain] = useState<string>("");
  const [editChainFlag, setEditChainFlag] = useState<boolean>(false);
  const [editID, setEditID] = useState<number>(0);
  const [hotel, setHotel] = useState<Hotel[]>([]);

  const handleChain = (e: React.FormEvent) => {
    e.preventDefault();

    if (addChain && !editChainFlag) {
      const add = { id: Date.now(), chain: addChain };
      setChain([...chain, add]);
      setAddChain("");
      setEditChainFlag(false);
    }
    else if (addChain && editChainFlag) {
      setChain(chain.map((item) => {
        if (item.id === editID) {
          return { ...item, chain: addChain };
        }
        return item;
      }))
      setEditChainFlag(false);
      setAddChain("");
      setEditID(0);
    }
  }

  const deleteChain = (id: number) => {
    const remove = chain.filter((chain) => chain.id !== id);
    setChain(remove);
  }
  const editChain = (id: number, text: string) => {
    setEditID(id);
    setAddChain(text);
    setEditChainFlag(true);
  }


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={
            <HomePage
              addChain={addChain}
              setAddChain={setAddChain}
              handleChain={handleChain}
              chain={chain}
              deleteChain={deleteChain}
              editChain={editChain}
              editChainFlag={editChainFlag}
            />
          } />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
