import { Grid, Typography, TextField, InputAdornment, Button, Paper } from '@mui/material'
import React from 'react'
import { styles } from '../styless';

export default function OrderSummary({subtotal,tax,ship,total}) {


    return (
        <div>
            <Grid container>
                <Paper>
                    <Grid item sx={styles.section2} >
                        <Typography style={styles.bold}>Order Summary</Typography>
                        <Typography style={styles.colsptxt}>Discount Code/Promo Code</Typography>
                        <TextField placeholder='Code' sx={styles.txtfld} />
                        <Typography style={styles.colsptxt}>Your bonus card number</Typography>
                        <TextField
                            placeholder="Enter card Number"
                            sx={styles.txtfld}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Button variant="contained" style={styles.apbtn} >
                                            Apply
                                        </Button>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Grid style={styles.content}>
                            <Typography style={styles.boldfont2}>Subtotal</Typography>
                            <Typography style={styles.boldfont2}>${subtotal}</Typography>
                        </Grid>

                        <Grid style={styles.content}>
                            <Typography style={styles.estmtxt}>Estimated Tax</Typography>
                            <Typography style={styles.smbold}>${tax}</Typography>
                        </Grid>

                        <Grid style={styles.content}>
                            <Typography style={styles.estmtxt}>Estimated shipping & handling</Typography>
                            <Typography style={styles.smbold}>${ship}</Typography>
                        </Grid>

                        <Grid style={styles.content}>
                            <Typography style={styles.boldfont2}>Total</Typography>
                            <Typography style={styles.boldblue}>${total}</Typography>
                        </Grid>
                        <Grid container sx={styles.btncont}>
                            <Button variant="contained" sx={styles.btn}>
                                CheckOut
                            </Button>
                            <Typography style={styles.udtxt}>Continue Shipping?</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

        </div>

    )
}
