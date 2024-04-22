import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'antiquewhite',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Container>
      <Row>
        <Col>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12} className='mainColumn'>
        <Grid item xs={4}>
          <Item className='ColumnsGrid'>xs=8</Item>
        </Grid>
      
        <Grid item xs={4}>
          <Item className='ColumnsGrid'>xs=8</Item>
        </Grid>
        
        <Grid item xs={4}>
          <Item className='ColumnsGrid'>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
    </Col>
    </Row>
    </Container>
  );
}