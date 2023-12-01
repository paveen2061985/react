import { useState } from "react";
import { restaurentList } from "../config";
import { RestaurentCard } from "./RestaurentCard";

// no key < index key < unique key
const Body = () => {
    const [restaurents, setRestaurents] = useState(restaurentList);
    const [searchText, setSearchText] = useState();
    return(
    <>
    <div className="search-container">
        <input 
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
            setSearchText(e.target.value);
        }}
        />
        <button 
            className="search-btn"
            onClick={() => {
                // filter the data and update the state
                const data = filterData(searchText, restaurents);
                setRestaurents(data);
            }}
        >Seach</button>
    </div>
    <div className="restaurent-list">
    {
        restaurents.map((restaurent) => {
            return <RestaurentCard {...restaurent.info} key={restaurent.info.id}/>
        }) 
    }
    </div>
    </>
)}

const filterData = (searchText, restaurents) => {
    return restaurents = restaurents.filter((rt) => rt.info.name.includes(searchText));
};

export default Body;