import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({ character }) {
  // Función para definir el color del estado
  const getStatusColor = (status) => {
    switch (status) {
      case 'Alive':
        return '#55cc44';
      case 'Dead':
        return '#d63d2e';
      default:
        return '#9e9e9e';
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>{character.name}</Text>
        
        <View style={styles.statusContainer}>
          <View style={[styles.statusDot, { backgroundColor: getStatusColor(character.status) }]} />
          <Text style={styles.statusText}>
            {character.status} - {character.species}
          </Text>
        </View>

        <Text style={styles.label}>Última ubicación conocida:</Text>
        <Text style={styles.value} numberOfLines={1}>{character.location?.name}</Text>

        <Text style={styles.label}>Origen:</Text>
        <Text style={styles.value} numberOfLines={1}>{character.origin?.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3c3e44',
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  name: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '500',
  },
  label: {
    color: '#9e9e9e',
    fontSize: 11,
    marginTop: 6,
  },
  value: {
    color: '#f5f5f5',
    fontSize: 13,
  },
});