import React from "react";
import { View, Button } from "react-native";
import { useTodos } from "../hooks/useTodos";

const FilterBar = () => {
  const { setFilter } = useTodos();

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <Button title="All" onPress={() => setFilter("ALL")} />
      <Button title="Active" onPress={() => setFilter("ACTIVE")} />
      <Button title="Done" onPress={() => setFilter("DONE")} />
    </View>
  );
};

export default FilterBar;