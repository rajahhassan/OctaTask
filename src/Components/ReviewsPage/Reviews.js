import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';

export default function Reviews() {
    return (
        <div>
            <Box>
                <Grid>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLnSu-0rfRFZe0AE60ZA0FgvBQlC2fnhVpg&s' alt='' stle={{ borderRadius: 10 }} />
                    <Typography>Grace Carey</Typography>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>

                </Grid>

                <Grid>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLnSu-0rfRFZe0AE60ZA0FgvBQlC2fnhVpg&s' alt='' stle={{ borderRadius: 10 }} />
                    <Typography>Jimmy Ce</Typography>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>

                </Grid>

            </Box>
        </div>
    )
}
