import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}> 

      <Image source={require('../images/LEHAR.png')} style={styles.logo} />
      <Text style={styles.title}>LAHAR</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>OR</Text> 

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity> 

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db', // Replace with your desired background color
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#fff',
  },
  button: {
    backgroundColor: '#f1c40f', // Replace with your desired button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    marginTop: 20,
    marginBottom: 10,
    color: '#fff',
  },
});

export default HomeScreen;