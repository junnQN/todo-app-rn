import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  console.log(todos);

  const addTodo = useMutation(api.todos.addTodo);

  const clearAllTodo = useMutation(api.todos.deleteAllTodos);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Text>hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addTodo({ text: "walk the dog" })}>
        <Text>Add a new todo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearAllTodo()}>
        <Text>Delete all todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  content: {
    fontSize: 22,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
