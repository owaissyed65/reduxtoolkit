import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from 'react-icons/all.js'
import { removeUser } from '../Store/Slice/userSlice';
const DisplayUser = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => { return state.userSlice });
    console.log(data)
    const deleteData = (id) => {
        dispatch(removeUser(id));
    }
    return (
        <>
            {
                data.map((value, id) => {
                    return (
                        <li key={id}>{value}
                            <button className='btn btn-delete' onClick={() => { deleteData(id) }}><MdDeleteForever className='delete-icon' /></button>
                        </li>
                    )
                })
            }
        </>
    )
}

export default DisplayUser
