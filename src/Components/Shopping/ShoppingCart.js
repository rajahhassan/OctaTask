import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Button, Typography } from '@mui/material';
import { styles } from '../styless';
import CloseIcon from '@mui/icons-material/Close';

export default function ShoppingCart({ cartItems, setCartItems }) {

    const handleQuantityChange = (index, delta) => {
        const newCartItems = [...cartItems];
        newCartItems[index].qty = Math.max(newCartItems[index].qty + delta, 0);
        setCartItems(newCartItems);
    };

    const handleRemoveItem = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
    };

    return (
        <Grid container style={styles.section1}>
            <Typography style={styles.bold}>Shopping Cart</Typography>
            <Box style={styles.pd}>
                {cartItems.map((item, index) => (
                    <div key={index} style={styles.boxin}>
                        <div style={styles.imgbx}>
                            <img src={item.image.src} alt={item.image.alt} style={styles.imgsty} />
                        </div>
                        <div sx={styles.box1}>
                            <Typography sx={styles.fontsty}>{item.orderName}</Typography>
                            <Typography style={styles.cat}>{item.itemCategory}</Typography>
                        </div>

                        <div style={styles.box2}>
                            <Button size='xs' onClick={() => handleQuantityChange(index, -1)}>-</Button>
                            <Typography style={styles.qty}>{item.qty}</Typography>
                            <Button onClick={() => handleQuantityChange(index, 1)}>+</Button>
                        </div>

                        <div style={styles.box3}>
                            <Typography>${item.orderPrice}</Typography>
                            <CloseIcon style={styles.cancel} onClick={() => handleRemoveItem(index)} />
                        </div>
                    </div>
                ))}
            </Box>
        </Grid>
    );
}
