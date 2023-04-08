import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../Tshirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
            {
                tshirts.map(tshirt => <TShirt
                    key={tshirt._id}
                    tshirt={tshirt} />)
            }
            </div>
            <div className="cart-container">
                <Cart/>
            </div>
        </div>
    );
};

export default Home;