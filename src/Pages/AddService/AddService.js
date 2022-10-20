import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://genius-car-server-w5a6.onrender.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return (
        <div className='container py-5'>
            <h2>Please add a service.</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='py-3 w-50 mx-auto d-flex flex-column '>
                <input className='mb-3 p-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3 p-2' placeholder='Description' {...register("description")} />
                <input className='mb-3 p-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3 p-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='p-2' type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;