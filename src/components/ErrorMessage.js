import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffebee',
    borderWidth: 1,
    borderColor: '#f44336',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    color: '#d32f2f',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ErrorMessage;