import { Grid } from '@mui/material'
import { styles } from '../../Styles/styles';
import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 4,
}));

export default function OrderImg() {


    return (
        <div>
            <Grid>
                <Box sx={styles.imgbox}>
                    <Grid container sx={{ justifyContent: 'center', marginLeft:7 }}>
                        <img src='https://i.pcmag.com/imagery/articles/03l46rj3swSQajeqoWX4bCb-7.fit_lim.size_1050x.jpg' alt='' style={{ height: 300, width: 300, }} />
                    </Grid>
                    <Grid>
                    <Stack
                        direction="row"
                        spacing={2}
                    >
                        <Item>
                            <img src='https://i.pcmag.com/imagery/articles/03l46rj3swSQajeqoWX4bCb-7.fit_lim.size_1050x.jpg' alt='' style={{ height: 80, width: 80, }} />
                        </Item>
                        <Item>
                            <img src='https://i.pcmag.com/imagery/articles/03l46rj3swSQajeqoWX4bCb-7.fit_lim.size_1050x.jpg' alt='' style={{ height: 80, width: 80, }} />
                        </Item>
                        <Item>
                            <img src='https://i.pcmag.com/imagery/articles/03l46rj3swSQajeqoWX4bCb-7.fit_lim.size_1050x.jpg' alt='' style={{ height: 80, width: 80, }} />
                        </Item>
                    </Stack>
                    </Grid>
                </Box>

            </Grid>
        </div>
    )
}
