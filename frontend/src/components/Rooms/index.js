import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {Link} from 'react-router-dom';
import { getRooms } from "../../store/rooms";
import './Rooms.css';
// state.rooms.list
function Rooms () {

    const dispatch = useDispatch();

    const rooms = useSelector(state=>state.rooms.list);


    useEffect(()=>{
        dispatch(getRooms());
    }, [dispatch])


    return(

        <div>
             <h2>Rooms</h2>
                {rooms.map((room)=>
                <div key={room.id} id={room.id}>
                    <h3 className="room-name">{room.name}</h3>
                    <ul className="content">
                        <li>{room.description}</li>
                        <li>{room.address}</li>
                        <li>{room.city}</li>
                        <li>{room.state}</li>
                        <li>{room.zipcode}</li>
                        <li>{room.numberRooms} Rooms</li>
                        <li>Max Guest: {room.maxGuest}</li>
                        <li>Price Per Night: {room.pricePerNight}</li>
                        <img className="image" src={`${room.link}`}></img>
                    </ul>
                </div>
                )}
        </div>
    )
}



export default Rooms;
