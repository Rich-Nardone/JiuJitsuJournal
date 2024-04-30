import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { Header } from 'react-native-elements';
export default function HomeScreen({ navigation }) {
  return (
    <Header style={styles.header}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('NewMove')}>
        <Text style={styles.text}>New Move</Text>
      </Pressable>
      <Text>jiu jitsu journal</Text>
      <StatusBar style="auto" />
      </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    },
  input: {
    height: 40,
    width:'75%',
    margin: 6,
    borderWidth: .5,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 150
  },
});