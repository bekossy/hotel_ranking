import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import AddHotel from './components/AddHotel/AddHotel';
import { Chain, Hotel } from './Model';


const localStorageList = () => {
  const data = localStorage.getItem("list");
  if (data) {
    return JSON.parse(data)
  }
  else {
    return []
  }
}

function App() {
  const [list, setList] = useState<Chain[]>(localStorageList());
  const [addChain, setAddChain] = useState<string>("");
  const [editChainFlag, setEditChainFlag] = useState<boolean>(false);
  const [editID, setEditID] = useState<number>(0);
  const [hotel, setHotel] = useState<Hotel[]>([]);
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [rank, setRank] = useState<number>(0);
  const [editFlag, setEditFlag] = useState<boolean>(false);
  const [modal, setModal] = useState(false);
  const [modalColor, setModalColor] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleChain = (e: React.FormEvent) => {
    e.preventDefault();

    if (addChain && !editChainFlag) {
      const add: Chain = { id: Date.now(), chain: addChain, hotel: [] };
      setList([...list, add]);
      setAddChain("");
      setEditChainFlag(false);
    }
    else if (addChain && editChainFlag) {
      setList(list.map((item) => {
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
    const remove = list.filter((chain) => chain.id !== id);
    setList(remove);
  }
  const editChain = (id: number, text: string) => {
    setEditID(id);
    setAddChain(text);
    setEditChainFlag(true);
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])

  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 4000);
  }, [modal]);

  hotel.sort(function (a, b) {
    return (b.rank - a.rank);
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && city && country && address && rank && !editFlag) {
      const newHotel: Hotel = { id: Date.now(), name, city, country, address, rank }
      setHotel([...hotel, newHotel]);
      setName("")
      setCity("")
      setCountry("")
      setAddress("")
      setRank(0)
      setEditFlag(false);
      setModal(true);
      setModalColor(true);
      setModalText("successfully added!");
    } else if (name && city && country && address && rank && editFlag) {
      setHotel(hotel.map((item) => {
        if (item.id === editID) {
          return { ...item, name, city, country, address, rank }
        }
        return item;
      }))
      setName("")
      setCity("")
      setCountry("")
      setAddress("")
      setRank(0)
      setEditID(0)
      setEditFlag(false)
      setModal(true);
      setModalColor(true);
      setModalText("value successfully changed!");
    } else {
      setModal(true);
      setModalColor(false);
      setModalText("please enter value");
    }
  }

  const handleDelete = (id: number) => {
    const filtered = hotel.filter((item) => item.id !== id);
    setHotel(filtered);
  }

  const handleEdit = (id: number, name: string, city: string, address: string, country: string, rank: number) => {
    setEditFlag(true);
    setEditID(id);
    setName(name);
    setCity(city);
    setCountry(country);
    setAddress(address);
    setRank(rank);
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
              list={list}
              deleteChain={deleteChain}
              editChain={editChain}
              editChainFlag={editChainFlag}
              hotel={hotel}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          } />
          <Route path='/addHotel' element={list.length ? <AddHotel
            name={name}
            city={city}
            country={country}
            address={address}
            editFlag={editFlag}
            setName={setName}
            setCity={setCity}
            setCountry={setCountry}
            setAddress={setAddress}
            setRank={setRank}
            rank={rank}
            handleSubmit={handleSubmit}
            modal={modal}
            modalColor={modalColor}
            modalText={modalText}
          /> : <Navigate to={"/"} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
