import React from 'react';
import { Hotel } from '../../Model';
import Icon from "@mdi/react"
import { mdiDelete, mdiPencil } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import './Hotel.css';

interface Props {
    i: number;
    index: number;
    item: Hotel;
    handleDelete: (id: number, chainID: number) => void;
    handleEdit: (id: number, name: string, city: string, address: string, country: string, rank: number, hotelID: number, chainID: number) => void;
    startHandleEdit: (chain: number, hotel: number) => void;
}

const Hotels: React.FC<Props> = (props) => {
    const { item, handleDelete, handleEdit, i, index, startHandleEdit } = props;
    const navigate = useNavigate();

    return (
        <><div className="hotel">
            <div className="props">
                <h1>{item.name}</h1>
                <p><b>Location: </b>{item.city}, {item.country}</p>
                <p><b>Address: </b>{item.address}</p>
                <p><b>Rank: </b>{item.rank} / 5</p>
            </div>
            <div className="p-btns">
                <button type='button' className='p-btn' onClick={() => { handleEdit(item.id, item.name, item.city, item.address, item.country, item.rank, i, index); navigate("/addHotel"); }}>
                    <Icon
                        path={mdiPencil}
                        size={1}
                        color="green"
                    /></button>
                <button type='button' className='p-btn' onClick={() => handleDelete(i, index)}>
                    <Icon
                        path={mdiDelete}
                        size={1}
                        color="red"
                    /></button>
            </div>
        </div></>
    )
}

export default Hotels;
