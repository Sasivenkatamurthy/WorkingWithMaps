import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { userData } from './content';

export default function Conection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connection</Text>
      {userData.map((item) => (
        <View key={item.id} style={styles.userContainer}>
          <Image source={{ uri: item.profilePicture }} style={styles.profilePicture} />
          <Text style={styles.userName}>Name: {item.name}</Text>
          <Text style={styles.userStatus}>Status: {item.status}</Text>
          <Text style={styles.userPhone}>Mobile: {item.phone}</Text>
        </View>
      ))}
      <Text style={styles.doneText}>Done</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userContainer: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc', 
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, 
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 16,
    color: '#555', 
  },
  userPhone: {
    fontSize: 16,
    color: '#333', 
  },
  doneText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4CAF50',
  },
});
