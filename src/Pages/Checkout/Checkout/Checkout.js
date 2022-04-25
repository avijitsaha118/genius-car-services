import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    // if(user){
    //     console.log(user);
    // }

    // const [user, setUser] = useState({
    //     name: 'ab',
    //     email: 'ab@momo.com',
    //     address: 'bd',
    //     phone: '01700022222'
    // });
    // const handleAddressChange = event => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     console.log(newUser);
    //     setUser(newUser);
    // }
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('your order is booked!');

                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order Your Booking and Checkout :{service.name} </h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled></input>
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled></input>
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly></input>
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required></input>
                {/* <input className='w-100 mb-2' type="text" onChange={handleAddressChange} value={user.address} name="address" placeholder='address' required></input> */}
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required></input>
                <br />
                <input className='btn btn-primary' type='submit' value='Place Order'></input>
            </form>
        </div>
    );
};

export default Checkout;