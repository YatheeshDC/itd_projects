import BasicExample from "../components/navbar";
import Nav2 from "../components/navbar2";
import Searchbar from "../components/searchbar";
import Insider from "../components/inside";
import Property from "../components/properties";
import MediaCard from "../components/services";
import RecipeReviewCard from "../components/experts";
import BasicCard from "../components/advice";
import ColumnsGrid from "../components/realeastate";
import OutlinedCard from "../components/agents";
import Exclusive from "../components/exclusive";
import FooterSecond from "../components/secondFooter";

const Home=()=>{
    return(
        <div>
            <BasicExample/>
            <Nav2/>
            <Searchbar/>
            <Insider/>
            <Property/>
            <OutlinedCard/>
            <MediaCard/>
            <RecipeReviewCard/>
            <BasicCard/>
            <Exclusive/>
            <ColumnsGrid/>
            <FooterSecond/>

        </div>
    )
}
export default Home;