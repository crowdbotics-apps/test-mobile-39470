import { Slider } from "react-native-elements";
import { Switch } from "react-native";
import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView, Pressable, Image, TextInput } from "react-native";

const AddReviewScreen = params => {
  const [review, setReview] = useState("");
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.rating}>
          <Image source={require("./assets/Stars.png")} style={styles.star} />
        <TextInput style={styles.gQzoshAA}></TextInput><Switch style={styles.ZlVPpUZH}></Switch><Slider style={styles.zBplIVlt} thumbStyle={{
          height: 20,
          width: 20
        }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider></View>
        <View style={styles.review}>
          <Text>Give you review:</Text>
          <TextInput style={styles.input} onChangeText={text => setReview(text)} value={review} placeholder="Enter your review" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} multiline={true} numberOfLines={10} />
        </View>
        <View style={styles.btnContainer}>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  rating: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  review: {
    padding: 20
  },
  inputText: {
    fontSize: 16,
    marginLeft: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingTop: 0,
    height: 200,
    paddingLeft: 20,
    marginVertical: 10,
    width: "100%"
  },
  btnContainer: {
    padding: 30,
    paddingTop: 10,
    paddingHorizontal: 40,
    justifyContent: "center",
    marginTop: 20
  },
  btn: {
    backgroundColor: "black",
    height: 50,
    width: "100%",
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  gQzoshAA: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  ZlVPpUZH: {
    width: 50,
    height: 25
  },
  zBplIVlt: {
    width: 150,
    height: 40
  }
});
export default AddReviewScreen;