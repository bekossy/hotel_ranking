import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import "./AddHotel.css";
import { mdiArrowRightCircle } from '@mdi/js';

interface Props {
    editFlag: boolean;
    name: string;
    city: string;
    country: string;
    address: string;
    rank: number;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
    setRank: React.Dispatch<React.SetStateAction<number>>;
    handleSubmit: (e: React.FormEvent) => void;
    modal: boolean;
    modalColor: boolean;
    modalText: string;
    setNewHotelChain: React.Dispatch<React.SetStateAction<string>>;
}

const AddHotel: React.FC<Props> = (props) => {
    const { editFlag, name, city, country, address, rank, setName, setAddress, setCity, setCountry, setRank, handleSubmit, modal, modalColor, modalText, setNewHotelChain } = props;
    const navigate = useNavigate();
    return (
        <>
            <button type='button' className="backBtn" onClick={() => {
                setNewHotelChain("")
                navigate("/")
            }}>
                <Icon path={mdiArrowRightCircle} title="User Profile"
                    size={1}
                    horizontal
                    vertical
                    color="black"
                /> Back To Home
            </button>
            <form className='form' onSubmit={handleSubmit}>
                {modal ? <div className={`modal ${modalColor ? "green" : "red"}`}>{modalText}</div> : ""}
                <h1>{editFlag ? "Edit" : "Add"} a Hotel</h1>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='name of hotel' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="city">City</label>
                <input type="text" name='city' placeholder='enter city' id='city' value={city} onChange={(e) => setCity(e.target.value)} />

                <label htmlFor="country">Country</label>
                <input type="text" name='country' placeholder='enter country' id='country' value={country} onChange={(e) => setCountry(e.target.value)} />

                <label htmlFor="address">Address</label>
                <input type="text" name='address' placeholder='enter address' id='address' value={address} onChange={(e) => setAddress(e.target.value)} />

                <label htmlFor="rank">Enter Hotel Rank(/5): </label>
                <input type="number" name="rank" id="rank" min={0} max={5} value={rank} onChange={(e) => setRank(e.target.valueAsNumber)} />

                <button type="submit" className='btn'>{editFlag ? "Edit" : "Save"}</button>
            </form></>
    )
}

export default AddHotel
