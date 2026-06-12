import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const animals = [
  { id: '1', name: 'Kucing' },
  { id: '2', name: 'Anjing' },
  { id: '3', name: 'Gajah' },
  { id: '4', name: 'Harimau' },
  { id: '5', name: 'Singa' },
  { id: '6', name: 'Kelinci' },
  { id: '7', name: 'Burung' },
  { id: '8', name: 'Ikan' },
  { id: '9', name: 'Kuda' },
  { id: '10', name: 'Zebra' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Hewan</Text>

      <FlatList
        data={animals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 18,
  },
});