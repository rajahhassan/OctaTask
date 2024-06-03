import { Grid } from '@mui/material'
import React from 'react'
import OrderImg from './OrderImg'
import OrderSection from './OrderSection'

export default function MainOrderingPage() {
    return (
        <Grid container lg={12} md={12} xs={12} sm={12}>

            <Grid item lg={4} md={4} xs={12} sm={12} >
                <OrderImg />
            </Grid>
            <Grid item lg={8} md={8} xs={12} sm={12}>
                <OrderSection />
            </Grid>
        </Grid>
    )
}
