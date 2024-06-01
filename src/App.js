import './App.css';
import MainShoppingPage from './Components/Shopping/MainShoppingPage';
import React, { useState } from 'react';
import MainOrderPage from './Components/YourOrder/MainOrderPage';

function App() {

  const [cartItems, setCartItems] = useState([
    {
        orderName: 'PWM Speed Control',
        itemCategory: 'Category/Tags',
        orderPrice: 1399,
        image: {
            src: 'https://images.theengineeringprojects.com/image/webp/2021/06/What-products-in-life-use-printed-circuit-boards.png.webp?ssl=1',
            alt: 'Items'
        },
        qty: 0
    },
    {
        orderName: 'Airpods Max Silver',
        itemCategory: '#312312312',
        orderPrice: 549,
        image: {
            src: 'https://images.theengineeringprojects.com/image/webp/2021/06/What-products-in-life-use-printed-circuit-boards.png.webp?ssl=1',
            alt: 'Items'
        },
        qty: 0
    },
    {
        orderName: 'Apple Watch Series 9',
        itemCategory: '#312312312',
        orderNo: 3243434234,
        orderPrice: 323,
        image: {
            src: 'https://images.theengineeringprojects.com/image/webp/2021/06/What-products-in-life-use-printed-circuit-boards.png.webp?ssl=1',
            alt: 'Items'
        },
        qty: 0
    }
]);

const [subtotal,] = useState(238);
const [tax,] = useState(50);
const [ship,] = useState(29);
const [total,] = useState(2935);

  return (
    <div>
     <MainShoppingPage cartItems={cartItems} setCartItems={setCartItems} subtotal={subtotal} tax={tax} ship={ship} total={total}/>
     {/* <MainOrderPage cartItems={cartItems} setCartItems={setCartItems} subtotal={subtotal} tax={tax} ship={ship} total={total}/> */}

    </div>
  );
}

export default App;
