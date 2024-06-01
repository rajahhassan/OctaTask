import { Grid, } from '@mui/material'
import React from 'react'
import { styles } from '../styless';
import ShoppingCart from './ShoppingCart';
import OrderSummary from './OrderSummary';

export default function MainShoppingPage({cartItems, setCartItems, subtotal,tax,ship,total}) {
    return (
        <div>
            <Grid container lg={12} md={12} sm={12} xs={12} sx={styles.main}>
                <Grid item lg={6} md={6} sm={12} xs={12} >
                    <ShoppingCart cartItems={cartItems} setCartItems={setCartItems}/>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12} >
                    <OrderSummary cartItems={cartItems} setCartItems={setCartItems} subtotal={subtotal} tax={tax} ship={ship} total={total}/> 
                </Grid>
            </Grid>

           
        </div>
    )
}
