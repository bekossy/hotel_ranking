import React, { useState } from 'react';
import { Chain } from '../../Model';
import './Layout.css';

interface Props {
    chain: Chain[];
    deleteChain: (id: number) => void;
    editChain: (id: number, text: string) => void
}

const Layout: React.FC<Props> = (props) => {
    const [test, setTest] = useState<boolean>(false)
    const { chain, deleteChain, editChain } = props
    return (
        <><section className='layout'>
            {chain.length
                ? <div>{chain.map((layout) => {
                    return <>
                        <div className="chainLayout" key={layout.id}>
                            <div className="layoutTop" >
                                <h2>{layout.chain}</h2>

                                <div className="btns">
                                    <button type='button' className='btn' onClick={() => editChain(layout.id, layout.chain)}>Edit {layout.chain}</button>
                                    <button type='button' className='btn' onClick={() => deleteChain(layout.id)}>Delete {layout.chain}</button>
                                    <button type='button' className='btn'>Add Hotel</button>
                                </div>

                            </div>
                            <div className="hotels">
                                {test ? "" : <span>Add a hotel to chain</span>}
                            </div>
                        </div>
                    </>
                })}</div>
                : <p>No chains avaiable</p>}
        </section></>
    )
}

export default Layout
