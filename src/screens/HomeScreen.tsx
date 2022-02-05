import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You do not have any notes.</Text> 
      </View>
    </View>
  )
} 

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 20
  }
})

