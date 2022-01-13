import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {useParams} from 'react-router-dom'
import { editRoomForm } from "../../store/rooms";

function EditForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    const {roomId} = useParams();

    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newCity, setNewCity] = useState("");
    const [newState, setNewState] = useState("");
    const [newZipcode, setNewZipcode] = useState("");
    const [newNumberRooms, setNewNumberRooms] = useState(0);
    const [newMaxGuest, setNewMaxGuest] = useState("");
    const [newHasWifi, setNewHasWifi] = useState(false);
    const [newHasAc, setNewHasAc] = useState(false);
    const [newHasFreeParking, setNewHasFreeParking] = useState(false);
    const [newPricePerNight, setNewPricePerNight] = useState(0);
    const [newLink, setNewLink] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId: sessionUser.id,
            newName,
            newDescription,
            newAddress,
            newCity,
            newState,
            newZipcode,
            newNumberRooms,
            newMaxGuest,
            newHasWifi,
            newHasAc,
            newHasFreeParking,
            newPricePerNight,
            newLink,
        }

        let updatedRoom = await dispatch(editRoomForm(roomId, payload))
        if (updatedRoom) {
            history.push(`/rooms`);
        }


    }





    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>
                    Update your information.
                </h1>
                {/* <ul className="errors">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul> */}
                <label>
                    Name:
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        required
                    />

                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                        required
                    />
                </label>
                <label>
                    City
                    <input
                        type="text"
                        value={newCity}
                        onChange={(e) => setNewCity(e.target.value)}
                        required
                    />
                </label>
                <label>
                    State:
                    <input
                        type="text"
                        value={newState}
                        onChange={(e) => setNewState(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Zipcode:
                    <input
                        type="text"
                        value={newZipcode}
                        onChange={(e) => setNewZipcode(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Number of Rooms:
                    <input
                        type="number"
                        value={newNumberRooms}
                        onChange={(e) => setNewNumberRooms(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Max Guests:
                    <input
                        type="number"
                        value={newMaxGuest}
                        onChange={(e) => setNewMaxGuest(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Has Wifi:
                    <input
                        className="wifi"
                        type="checkbox"
                        value="true"
                        onChange={(e) => setNewHasWifi(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Has A/C:
                    <input
                        className="ac"
                        type="checkbox"
                        value="true"
                        onChange={(e) => setNewHasAc(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Has Free Parking:
                    <input
                        className="parking"
                        type="checkbox"
                        value="true"
                        onChange={(e) => setNewHasFreeParking(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Price Per Night:
                    <input
                        type="text"
                        value={newPricePerNight}
                        onChange={(e) => setNewPricePerNight(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Photo URL:
                    <input
                        type="text"
                        value={newLink}
                        onChange={(e) => setNewLink(e.target.value)}
                        required
                    />
                </label>
                <button className='submit-edit-button' type="submit">Host</button>
            </div>
        </form>
    )

}

export default EditForm;
