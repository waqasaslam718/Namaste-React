import { useContext, useEffect, useState } from "react";
import { resList } from "../utils/mockData";    
import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Body = () => { 
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {   
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
  
    const json = await data.json();

    // Optional Chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    setFilteredRestaurant(resList);
  }, [setFilteredRestaurant]);

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-sm pl-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filtededRest = filteredRestaurant.filter((res) =>
                res.data.name.toLocaleLowerCase().includes(searchText)
              );
              setFilteredRestaurant(filtededRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 items-center flex">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              let filterList = filteredRestaurant.filter(
                (res) => res.data.avgRating >= 4
              );
              setFilteredRestaurant(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center">
          <label className="font-bold">UserName </label>
          <input
            type="text"
            className="border border-solid border-black px-2 ml-3 rounded-sm"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.avgRating >= 4.5 ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
