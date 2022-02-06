import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

interface Message {
  created: boolean,
}

const AddNotesScreen: React.FC = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.plusIcon}>
        <Icon 
          name="circle-with-cross" 
          size={50} 
          color="#569a37" 
          onPress={() => navigation.push('Home', {
            created: false,
          })}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add</Text> 
      </View>
      <View style={styles.plusIcon}>
        <Icon 
          name="check" 
          size={50} 
          color="#569a37" 
          onPress={() => navigation.navigate('Home', {
            created: true,
          })}
        />
      </View>
    </View>
  )
} 

export default AddNotesScreen

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

