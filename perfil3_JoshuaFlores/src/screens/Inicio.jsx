import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';

export default function Inicio() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#202329" />
      
      <View style={styles.card}>
        {/* Avatar/Icono superior */}
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/images (2).jpg')}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.title}>Api Rick And Morty</Text>
        <View style={styles.divider} />

        {/* Información del estudiante */}
        <View style={styles.infoGroup}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>Joshua Alfredo Flores Deleon</Text>
        </View>

        <View style={styles.infoGroup}>
          <Text style={styles.label}>Carnet:</Text>
          <Text style={styles.value}>20240228</Text>
        </View>

        <View style={styles.infoGroup}>
          <Text style={styles.label}>Sección y Grupo:</Text>
          <Text style={styles.value}>3° año, grupo 1</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202329',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#3c3e44',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E6F4FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    overflow: 'hidden',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00ff97',
    marginBottom: 8,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#4f535d',
    marginVertical: 12,
  },
  infoGroup: {
    width: '100%',
    marginVertical: 6,
  },
  label: {
    fontSize: 12,
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
    marginTop: 2,
  },
});