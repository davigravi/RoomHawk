import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../store/rooms";
import './Rooms.css';
import {deleteARoom} from "../../store/rooms";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Rooms () {

    const dispatch = useDispatch();
    const history = useHistory();

    const rooms = useSelector(state=>state.rooms.list);

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(deleteARoom(e.target.value))
            .then(history.push("/rooms"))
            .catch(async (res)=> {
                throw new Error ("Unable to delete spot.")
            })
    }

    useEffect(()=>{
        dispatch(getRooms());
    }, [dispatch])


    return(

        <div className="parent-div">
             <h2>Rooms</h2>
                {rooms.map((room)=>
                <div key={room.id} id={room.id}>
                    <h3 className="room-name">{room.name}</h3>
                    <ul className="content">
                        <li className="description">{room.description}</li>
                        <div className="middle">
                            <li>{room.address}</li>
                            <li>{`${room.city}, ${room.state}`}</li>
                            <li>{room.zipcode}</li>
                            <li>{room.numberRooms} Rooms</li>
                            <li>Max Guest: {room.maxGuest}</li>
                            <li>Price Per Night: {room.pricePerNight}</li>
                            <button value={room.id} key={room.id} onClick={handleDelete}>Delete</button>
                        </div>
                        <img className="image" src={`${room.link}`}></img>
                    </ul>
                </div>
                )}
        </div>
    )
}



export default Rooms;
