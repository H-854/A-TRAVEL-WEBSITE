import icon1 from "../assets/images/icon1.svg"
import icon2 from "../assets/images/icon2.svg"
import icon3 from "../assets/images/icon3.svg"

export default function Services(){
    return (
        <div className="servicesOuter m-5">
            <div className="inner1 d1">
                <p className="p">WHAT WE SERVE</p>
                <h1>Top Values</h1>
                <h1>For You</h1>
                <span>Try variety of benefits when</span>
                <span>using our services</span>
            </div>
            <div className="inner1 d2">
                <img src={icon1} alt="" />
                <h2>Lot Of Choices</h2>
                <span>Total 460+ destinations</span>
                <span>that we work with</span>
            </div>
            <div className="inner1 d3">
                <img src={icon2} alt="" />
                <h2>Best Tour Guide</h2>
                <span>Our tour guide with 15+</span>
                <span>years of experience</span>
            </div>
            <div className="inner1 d4">
                <img src={icon3} alt="" />
                <h2>Easy Booking</h2>
                <span>With an easy and fast</span>
                <span>ticket purchase process</span>
            </div>
        </div>
    )
}