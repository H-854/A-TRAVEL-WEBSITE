import DestinationPlace from "./Destplace"
import destination1 from '../assets/images/destination1.jpg';
import destination2 from '../assets/images/destination2.jpg';
import destination3 from '../assets/images/destination3.jpg';
import destination4 from '../assets/images/destination4.jpg';
import destination5 from '../assets/images/destination5.jpg';
import destination6 from '../assets/images/destination6.jpg';

export default function Destination(){
    return (
        <div className="destinationOuter">
            <h5 className="text-center my-5 headingDestination">TOP DESTINATION</h5>
            <h1 className="text-center my-5 headTopDestination">Explore Top Destination</h1>
            <div className="destination">
                <DestinationPlace img={destination1} star={4.7} headline={"Enjoy the Beauty of Del Pincio"} place={"Rome,Italy"} review={"11.1K Reviews"}/>
                <DestinationPlace img={destination2} star={4} headline={"Paris Shines Bright with New Art Exhibit"} place={"Paris"} review={"5K Reviews"}/>
                <DestinationPlace img={destination3} star={4.4} headline={"Dubai's Burj Khalifa Breaks Height Record"} place={"Dubai"} review={"17K Reviews"}/>
                <DestinationPlace img={destination2} star={4} headline={"Paris Shines Bright with New Art Exhibit"} place={"Paris"} review={"5K Reviews"}/>
                <DestinationPlace img={destination1} star={4.7} headline={"Enjoy the Beauty of Del Pincio"} place={"Rome,Italy"} review={"11.1K Reviews"}/>
                <DestinationPlace img={destination2} star={4} headline={"Paris Shines Bright with New Art Exhibit"} place={"Paris"} review={"5K Reviews"}/>
                <DestinationPlace img={destination1} star={4.7} headline={"Enjoy the Beauty of Del Pincio"} place={"Rome,Italy"} review={"11.1K Reviews"}/>
                <DestinationPlace img={destination3} star={4.4} headline={"Dubai's Burj Khalifa Breaks Height Record"} place={"Dubai"} review={"17K Reviews"}/>
                <DestinationPlace img={destination1} star={4.7} headline={"Enjoy the Beauty of Del Pincio"} place={"Rome,Italy"} review={"11.1K Reviews"}/>
            </div>
        </div>
    )
}