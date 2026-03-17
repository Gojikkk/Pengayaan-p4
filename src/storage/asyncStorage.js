import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (todos) => {
  await AsyncStorage.setItem("TODOS", JSON.stringify(todos));
};

export const loadData = async () => {
  const data = await AsyncStorage.getItem("TODOS");
  return data ? JSON.parse(data) : [];
};