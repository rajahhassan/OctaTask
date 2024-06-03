import { Grid, Typography } from '@mui/material'
import React from 'react'
import { styles } from '../../Styles/styles'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function () {




    return (
        <div>
            <Grid style={styles.ordrfl}>
                <Grid container md={12} style={styles.rwjs}>

                    <Grid item style={styles.rwpd}>
                        <Typography style={styles.bold}>2 Reviews</Typography>
                    </Grid>
                    <Grid item>
                        <FormControl sx={styles.frmcnt} size="small">
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                label="Age"
                            >
                                <MenuItem value={'Newest'}>Newest</MenuItem>
                                <MenuItem value={'Lowest'}>Lowest</MenuItem>
                                <MenuItem value={'Highest'}>Highest</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>

            
            </Grid>
        </div>
    )
}
