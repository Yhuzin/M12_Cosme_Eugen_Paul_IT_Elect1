import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    maxWidth: "70%",
  },
  myBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#0078fe",
  },
  otherBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#e5e5ea",
  },
  text: {
    color: "white",
  },
  otherText: {
    color: "black",
  },
});

export default function ChatBubble({ text, isMe }) {
  return (
    <View
      style={[
        styles.bubble,
        isMe ? styles.myBubble : styles.otherBubble,
      ]}
    >
      <Text style={isMe ? styles.text : styles.otherText}>{text}</Text>
    </View>
  );
}
