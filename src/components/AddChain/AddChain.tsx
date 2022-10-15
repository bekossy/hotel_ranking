import React from 'react';
import './AddChain.css';

interface Props {
    addChain: string;
    setAddChain: React.Dispatch<React.SetStateAction<string>>;
    handleChain: (e: React.FormEvent) => void;
    editChainFlag: boolean;
}

const AddChain: React.FC<Props> = ({ addChain, setAddChain, handleChain, editChainFlag }) => {
    return (
        <aside>
            <form className='addChain' onSubmit={handleChain}>
                <label htmlFor="addChain">{editChainFlag ? "Edit" : "Add"} Chain</label>
                <input type="text" id='addChain' placeholder='create a hotel chain...' name='addChain' value={addChain} onChange={(e) => setAddChain(e.target.value)} />
                <button type='submit' className='btn'>{editChainFlag ? "Save" : "Enter"}</button>
            </form>
        </aside>
    )
}

export default AddChain
