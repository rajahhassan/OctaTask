import { Grid, Paper, Typography, Box, Button } from '@mui/material'
import React from 'react'
import { styles } from '../../Styles/styles'

export default function YourOrder({ cartItems, subtotal, tax, ship, total }) {
    return (
        <div>
            <Grid container lg={6} md={6} sm={12} xs={12}>
                <Paper sx={styles.pd2}>
                    <Typography style={styles.bold}>Your Order</Typography>
                    <Typography style={styles.estmtxt}>Review all the products you want to buy</Typography>

                    <Box sx={styles.pd2}>
                        {cartItems.map((item, index) => (
                            <div key={index} style={styles.boxin2}>
                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <img src={item.image.src} alt={item.image.alt} style={styles.imgsty2} />
                                </Grid>
                                <Grid item lg={8} md={8} sm={12} xs={12}>
                                    <Typography>{item.orderName}</Typography>
                                    <Typography style={styles.cat}>{item.itemCategory}</Typography>
                                    <Typography sx={styles.boldfont2}>${item.orderPrice}</Typography>

                                    </Grid>

                            </div>
                        ))}
                    </Box>

                    <Grid style={styles.content}>
                        <Typography style={styles.boldfont2}>Subtotal</Typography>
                        <Typography style={styles.boldfont2}>$552</Typography>
                    </Grid>

                    <Grid style={styles.content}>
                        <Typography style={styles.estmtxt}>Shipping</Typography>
                        <Typography style={styles.smbold}>$223</Typography>
                    </Grid>

                    <Grid style={styles.content}>
                        <Typography style={styles.estmtxt}>Price</Typography>
                        <Typography style={styles.smbold}>$111</Typography>
                    </Grid>

                    <Grid style={styles.content}>
                        <Typography style={styles.estmtxt}>Discount 10%</Typography>
                        <Typography sx={styles.boldblue}>- $663</Typography>
                    </Grid>
                    <Grid style={styles.content}>
                        <Typography style={styles.estmtxt}>Total Price</Typography>
                        <Typography sx={styles.boldblue}>${total}</Typography>
                    </Grid>

                    <Grid container sx={styles.btncont}>
                        <Button variant="contained" sx={styles.btn}>
                            Continue
                        </Button>
                        <Typography style={styles.udtxt}>Edit Cart</Typography>
                    </Grid>

                </Paper>
            </Grid>




        </div>
    )
}
