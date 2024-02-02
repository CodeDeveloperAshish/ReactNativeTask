import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Apis/GlobalApi";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const data = await GlobalApi.getProducts();
        setProducts(data.products);
      } catch (error) {
        console.error("Error in component:", error);
      }
    };

    getAllProducts();
  }, []);

  return (
    <View className="mt-3">
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
    </View>
  );
};

export default Products;
