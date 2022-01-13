import { csrfFetch } from './csrf';
import { useHistory } from 'react-router-dom';

const ADD_ONE = 'rooms/ADD_ONE';
const LOAD = 'rooms/LOAD';
const DELETE_ONE = 'rooms/DELETE_ONE'

const load = list => ({
    type: LOAD,
    list,
})

const addOneRoom = room => ({
    type: ADD_ONE,
    room,
})

const deleteRoom = id => ({
  type: DELETE_ONE,
  id,
})


export const deleteARoom = (roomId) => async dispatch => {
  console.log(roomId)
  const response = await csrfFetch(`/api/rooms/${roomId}`, {
    method: `DELETE`,
  })

  if (response.ok){
    const deletedRoom = await response.json();
    dispatch(deleteRoom(deletedRoom));

  }
  return;
}

export const editRoomForm = (roomId, payload)=> async dispatch => {

  const response = await csrfFetch(`/api/rooms/${roomId}`, {
    method: 'PUT',
    headers:{'Content-Type' : 'application/json'},
    body: JSON.stringify({...payload, ...roomId})
  })
  if(response.ok){
    const newRoom = await response.json();
    dispatch(addOneRoom(newRoom))
    return newRoom;
  }
}

export const createRoomForm = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/rooms`, {
        method: `POST`,
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(payload)
    })

    if (response.ok){
        const data = await response.json();
        dispatch(addOneRoom(data))
        return data;
    }
}

export const getRooms = () => async dispatch =>{

  const response = await csrfFetch(`/api/rooms`);

  if(response.ok){
        const list = await response.json();
        dispatch(load(list));
    }
  return;
}



const initialState = {
    list:[]
}


const roomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
          const allRooms = {};
          action.list.forEach(room => {
            allRooms[room.id] = room;
          });
          return {
            ...allRooms,
            ...state,
            list: action.list,
          };
        }case DELETE_ONE: {
            const newState = { ...state };
            delete newState[action.roomId];
            return newState;
          }
        case ADD_ONE: {
          if (!state[action.room.id]) {
            const newState = {
              ...state,
              [action.room.id]: action.room
            };
            const roomList = newState.list.map(id => newState[id]);
            roomList.push(action.room);
            return newState;
          }
          return {
            ...state,
            [action.room.id]: {
              ...state[action.room.id],
              ...action.room,
            }
          };
        }

        default:
          return state;
      }
}


export default roomsReducer;
