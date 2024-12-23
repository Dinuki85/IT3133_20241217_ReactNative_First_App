/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform  } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/Home';
import ContactUs from './components/ContactUs';*/



/*export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.container}>
           

            <StatusBar style="auto" />
          </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});*/

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

const CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'INR', 'CNY'];

export default function App() {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchExchangeRate = async () => {
    if (amount === '') return;
    setIsLoading(true);

    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      const rate = response.data.rates[targetCurrency];
      setExchangeRate(rate);
      setConvertedAmount(rate * parseFloat(amount));
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      setConvertedAmount(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (amount && baseCurrency && targetCurrency) {
      fetchExchangeRate();
    }
  }, [baseCurrency, targetCurrency, amount]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>

      <ScrollView contentContainerStyle={styles.formContainer}>
        
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <Text style={styles.label}>Base Currency</Text>
        <View style={styles.pickerContainer}>
          {CURRENCIES.map((currency) => (
            <Button
              key={currency}
              title={currency}
              onPress={() => setBaseCurrency(currency)}
              color={baseCurrency === currency ? 'blue' : 'gray'}
            />
          ))}
        </View>

       
        <Text style={styles.label}>Target Currency</Text>
        <View style={styles.pickerContainer}>
          {CURRENCIES.map((currency) => (
            <Button
              key={currency}
              title={currency}
              onPress={() => setTargetCurrency(currency)}
              color={targetCurrency === currency ? 'blue' : 'gray'}
            />
          ))}
        </View>

        
        <Button title="Convert" onPress={fetchExchangeRate} />

      
        {isLoading ? (
          <ActivityIndicator size="large" color="#6200ee" style={styles.loader} />
        ) : (
          convertedAmount !== null && (
            <Text style={styles.result}>
              {amount} {baseCurrency} = {convertedAmount.toFixed(2)} {targetCurrency}
            </Text>
          )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

