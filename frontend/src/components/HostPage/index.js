
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './HostPage.css'
import {useEffect, useState} from 'react';
import { createRoomForm } from "../../store/rooms";
import { useHistory } from 'react-router-dom';


function HostPage() {

  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  // const rooms = useSelector((state) => state.rooms.list);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [numberRooms, setNumberRooms] = useState(0);
  const [maxGuest, setMaxGuest] = useState("");
  const [hasWifi, setHasWifi] = useState(false);
  const [hasAc, setHasAc] = useState(false);
  const [hasFreeParking, setHasFreeParking] = useState(false);
  const [pricePerNight, setPricePerNight] = useState(0);
  const [link, setLink] = useState("");
  const [errors, setErrors] = useState([]);



  // useEffect(() => {
  //   dispatch(addOneRoom());
  // }, [dispatch]);


  // if (!sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();



    const payload = {
        userId: sessionUser.id,
        name,
        description,
        address,
        city,
        state,
        zipcode,
        numberRooms,
        maxGuest,
        // hasWifi,
        // hasAc,
        // hasFreeParking,
        pricePerNight,
        link,
    }

    setErrors([])
    let newRoom = await dispatch(createRoomForm(payload))
      .catch(async(res)=>{
        const data = await res.json()
        if (data && data.errors) return setErrors(data.errors)
      })
    if (newRoom){
        history.push(`/rooms`)
    }
  };

  return (
    <form className="host-form" onSubmit={handleSubmit}>
      <div className="host-parent-div">
        <div >
          <h1 className="host-h1">Tell Us About Your Place.</h1>
          <ul className="errors">
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              />
          </label>
          <label>
            City
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              />
          </label>
          <label>
            State:
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              />
          </label>
          <label>
            Zipcode:
            <input
              type="text"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              required
              />
          </label>
          <label>
            Number of Rooms:
            <input
              type="number"
              value={numberRooms}
              onChange={(e) => setNumberRooms(e.target.value)}
              required
              />
          </label>
          <label>
            Max Guests:
            <input
              type="number"
              value={maxGuest}
              onChange={(e) => setMaxGuest(e.target.value)}
              required
              />
          </label>
          {/* <label>
            Has Wifi:
            <input
              className="wifi"
              type="checkbox"
              value="true"
              onChange={(e) => setHasWifi(e.target.value)}
              required
              />
          </label>
          <label>
            Has A/C:
            <input
              className="ac"
              type="checkbox"
              value="true"
              onChange={(e) => setHasAc(e.target.value)}
              required
              />
          </label>
          <label>
            Has Free Parking:
            <input
              className="parking"
              type="checkbox"
              value="true"
              onChange={(e) => setHasFreeParking(e.target.value)}
              required
              />
          </label> */}
          <label>
            Price Per Night:
            <input
              type="text"
              value={pricePerNight}
              onChange={(e) => setPricePerNight(e.target.value)}
              required
              />
          </label>
          <label>
            Photo URL:
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
              />
          </label>
          <button className='submit-button' type="submit">Host</button>
        </div>
      </div>
    </form>
  );
}

export default HostPage;
