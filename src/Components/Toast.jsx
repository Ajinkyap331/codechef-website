import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = ({ message, callback }) => {

    toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        onClose: () => callback
    });

    return (
        <ToastContainer />
    )
}
