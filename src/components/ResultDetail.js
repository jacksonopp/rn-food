import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: result.image_url }}
        style={styles.imageStyle}
      />
      <Text style={styles.nameStyle}>{result.name.length > 30 ? `${result.name.substr(0, 30)}...` : result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: 'bold',
  },
  container: {
    marginLeft: 10
  }
})

export default ResultDetail