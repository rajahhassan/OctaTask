import { Button, Grid, Typography } from '@mui/material'
import { styles } from '../../Styles/styles';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import React, { useState } from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Rating from '@mui/material/Rating';
import CountButton from './OrderBtnComponents/CountButton';
import WishListButton from './OrderBtnComponents/WishlistButton';

export default function OrderSection() {


    const [productName] = useState('1.5A H-bridge Dual Channel DC Motor Driver Module L28N PWM Speed Control');
    return (
        <div>
            <Grid sx={styles.ordr1}>
                <Grid container >
                    <Grid item md={3} sx={styles.ordrfl}>
                        <Inventory2Icon sx={styles.ordricn} />
                        <Typography sx={styles.ordrfnt}>Stock</Typography>
                    </Grid>
                    <Grid item md={3} sx={styles.ordrfl}>
                        <VerifiedIcon sx={styles.ordricn} />
                        <Typography sx={styles.ordrfnt}>Guranteed</Typography>
                    </Grid>
                    <Grid item md={4} sx={styles.ordrfl}>
                        <LocalShippingIcon sx={styles.ordricn} />
                        <Typography sx={styles.ordrfnt}>Free Delivery</Typography>
                    </Grid>
                </Grid>

                <Grid sx={styles.ordr2}>
                    <Typography sx={styles.prnm}>{productName}</Typography>
                </Grid>

                <Grid sx={styles.ordrfl}>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    <Typography sx={styles.ordrrw} lg={2}>157 Reviews Given</Typography>
                </Grid>

                <Grid sx={styles.ordrfl}>
                    <Typography sx={styles.bold}>Rs: 150/-</Typography>
                </Grid>

                <Grid container sx={styles.ordrfl}>

                    <Grid sx={styles.ordrfl}>
                        <CountButton />
                        <WishListButton />
                    </Grid>

                </Grid>

                <Grid sx={styles.ordrpd}>
                    <Button variant='outlined' sx={styles.ordrbtn}>Add to Cart</Button>
                </Grid>
                <hr />

                    <Grid sx={styles.ordr3}>
                        <Typography  sx={styles.ordrrw}>Tags</Typography>
                        <Typography sx={styles.ordrmr}>Tags will be here</Typography>
                    </Grid>

                    <Grid sx={styles.ordr3}>
                        <Typography sx={styles.ordrrw}>Category</Typography>
                        <Typography sx={styles.ordrmr}>Categories will be here</Typography>
                    </Grid>
               

            </Grid>


        </div>
    )
}
