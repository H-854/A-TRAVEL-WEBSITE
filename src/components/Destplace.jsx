import StarIcon from '@mui/icons-material/Star';
export default function DestinationPlace({img,headline,place,star,review}){
    return (
        <div className="card mx-5 my-4" style={{width: "20rem",backgroundColor: "transparent",border: "none"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className='p-2'>
                <h4>{headline}</h4>
                <p>{place}</p>
                <button className='btn starbtn'><StarIcon className='star'/>{star}</button>
                <p>({review})</p>
            </div>
        </div>
    )
}