
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function EditFormButton() {
    const dispatch = useDispatch()
    const history = useHistory;
    const sessionUser = useSelector((state)=> state.session.user)
    const rooms = useSelector((state)=>state.rooms)
    const userRooms = rooms.map(room=> room.userId === sessionUser.id);
    console.log(userRooms)


    



}
