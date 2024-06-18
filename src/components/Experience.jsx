import experienceBanner from "../assets/images/experienceBanner.png";

export default function Experience(){
    return (
        <div className="xpOuter my-5">
                <img src={experienceBanner} alt="" style={{width: "25%"}}/>
                <div className="exp w-50 p-3">
                    <h5 style={{color: "blueviolet",fontWeight: "bold"}}>Our Experience</h5>
                    <h2 className="headExp">With Our Experience We</h2>
                    <h2 className="headExp">Will Serve You</h2>
                    <div className="mt-5">
                        <span>Since We first opened we have always prioritized the convenience</span><br />
                        <span>of our users by providing low prices and with a easy process.</span>
                    </div>
                    <div className="expInner my-5">
                        <div className="xpSm m-2">
                            <h3>20</h3>
                            <span>Years</span><br />
                            <span>Experience</span>
                        </div>
                        <div className="xpSm m-2">
                            <h3>460+</h3>
                            <span>Destination</span><br />
                            <span>Collaboration</span>
                        </div>
                        <div className="xpSm m-2">
                            <h3>50K+</h3>
                            <span>Happy</span><br />
                            <span>Customer</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}