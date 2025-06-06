const VIACEP_BASE_URL = 'https://viacep.com.br/ws';

export const fetchAddressByCep = async (cep) => {
  try {
    const response = await fetch(`${VIACEP_BASE_URL}/${cep}/json/`);
    
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
    throw error;
  }
};