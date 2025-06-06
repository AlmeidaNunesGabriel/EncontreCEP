import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddressCard = ({ address }) => {
  const formatCep = (cep) => {
    if (cep && cep.length === 8) {
      return `${cep.substring(0, 5)}-${cep.substring(5)}`;
    }
    return cep;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Endereço Encontrado</Text>
      
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>CEP:</Text>
          <Text style={styles.value}>{formatCep(address.cep)}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Logradouro:</Text>
          <Text style={styles.value}>{address.logradouro || 'Não informado'}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Bairro:</Text>
          <Text style={styles.value}>{address.bairro || 'Não informado'}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Cidade:</Text>
          <Text style={styles.value}>{address.localidade || 'Não informado'}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Estado:</Text>
          <Text style={styles.value}>{address.uf || 'Não informado'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoContainer: {
    gap: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: '#333',
    flex: 2,
    textAlign: 'right',
  },
});

export default AddressCard;