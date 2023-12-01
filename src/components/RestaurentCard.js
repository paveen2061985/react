import { IMG_CDN_URL } from "../config";
export const RestaurentCard = ({cloudinaryImageId, name, cuisines, avgRatingString, sla }) => {
    return (
        <div className="card">
            <img 
                src= { IMG_CDN_URL + cloudinaryImageId } 
                alt="recipie pic"/>
            <h2>{name}</h2>
            <h4>{cuisines.join(', ')}</h4>
            <h6>{avgRatingString} stars</h6>
            <h6>{sla.lastMileTravelString}</h6>
        </div>
    )
  }