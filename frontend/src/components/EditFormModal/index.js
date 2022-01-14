

import {Modal} from '../../context/Modal';
import React, {useState} from 'react';
import EditForm from './EditForm';
import './index.css'


function EditFormModal(){
    const [showEditModal, setShowEditModal] = useState(false);



    return(
        <>
            <button className='edit-button' onClick={()=>setShowEditModal(true)}>Edit</button>
            {showEditModal && (
                <Modal onClose={()=> setShowEditModal(false)}>
                    <EditForm/>
                </Modal>
            )}
        </>
    )
}


export default EditFormModal;
