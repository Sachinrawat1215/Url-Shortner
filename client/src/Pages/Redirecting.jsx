import React from 'react'
import { sendId } from '../Service/api';
import { useParams } from 'react-router-dom';

const Redirecting = () => {
    const { id } = useParams();

    const redirect = async () => {
        try {
            let data = await sendId(id);
            window.location.href = data.data[0].url;
        } catch (error) {
            console.log(error);
        }
    }

    redirect();

    return (
        <div className='redirecting-container'>
        </div>
    )
};

export default Redirecting;