import { TextField, Typography, Grid, Button,Paper } from '@mui/material'
import React from 'react'
import { styles } from '../../Styles/styles'

export default function YourReviews() {
    return (
        <div>
         <Paper style={{width:'400px'}}>
            <Grid container style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography style={styles.bold}> Your Review</Typography>
                <Typography>Tell us how you think about us!</Typography>

                <TextField sx={styles.txtfld2} placeholder='Your Name' />
                <TextField sx={styles.txtfld2} placeholder='Your Email' />
                <TextField sx={styles.txtfld2} placeholder='Five Stars' />
                <TextField sx={styles.txtfld2} placeholder='This Product is....' />
                <Grid container style={styles.centbtn}>
                    <Button variant='outlined' style={{ width: '40px' }}>Submit</Button>
                </Grid>
                
            </Grid>
            </Paper>
        </div>
    )
}
