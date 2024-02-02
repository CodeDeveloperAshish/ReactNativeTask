import { View, Text } from "react-native";
import React from "react";

const Heading = ({ Heading }) => {
  return (
    <Text
      style={{ fontFamily: "Manrope-Regular" }}
      className="text-[30px] mt-5"
    >
      {Heading}
    </Text>
  );
};

export default Heading;
