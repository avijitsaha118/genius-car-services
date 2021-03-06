import React from 'react';
import expert1 from '../../../Images/experts/expert-1.jpg';
import expert2 from '../../../Images/experts/expert-2.jpg';
import expert3 from '../../../Images/experts/expert-3.jpg';
import expert4 from '../../../Images/experts/expert-4.jpg';
import expert5 from '../../../Images/experts/expert-5.jpg';
import expert6 from '../../../Images/experts/expert-6.png';
import Expert from '../Expert/Expert';
const Experts = () => {
    const experts = [
        { id: 1, name: 'will', img: expert1 },
        { id: 2, name: 'rock', img: expert2 },
        { id: 3, name: 'mrix', img: expert3 },
        { id: 4, name: 'walt', img: expert4 },
        { id: 5, name: 'dalt', img: expert5 },
        { id: 6, name: 'nik', img: expert6 },
    ]
    return (
        <div id="experts" className='container'>
            <h2 className='text-primary text-center mt-3'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }

            </div>
        </div>
    );
};

export default Experts;