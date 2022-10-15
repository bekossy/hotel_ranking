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
    hotel: Hotel[];
    handleDelete: (id: number) => void;
    handleEdit: (id: number, name: string, city: string, address: string, country: string, rank: number) => void;
}

const HomePage: React.FC<Props> = (props) => {
    const { addChain, setAddChain, handleChain, list, deleteChain, editChainFlag, editChain, hotel, handleDelete, handleEdit } = props
    return (
        <section className='container'>
            <AddChain addChain={addChain} setAddChain={setAddChain} handleChain={handleChain} editChainFlag={editChainFlag} />
            <Layout list={list} deleteChain={deleteChain} editChain={editChain} hotel={hotel} handleDelete={handleDelete} handleEdit={handleEdit} />
        </section>
    )
}

export default HomePage
