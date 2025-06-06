import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../components/Header';
import CepInput from '../components/CepInput';
import AddressCard from '../components/AddressCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { fetchAddressByCep } from '../services/viaCepService';
import styles from './styles'; // Import styles from the styles.js file

const HomeScreen = () => {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCepSearch = async (cep) => {
    if (!cep || cep.length !== 8) {
      setError('CEP deve conter 8 dígitos');
      return;
    }

    setLoading(true);
    setError('');
    setAddress(null);

    try {
      const addressData = await fetchAddressByCep(cep);
      
      if (addressData.erro) {
        setError('CEP não encontrado');
      } else {
        setAddress(addressData);
      }
    } catch (err) {
      setError('Erro ao buscar CEP. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Header />
        
        <View style={styles.content}>
          <CepInput onSearch={handleCepSearch} />
          
          {loading && <LoadingSpinner />}
          
          {error && <ErrorMessage message={error} />}
          
          {address && !loading && <AddressCard address={address} />}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};



export default HomeScreen;