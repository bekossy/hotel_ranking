import React from 'react';
import Layout from '../Layout/Layout';
import AddChain from '../AddChain/AddChain';
import './HomePage.css';
import { Chain, Hotel } from '../../Model';

interface Props {
    list: Chain[];
    addChain: string;
    setAddChain: React.Dispatch<React.SetStateAction<string>>;
    handleChain: (e: React.FormEvent) => void;
    deleteChain: (id: number) => void;
    editChainFlag: boolean;
    editChain: (id: number, text: string) => void;
    handleDelete: (id: number) => void;
    handleEdit: (id: number, name: string, city: string, address: string, country: string, rank: number) => void;
    setNewHotelChain: React.Dispatch<React.SetStateAction<string>>;
}

const HomePage: React.FC<Props> = (props) => {
    const { addChain, setAddChain, handleChain, list, deleteChain, editChainFlag, editChain, handleDelete, handleEdit, setNewHotelChain } = props
    return (
        <section className='container'>
            <AddChain addChain={addChain} setAddChain={setAddChain} handleChain={handleChain} editChainFlag={editChainFlag} />
            <Layout list={list} deleteChain={deleteChain} editChain={editChain} handleDelete={handleDelete} handleEdit={handleEdit} setNewHotelChain={setNewHotelChain} />
        </section>
    )
}

export default HomePage
