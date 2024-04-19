import BasicExample from "../components/navbar";
import Nav2 from "../components/navbar2";
import Searchbar from "../components/searchbar";
import Insider from "../components/inside";
import Property from "../components/properties";
import MediaCard from "../components/services";

const Home=()=>{
    return(
        <div>
            <BasicExample/>
            <Nav2/>
            <Searchbar/>
            <Insider/>
            <Property/>
            <MediaCard/>
        </div>
    )
}
export default Home;