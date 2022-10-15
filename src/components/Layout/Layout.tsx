import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Chain, Hotel } from '../../Model';
import Hotels from '../Hotel/Hotel';
import './Layout.css';

interface Props {
    list: Chain[];
    deleteChain: (id: number) => void;
    editChain: (id: number, text: string) => void;
    hotel: Hotel[];
    handleDelete: (id: number) => void;
    handleEdit: (id: number, name: string, city: string, address: string, country: string, rank: number) => void;
}

const Layout: React.FC<Props> = (props) => {
    const { list, deleteChain, editChain, hotel, handleDelete, handleEdit } = props;
    const navigate = useNavigate();
    return (
        <><section className='layout'>
            {list.length
                ? <div>{list.map((layout) => {

                    return <>
                        <div className="chainLayout" key={layout.id}>
                            <div className="layoutTop" >
                                <h2>{layout.chain}</h2>

                                <div className="btns">
                                    <button type='button' className='btn' onClick={() => editChain(layout.id, layout.chain)}>Edit {layout.chain}</button>
                                    <button type='button' className='btn' onClick={() => deleteChain(layout.id)}>Delete {layout.chain}</button>
                                    <button type='button' className='btn' onClick={() => navigate("/addHotel")}>Add Hotel</button>
                                </div>

                            </div>
                            <div className="hotels">
                                {hotel.length ? hotel.map((item) => {
                                    return <Hotels key={item.id} item={item} handleDelete={handleDelete} handleEdit={handleEdit} />
                                }) : <span>Add a hotel to chain</span>}
                            </div>
                        </div>
                    </>
                })}</div>
                : <p className='noChains'>No chains avaiable</p>}
        </section></>
    )
}

export default Layout
