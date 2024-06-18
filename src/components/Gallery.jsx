import pic1 from "../assets/images/gallery1.jpg"
import pic2 from "../assets/images/gallery2.jpg"
import pic3 from "../assets/images/gallery3.jpg"
import pic4 from "../assets/images/gallery4.jpg"
import pic5 from "../assets/images/gallery5.jpg"
import pic6 from "../assets/images/gallery6.jpg"

export default function Gallery(){
    return (
        <div className="photoGallery my-5">
            <h6 className="text-center my-3" style={{color: "blueviolet",fontWeight: "bold"}}>PHOTO GALLERY</h6>
            <h1 className="text-center fw-bold">Photo's From Travelers</h1>
            <div className="imgDiv my-5">
                <div className="part1 my-3">
                    <div className="i1">
                        <img src={pic1} alt="" className="img-fluid"/>
                        <img src={pic2} alt="" className="img-fluid"/>
                    </div >
                    <img src={pic5} alt="" className="img-fluid" style={{borderRadius: "2rem"}}/>
                </div>
                <img src={pic3} alt="" className="img-fluid part2 m-3"/>
                <div className="part3 m-3">
                    <img src={pic4} alt="" className="img-fluid mx-3 my-1"/>
                    <img src={pic6} alt="" className="img-fluid mx-3 my-1"/>
                </div>
            </div>
        </div>
    )
}

