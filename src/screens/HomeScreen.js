import React from "react";
import { View, FlatList } from "react-native";
import { useTodos } from "../hooks/useTodos";
import TodoItem from "../components/ToDoItem";
import AddTodoForm from "../components/AddTodoForm";
import FilterBar from "../components/FilterBar";

const HomeScreen = () => {
  const { todos } = useTodos();

  return (
    <View>
      <AddTodoForm />
      <FilterBar />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem item={item} />}
      />
    </View>
  );
};

export default HomeScreen;