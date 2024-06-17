import heroBanner from "../assets/images/img1.png"
import titleIcon from "../assets/images/title-icon.svg"

export default function About(){
    return (
        <div className="aboutOuter mt-3 container-fluid">
            <div className="aboutInner p-4">
                <button className="btn btn-primary explore my-3 p-2">Explore the world <img src={titleIcon} alt="" /></button>
                <h1 className="mt-3 " style={{fontWeight: "700"}}>It's a Big World Out There</h1>
                <h1 className="mb-3 " style={{fontWeight: "700"}}>Go Explore</h1>
                <span className="mt-3">We always make our customer happy by providing</span>
                <span className="mb-3">as many choices as possible</span>
                <button className="btn btn-primary explore p-2">Plan a trip</button>
            </div>
            
            <img src={heroBanner} className="img"/>
        </div>
    )
}