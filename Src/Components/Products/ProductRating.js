import React from "react";
import Colors from "../../Utils/Colors";
import StarRating from "react-native-star-rating";
const ProductRating = ({ Rating }) => {
  return (
    <StarRating
      starSize={17}
      disabled={true}
      maxStars={5}
      rating={Rating}
      fullStarColor={Colors.Secondary}
      emptyStarColor="#1E222B"
      starStyle={{ marginRight: 4 }}
    />
  );
};

export default ProductRating;
