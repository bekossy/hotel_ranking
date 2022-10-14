import React from 'react';
import Layout from '../Layout/Layout';
import AddChain from '../AddChain/AddChain';
import './HomePage.css';
import { Chain } from '../../Model';

interface Props {
    chain: Chain[];
    addChain: string;
    setAddChain: React.Dispatch<React.SetStateAction<string>>;
    handleChain: (e: React.FormEvent) => void;
    deleteChain: (id: number) => void;
    editChainFlag: boolean;
    editChain: (id: number, text: string) => void;
}

const HomePage: React.FC<Props> = (props) => {
    const { addChain, setAddChain, handleChain, chain, deleteChain, editChainFlag, editChain } = props
    return (
        <section className='container'>
            <AddChain addChain={addChain} setAddChain={setAddChain} handleChain={handleChain} editChainFlag={editChainFlag} />
            <Layout chain={chain} deleteChain={deleteChain} editChain={editChain}/>
        </section>
    )
}

export default HomePage
