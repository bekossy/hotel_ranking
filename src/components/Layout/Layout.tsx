import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Chain } from '../../Model';
import Hotels from '../Hotel/Hotel';
import './Layout.css';

interface Props {
    list: Chain[];
    deleteChain: (id: number) => void;
    editChain: (id: number, text: string) => void;
    handleDelete: (id: number, chainID: number) => void;
    handleEdit: (id: number, name: string, city: string, address: string, country: string, rank: number, hotelID: number, chainID: number) => void;
    setNewHotelChain: React.Dispatch<React.SetStateAction<string>>;
    startHandleEdit: (chain: number, hotel: number) => void;
}

const Layout: React.FC<Props> = (props) => {
    const { list, deleteChain, editChain, handleDelete, handleEdit, setNewHotelChain, startHandleEdit } = props;
    const navigate = useNavigate();
    return (
        <><section className='layout'>
            {list.length
                ? <div>{list.map((layout, i) => {

                    return <>
                        <div className="chainLayout" key={layout.id}>
                            <div className="layoutTop" >
                                <h2>{layout.chain}</h2>

                                <div className="btns">
                                    <button type='button' className='b-btn b-edit' onClick={() => editChain(layout.id, layout.chain)}>Edit</button>
                                    <button type='button' className='b-btn b-del' onClick={() => deleteChain(layout.id)}>Delete</button>
                                    <button type='button' className='b-btn b-add' onClick={() => {
                                        setNewHotelChain(layout.chain)
                                        navigate("/addHotel")
                                    }}>Add Hotel</button>
                                </div>

                            </div>
                            <div className="hotels">
                                {layout.hotel.length ? layout.hotel.map((item, index) => {
                                    return <Hotels key={item.id} item={item} handleDelete={handleDelete} handleEdit={handleEdit} i={i} index={index} startHandleEdit={startHandleEdit} />
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
