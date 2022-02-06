import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const HomeScreen: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You do not have any notes.</Text> 
      </View>
      <View style={styles.plusIcon}>
        <Icon 
          name="plus" 
          size={50} 
          color="springgreen" 
          onPress={() => navigation.navigate('AddNotes')}
        />
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
  },
  plusIcon: {
    alignItems: 'flex-end',
    marginRight: 10,
  }
})

