import React from "react";
import { SearchBar as SearchInput } from "@rneui/themed";

const SearchBar = () => {
  return (
    <SearchInput
      containerStyle={{
        backgroundColor: "#153075",
        borderBottomWidth: 0,
        borderTopWidth: 0,
        marginTop: 10,
        borderRadius: 100,
        marginTop: 40,
        height: 60,
        justifyContent: "center",
      }}
      searchIcon={{ size: 25, color: "white" }}
      inputContainerStyle={{
        backgroundColor: "#153075",
        borderRadius: 10,
      }}
      inputStyle={{
        color: "black",
        fontSize: 14,
        fontFamily: "Manrope-Medium",
      }}
      placeholder="Search Products or store"
      // onChangeText={(text) => SetSearch(text)}
      // value={search}
    />
  );
};

export default SearchBar;
