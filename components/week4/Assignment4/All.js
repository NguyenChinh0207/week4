import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TODOS } from "./Data";
import TodoItem from "./todoItem";


export default All = ({ props }) => {
  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState("");

  const onToggleTodo = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.status = todo.status === "Done" ? "Active" : "Done";
    const foundIndex = todoList.findIndex((todo) => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
  };

  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: "Active",
      id: todoList.length + 1,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody("");
  };
  
  const onDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri:
          "https://1.bp.blogspot.com/-yoV5web5mYo/Xqf9yW0CT9I/AAAAAAAAjlI/4pGBjYGTRKoJ-ecawVghZrsEt7Jv6Cm9QCLcBGAsYHQ/s1600/Hinh-anh-mua-he-dep%2B%25282%2529.jpg",
      }}
    >
      <KeyboardAvoidingView enabled behavior="padding">
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            {todoList.map((todo, idx) => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  idx={idx}
                  onToggleTodo={onToggleTodo}
                  onDeleteTodo={onDeleteTodo}
                />
              );
            })}

            <View style={styles.inputContainer}>
              <TextInput
                value={todoBody}
                style={styles.todoInput}
                onChangeText={(text) => setTodoBody(text)}
              />
              <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  
  todoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    overflow: "hidden",
  },
  todoInput: {
    width: "95%",
    minHeight: 40,
    color: "gray",
    borderWidth: 1,
    marginTop: "5%",
    marginBottom: "5%",
    borderColor: "grey",
  },
  inputContainer: {
    flex: 1,
    width: "90%",
    marginBottom: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "blue",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});