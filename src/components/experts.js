import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import { Link } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Col, Row } from 'react-bootstrap';
import { Container } from '@mui/material';


export default function RecipeReviewCard(){
  return (
    <Container className='insideCont'>
    <Row>
      <h2 style={{margin:'1rem'}}>Top Society Experts</h2>
    <Card sx={{ maxWidth: 320 }} className='expCard'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'rgb(222, 211, 69)' }} aria-label="Experts">
            V
          </Avatar>
        }
        title="VENUGOPAL VERMA" className='expTitle'
        subheader="Serving Societies Since 2006"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>Societies served: &nbsp;</b>
        L and T Raintree Boulevard
        </Typography><br></br>
        <Link size="small">View all 20 Flats</Link>
      </CardContent>
     </Card>

     
     <Card sx={{ maxWidth: 320 }} className='expCard'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'rgb(222, 211, 69)' }} aria-label="Experts">
            A
          </Avatar>
        }
        title="ALPHA REALESTATE" 
        subheader="Serving Societies Since 2019"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>Societies served: &nbsp;</b>
         Bhartiya City Nikoo Homes Phase 2 </Typography><br></br>
        <Link size="small">View all 20 Flats</Link>
      </CardContent>
     </Card>

     <Card sx={{ maxWidth: 320 }} className='expCard'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'rgb(222, 211, 69)' }} aria-label="Experts">
            L
          </Avatar>
        }
        title="LIVING BANGALORE" className='expTitle'
        subheader="Serving Societies Since 2014"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>Societies served: &nbsp;</b>
        Embassy Lake Terraces
        </Typography><br></br>
        <Link size="small">View all 31 Flats</Link>
      </CardContent>
     </Card>
    </Row>
    </Container>
  );
}