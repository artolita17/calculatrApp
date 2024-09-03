import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorScreen = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(''); // Initialize result as an empty string

  const calculate = (operation) => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (isNaN(num1) || isNaN(num2)) {
      setResult('Invalid input');
      return;
    }
    switch (operation) {
      case 'add':
        setResult(num1 + num2);
        break;
      case 'subtract':
        setResult(num1 - num2);
        break;
      case 'multiply':
        setResult(num1 * num2);
        break;
      case 'divide':
        if (num2 === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        setResult('Unknown operation');
    }
  };

  const reset = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult(''); // Reset result to an empty string
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter First Number"
          placeholderTextColor="gray" // Set placeholder text color
          value={firstNumber}
          onChangeText={setFirstNumber}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Second Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter Second Number"
          placeholderTextColor="gray" // Set placeholder text color
          value={secondNumber}
          onChangeText={setSecondNumber}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => calculate('add')}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => calculate('subtract')}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => calculate('multiply')}>
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => calculate('divide')}>
          <Text style={styles.buttonText}>Divide</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.result}>Result: {result}</Text> {/* Always display result */}

      <View style={styles.resetButtonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={reset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginRight: 8,
    width: 120,
  },
  input: {
    height: 40,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray', // Set border bottom color
    paddingHorizontal: 8,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 5,
    width: 80,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resetButtonContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  resetButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 5,
    width: 80,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#007BFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default CalculatorScreen;
