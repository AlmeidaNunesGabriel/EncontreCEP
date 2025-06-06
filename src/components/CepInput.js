import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CepInput = ({ onSearch }) => {
  const [cep, setCep] = useState('');

  const formatCep = (text) => {
    // Remove tudo que não for número
    const numbers = text.replace(/\D/g, '');
    
    // Limita a 8 dígitos
    const limited = numbers.substring(0, 8);
    
    // Formata com hífen (00000-000)
    if (limited.length > 5) {
      return `${limited.substring(0, 5)}-${limited.substring(5)}`;
    }
    
    return limited;
  };

  const handleCepChange = (text) => {
    const formattedCep = formatCep(text);
    setCep(formattedCep);
  };

  const handleSearch = () => {
    // Remove formatação para enviar apenas números
    const cleanCep = cep.replace(/\D/g, '');
    onSearch(cleanCep);
  };

  const isValidCep = cep.replace(/\D/g, '').length === 8;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP (00000-000)"
        value={cep}
        onChangeText={handleCepChange}
        keyboardType="numeric"
        maxLength={9}
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
      
      <TouchableOpacity
        style={[styles.button, !isValidCep && styles.buttonDisabled]}
        onPress={handleSearch}
        disabled={!isValidCep}
      >
        <Text style={[styles.buttonText, !isValidCep && styles.buttonTextDisabled]}>
          Buscar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextDisabled: {
    color: '#999',
  },
});

export default CepInput;