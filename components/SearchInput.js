import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchInput(props) {
  const [text, setText] = useState("");

  const handleChangeText = text => {
    setText(text);
  };
  const handleSubmitEditing = () => {
    const { onSubmit } = props;
    if (!text) return;
    onSubmit(text);
    setText("");
  };
  const { placeholder } = props;

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: "#666",
    marginHorizontal: 10,
    borderRadius: 5
  },
  textInput: {
    flex: 1,
    color: "white"
  }
});

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

SearchInput.defaultProps = {
  placeholder: ""
};
