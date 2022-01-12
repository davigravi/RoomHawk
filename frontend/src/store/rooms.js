
const ADD_ONE = 'rooms/ADD_ONE';
const LOAD = 'rooms/LOAD';


const load = rooms => ({
    type: LOAD,
    rooms,
})

const addOneRoom = room => ({
    type: ADD_ONE,
    room,
})


export const createRoomForm = (payload) => async dispatch => {
    const response = await fetch(`/api/rooms`, {
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
    const response = await fetch(`/api/rooms`);
    if(response.ok){
        const list = await response.json();
        dispatch(load(list));
    }
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
