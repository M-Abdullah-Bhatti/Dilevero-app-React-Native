import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCards from "./CategoryCards";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {/* Category card */}

      <CategoryCards
        imageUrl="https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg"
        title="Testing 1"
      />

      <CategoryCards
        imageUrl="https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg"
        title="Testing 2"
      />
      <CategoryCards
        imageUrl="https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg"
        title="Testing 3"
      />
    </ScrollView>
  );
};

export default Categories;
