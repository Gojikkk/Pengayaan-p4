import React, { useState, useContext } from "react";
import { View, TextInput, Button } from "react-native";
import { TodoContext } from "../context/ToDoContext";

const AddTodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim() === "") return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        text: text,
        completed: false,
      },
    });

    setText("");
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Tambah todo..."
        value={text}
        onChangeText={setText}
        style={{
          borderWidth: 1,
          padding: 8,
          marginBottom: 10,
        }}
      />
      <Button title="Tambah" onPress={handleAdd} />
    </View>
  );
};

export default AddTodoForm;