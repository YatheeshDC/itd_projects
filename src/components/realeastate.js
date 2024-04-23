import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { CarouselItem} from 'react-bootstrap';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import Button from '@mui/material/Button';

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
        
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12} className='mainColumn'>
        <Grid item xs={4}>
          <Item className='ColumnsGrid'>
              <Carousel>
            <CarouselItem>
            <span className='realVideo'>
            <iframe width="40%" height="25%" src="https://www.youtube.com/embed/KdLZ0Wr3WqI?si=3wvSo6YKNNovrbxq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </span>
            <span className='realVideo'>
            <iframe width="40%" height="25%" src="https://www.youtube.com/embed/G9a2S0nCCb8?si=oma3jCPWzaanfX1r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </span><br></br>

            <span>
            Locality Review -Hoodi, Bengaluru
            </span>
            </CarouselItem>


            <CarouselItem>
            <span className='realVideo'>
            <iframe width="40%" height="25%" src="https://www.youtube.com/embed/_G9F7h3453o?si=tYE9jZVGsTNZzabv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </span>
            <span className='realVideo'>
            <iframe width="40%" height="25%" src="https://www.youtube.com/embed/Kq4q_lc5byQ?si=aEsXjUzdTaAR2WEH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
            </span><br></br>

            <span>
            Locality Review -Rammurthy Nagar, Bengaluru
            </span>
            </CarouselItem>


            </Carousel>
            </Item>
        </Grid>
      
        <Grid item xs={4}>
          <Item className='ColumnsGrid'>
            <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px',margin:'0px'}}><p> <PlayCircleOutlinedIcon/> <span style={{color:'black' }}>What Does RERA Carpet Area Men& How is it</span></p></Card.Link><hr></hr>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px'}}><p> <ReceiptLongOutlinedIcon/> <span style={{color:'black' }}> what is rent aggrement-rent aggrement sample..   </span> </p></Card.Link><hr></hr>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px'}}><p> <InventoryOutlinedIcon/><span style={{color:'black' }}>What Does RERA Carpet Area Men& How is it</span>  </p></Card.Link><hr></hr>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px'}}><p> <DifferenceOutlinedIcon/><span style={{color:'black' }}>What Does RERA Carpet Area Men& How is it</span>  </p></Card.Link><hr></hr>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px'}}><p> <VideoLibraryOutlinedIcon/> <span style={{color:'black' }}> what is rent aggrement-rent aggrement sample..   </span> </p></Card.Link><hr></hr>
               <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'18px'}}><p> See All  <KeyboardDoubleArrowRightOutlinedIcon/></p> </Card.Link>
            </Item>
        </Grid>
        
        <Grid item xs={4}>
          <Item className='d-flex ColumnsGrid'>

          </Item>
         </Grid>

         </Grid>
        </Box>
       </Row>
    </Container>
  );
}