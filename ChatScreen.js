import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import ChatBubble from "./ChatBubble";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "aqua",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#skyblue",
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: "center",
  },
  sendButtonText: {
    color: "red",
  },
});

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Goodnight", sender: "bot" },
    { id: "2", text: "Hi there!", sender: "me" },
  ]);
  const [input, setInput] = useState("");
  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (input.trim().length === 0) return;
    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "me",
    };
    setMessages((prevMessages) => [newMessage, ...prevMessages]); // Update state correctly
    setInput("");

    // Scroll to the top after sending the message
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

  useEffect(() => {
    // Scroll to the top on initial load
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: false });
    }
  }, [messages]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Chat list */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatBubble text={item.text} isMe={item.sender === "me"} />
        )}
        inverted
        contentContainerStyle={{ padding: 10 }}
      />

      {/* Input box */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
