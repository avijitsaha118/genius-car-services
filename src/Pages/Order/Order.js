import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                // const { data } = await axios.get(url, {
                //     headers: {
                //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
                //     }
                // });
                setOrders(data);
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrders();
    }, [user])
    return (
        <div>
            <h2>
                Your Order :{orders.length}
            </h2>
        </div>
    );
};

export default Order;