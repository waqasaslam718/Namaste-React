import { IMG_CDN_URL } from "../utils/constants";
export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } =
    resData || {};

  return (
    <div className="m-4 p-4 w-[250px] min-h-[300px] bg-gray-100 hover:bg-gray-200 rounded-lg">
      {/* <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} alt="" /> */}
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white mt-[-5] p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
