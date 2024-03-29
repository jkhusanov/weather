import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function SearchInput(props) {
  const [text, setText] = useState('');

  const handleChangeText = text => {
    setText(text);
  };

  handleSubmitEditing = () => {
    const { onSubmit } = props;

    if (!text) return;

    onSubmit(text);
    setText('');
  };

  const { placeholder } = props;
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={true}
        placeholder={placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        value={text}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: '',
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 300,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: { flex: 1, color: 'white' },
});
