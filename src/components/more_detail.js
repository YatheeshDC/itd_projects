import { Container,Card } from "react-bootstrap";
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';

const MoreDetails=()=>{
    return(
        <div>
              <Container fluid className="mx-4 mt-3" style={{ width: "20rem", height:"35rem", marginBottom:'10rem', marginTop:'10rem' }}>
                <Card className="tab22">
                    <Card.Body>
                      <h3> <p><b> More Details</b></p></h3>
<table>
    <tbody>
        <tr>
        <td><b>Rental Value:</b></td>
        <td>₹25,000</td>
        </tr><br></br>

        <tr>
            <td><b>Address:</b></td>
            <td>Springdale Layout, Vijaynagar Road, Whitefield, Bangalore - East, Karnataka<br></br>
            <LocalShippingTwoToneIcon></LocalShippingTwoToneIcon> Move your household goods. Packers and Movers starting at ₹ 3900/-</td>
        </tr><br></br>

        <tr>
           <td><b>Landmarks:</b></td> 
           <td>500 meters from the main commercial shopping and entertainment area in Whitefield and also the Metro station, 2 kms from Singapore Tech ParkBangalores premier IT hub Whitefield railway station. 4 kms from Phoenix Mall, Bangalores 1</td>
        </tr><br></br>

        <tr>
            <td><b>Furnishing:</b></td>
            <td>Semi-Furnished</td>
        </tr><br></br>

        <tr>
            <td><b>Flooring:</b></td>
            <td>Vitrified</td>
        </tr><br></br>

        <tr>
            <td><b>Overlooking:</b></td>
            <td>Garden/Park</td>
        </tr><br></br>

        <tr>
            <td><b>Age of Construction:</b></td>
            <td>Less than 5 years</td>
        </tr><br></br>

        <tr>
            <td><b>Description:</b></td>
            <td>Multistorey apartment is available for rent. It covered area of 1135 sq-ft, it is a good location property. Please contact for more details.</td>
        </tr><br></br>
    </tbody>
</table>

<p><button className="btn btn-danger me-5 mt-3">Contact_Owner</button>
<span className="report"></span></p>

        
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default MoreDetails;