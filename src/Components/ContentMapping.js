import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { userData } from './content';
export default function ContentMapping() {
  return (
    <SafeAreaView >
    <FlatList
      data={userData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        console.log('Rendering item:', item); 
        return (
          <View style={{ backgroundColor: '#000', padding: 10 }}>
            <Text style={{ color: '#fff' }}>Name: {item.name}</Text>
            <Text style={{ color: '#fff' }}>Country:{item.country}</Text> 
            <Text style={{ color: '#fff' }}>Status: {item.status}</Text>
            <Text style={{ color: '#fff' }}>Date of Birth: {item.dateOfBirth}</Text>
            <Text style={{ color: '#fff' }}>Email: {item.email}</Text>
            <Text style={{ color: '#fff' }}>Phone: {item.phone}</Text> 
          </View>
        );
      }}
    />
  </SafeAreaView>
  )
}
