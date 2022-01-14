

import {Modal} from '../../context/Modal';
import React, {useEffect, useState} from 'react';
import EditForm from './EditForm';
import './index.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function EditFormModal(){
    const [showEditModal, setShowEditModal] = useState(false);
    const history = useHistory();

//     useEffect(() => {
//     if(showEditModal === false){
//         history.push('/rooms')
//     }
//   }, [showEditModal]);


    return(
        <>
            <button className='edit-button' onClick={()=>setShowEditModal(true)}>Edit</button>
            {showEditModal && (
                <Modal onClose={()=> setShowEditModal(false)}>
                    <EditForm/>
                </Modal>
            )}
            {!showEditModal && (
                history.push('/rooms')
            )}
        </>
    )
}


export default EditFormModal;
