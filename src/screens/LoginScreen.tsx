import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core' 

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text> 
    </View>
  )
} 

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

