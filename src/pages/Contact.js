import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

export default function Contact() {
  return (
    <Layout>
        <Box sx={{ my: 5, ml: 10, '& h4': { fontWeight: 'bold', mb: 2 } }}>
          <Typography variant='h4'>
            Contact PIZZA PARADISE
          </Typography>
          <Typography variant='body1' component="p">
          We'd love to hear from you at Pizza Paradise! Whether you have questions, feedback, or need 
          assistance with a special order, our team is here to help. Reach out to us through the contact 
          form, give us a call, or stop by in person – we’re dedicated to ensuring your experience is 
          as delightful as our pizzas. Thank you for choosing Pizza Paradise, and we look forward to 
          connecting with you!
          </Typography>
        </Box>
        <Box sx={{ m: 3, width: '600px', ml: 10, '@media (max-width:600px)': { width: '300px' } }}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ bgcolor: 'black', color: 'white' }} align='center'>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> +1 (800) 123-4567
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{ color: 'skyblue', pt: 1 }} />  pizzaparadise@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: 'green', pt: 1 }} /> +94112589634  /  +947758623651
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}
