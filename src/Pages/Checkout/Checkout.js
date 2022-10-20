import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';


const Checkout = () => {
    const { serviceID } = useParams();
    const [service] = useServiceDetail(serviceID);
    const [user] = useAuthState(auth);

    const handlePlaecOrder = event => {
        event.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            service: service.name,
            serviceID: serviceID,
            address: event.target.address.value,
            number: event.target.number.value
        }
        axios.post('https://genius-car-server-w5a6.onrender.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }



    return (
        <div className="container py-5">
            <h2 className="text-center py-1">Please Checkout Your Services.</h2>
            <h3 className="text-center py-1">Service Name : {service.name}</h3>
            <form className='w-50 mx-auto' onSubmit={handlePlaecOrder}>
                <input className='w-100 my-2 p-2 rounded fs-5' type="text" placeholder='Name' value={user.displayName} name='name' required readOnly />
                <br />
                <input className='w-100 my-2 p-2 rounded fs-5' type="email" placeholder='Email' name='email' value={user.email} required readOnly />
                <br />
                <input className='w-100 my-2 p-2 rounded fs-5' type="text" placeholder="Service Name" value={service.name} name='service' required readOnly />
                <br />
                <input className='w-100 my-2 p-2 rounded fs-5' type="text" placeholder='Address' name='address' required />
                <br />
                <input className='w-100 my-2 p-2 rounded fs-5' type="text" placeholder='Mobile Number' name='number' required />
                <br />
                <input className='w-100 my-2 p-2 rounded fs-5 bg-success text-white' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Checkout;