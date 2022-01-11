import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './HostPage.css'

function HostPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [numberRooms, setNumberRooms] = useState(0);
  const [maxGuest, setMaxGuest] = useState(null);
  const [hasWifi, setHasWifi] = useState(null);
  const [hasAc, setHasAc] = useState(null);
  const [hasFreeParking, setHasFreeParking] = useState(null);
  const [pricePerNight, setPricePerNight] = useState(0);
  const [link, setLink] = useState("");

  if (!sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (password === confirmPassword) {
    //   setErrors([]);
    //   return dispatch(sessionActions.signup({ email, username, password, firstName, lastName }))
    //     .catch(async (res) => {
    //       const data = await res.json();
    //       if (data && data.errors) setErrors(data.errors);
    //     });
    // }
    // return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div >
        <div >
          <h1 >Tell Us About Your Place</h1>
          {/* <ul className="errors">
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul> */}
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              />
          </label>
          <label>
            Description
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              />
          </label>
          <label>
            Address
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
            State
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              />
          </label>
          <label>
            Zipcode
            <input
              type="text"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              required
              />
          </label>
          <label>
            Number of Rooms
            <input
              type="number"
              value={numberRooms}
              onChange={(e) => setNumberRooms(e.target.value)}
              required
              />
          </label>
          <label>
            Max Guests
            <input
              type="number"
              value={maxGuest}
              onChange={(e) => setMaxGuest(e.target.value)}
              required
              />
          </label>
          <label>
            Has Wifi
            <input
              type="checkbox"
              value={hasWifi}
              onChange={(e) => setHasWifi(e.target.value)}
              required
              />
          </label>
          <label>
            Has A/C
            <input
              type="checkbox"
              value={hasAc}
              onChange={(e) => setHasAc(e.target.value)}
              required
              />
          </label>
          <label>
            Has Free Parking
            <input
              type="checkbox"
              value={hasFreeParking}
              onChange={(e) => setHasFreeParking(e.target.value)}
              required
              />
          </label>
          <label>
            Price Per Night
            <input
              type="text"
              value={pricePerNight}
              onChange={(e) => setPricePerNight(e.target.value)}
              required
              />
          </label>
          <label>
            Photo URL
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
