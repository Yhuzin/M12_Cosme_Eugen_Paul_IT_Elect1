import React from "react";
import {Platform, KeyboardAvoidingView} from "react-native"
import ChatScreen from "./ChatScreen";
import CommentSection from "./CommentSection";

export default function App() {
  
  return(
    <KeyboardAvoidingView
    style ={{flex: 1}}
    behavior ={Platform.os === "ios" ? "padding":"height"}
    >
  
   <CommentSection/>;
   <ChatScreen/>;
   </KeyboardAvoidingView>
   );
}