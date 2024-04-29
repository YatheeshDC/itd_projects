import { React } from "react";
import {Container, Card} from "react-bootstrap";
// import BedIcon from '@mui/icons-material/Bed';
// import BathtubIcon from '@mui/icons-material/Bathtub';
// import BalconyIcon from '@mui/icons-material/Balcony';
// import CastleIcon from '@mui/icons-material/Castle';
const More = () => {
    return (
        <div>
            <Container className="mx-3 mt-3" style={{width: '30rem', height:'30rem', marginBottom:'10rem'}}>
                <Card>
                    <h5 style={{display:'flex', justifyContent:'center', marginTop:'1rem'}}><b>₹2.0 lac</b> &nbsp;See other charges</h5>
                    <h6 style={{display:'flex', justifyContent:'center', marginLeft:'3rem', marginRight:'3rem'}}>4 BHK 4000 Sq-ft For Rent in in Sector 2 HSR Layout, Bangalore.</h6>
                    <Card.Body>
                        <div>
                            
                            <Card.Img className="images" src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Apr/13/Photo_h300_w450/66533429_5_PropertyImage152-86800389475064_300_450.jpg" />
                        
                            {/* <span className="iconDetails">
                                <span className="mx-2"><BedIcon></BedIcon>4 BEDS</span>||
                                <span className="mx-2"><BathtubIcon></BathtubIcon>6 Baths</span>||
                                <span className="mx-2"><BalconyIcon></BalconyIcon>5 Balconies</span>||
                                <span className="mx-2"><CastleIcon></CastleIcon>Semi</span>
                            </span> */}
                            <span>
                            <p className="carpetArea">
                                Carpet Area<br />
                                <b>4500</b><br />
                                sqft<br />
                                ₹44/sqft<br />
                            </p>
                            <p className="floor">
                                Floor<br />
                                <b>2 (Out of 4 Floors)</b>
                            </p>
                            <p className="status">
                                Status<br />
                                <b>Immediately</b>
                            </p>
                            <p className="facing">
                                Facing<br />
                                <b>North</b>
                            </p>
                            <p className="lifts">
                                Lifts<br />
                                <b>2</b>
                            </p>
                            <p className="furnish">
                                Furnished Status<br />
                                <b>Semi-Furnished</b>
                            </p>
                            <p className="period">
                                Age Of Construction<br />
                                <b>Less than 5 years</b>
                            </p>
                            </span>
                            <div className="liner"></div>
                        </div>
                        <p>
                            <Card.Img className="images22" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/16/Photo_h300_w450/71422397_6_2AE5A8A777F4781B4AB22C6B758506A_300_450.jpeg" />
                            <Card.Img className="images33" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/10/Photo_h300_w450/72215495_5_PropertyImage899-8178761013603_300_450.jpg" />
                            <Card.Img className="images33" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/16/Photo_h300_w450/72269989_1_PropertyImage1713233792463_300_450.jpg" />
                        </p>
                        <button className="owner me-4">Contact Agent</button>
                        <button className="owner22">Get Ph.no</button>
                        {/* <span className="owner33"><PersonIcon></PersonIcon>
                         Last contact made 27 days ago</span> */}
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default More;
