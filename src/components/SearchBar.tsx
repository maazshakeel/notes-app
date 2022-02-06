import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Appbar, Title } from 'react-native-paper'

interface Props {
  titleText: string;
}

const SearchBar: React.FC = ({ titleText }) => {
    return (
      <View>
        <TextInput 
          placeholder="Hello"
        />
      </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#212529',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff'
    },
    input: {
      borderWidth: 5,
      borderColor: 'white',
      marginTop: 50
    }
})

export default SearchBar
