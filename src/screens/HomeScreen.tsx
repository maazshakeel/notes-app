import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
<<<<<<< HEAD
=======
import Icon from 'react-native-vector-icons/FontAwesome'
>>>>>>> ef59b421d547536c5b27e16dc0a4b68668c72df8

const HomeScreen: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You do not have any notes.</Text> 
      </View>
<<<<<<< HEAD
=======
      <View style={styles.plusIcon}>
        <Icon 
          name="plus" 
          size={50} 
          color="springgreen" 
          onPress={() => navigation.navigate('AddNotes')}
        />
      </View>
>>>>>>> ef59b421d547536c5b27e16dc0a4b68668c72df8
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
<<<<<<< HEAD
=======
  },
  plusIcon: {
    alignItems: 'flex-end',
    marginRight: 10,
>>>>>>> ef59b421d547536c5b27e16dc0a4b68668c72df8
  }
})

