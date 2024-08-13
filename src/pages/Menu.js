import React from 'react'
import {MenuList} from '../data/data'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

export default function Menu() {
  return (
    <Layout>
      <div style={{backgroundColor:'black'}}>
        <Box sx={{display:'flex', flexWrap:'wrap' , justifyContent:'center'}}>
          {
            MenuList.map(menu =>(
              <Card sx={{maxWidth:'300px',  display:"flex", m:4}}>
                <CardActionArea>
                  <CardMedia sx={{minHeight:'300px'}} component={'img'}  src={menu.Image} alt={menu.name}/>
                  <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      {menu.name}
                    </Typography>
                    <Typography variant='body2'>
                      {menu.description}
                    </Typography>
                    <Typography variant='body2' fontWeight={'bold'}>
                      {menu.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        </Box></div>
    </Layout>
  )
}
