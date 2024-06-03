import { Grid, } from '@mui/material'
import React from 'react'
import { styles } from '../../Styles/styles';
import YourOrder from '../YourOrder/YourOrder';


export default function MainOrderPage({cartItems, setCartItems,subtotal,tax,ship,total}) {
  return (
    <div>
       <Grid style={styles.tempsty}>
                    <YourOrder cartItems={cartItems} setCartItems={setCartItems} subtotal={subtotal} tax={tax} ship={ship} total={total}/> 
                </Grid>
    </div>
  )
}
