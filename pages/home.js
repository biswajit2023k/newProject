import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import React from 'react'

const Home = () => {
  return (
    <ScrollView>
    <View style={styles.container} >
      <Text style={styles.bigText}>WELLCOM TO MAL MASE</Text>
      <Image
         style={styles.logo}
        source={require('../assets/image/a3.jpeg')}/>
       <Image style={styles.tinyLogo}
        source={require('../assets/image/b1.jpeg')}/>
         <Image style={styles.tinyLogoWrite}
        source={require('../assets/image/abc.jpeg')}/>
         <Image style={styles.tinyLogo}
        source={require('../assets/image/a1.jpeg')}/>
         <Image style={styles.tinyLogoWrite}
        source={require('../assets/image/a2.jpeg')}/>
         <Image style={styles.tinyLogo}
        source={require('../assets/image/a4.jpeg')}/>
          <Image style={styles.tinyLogoWrite}
        source={require('../assets/image/a5.jpeg')}/>
          <Image style={styles.tinyLogo}
        source={require('../assets/image/a6.jpeg')}/>
          <Image style={styles.tinyLogoWrite}
        source={require('../assets/image/a7.jpeg')}/>
        <Image style={styles.tinyLogo}
        source={require('../assets/image/a8.jpeg')}/>
    </View>
    </ScrollView>
  )
}

 
export default Home


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    borderRadius:10,
    width: 250,
    height: 250,
    marginLeft: 150,
  },
  tinyLogoWrite: {
    width: 250,
    height: 250,
    marginRight: 150,
    borderRadius: 50,
  },
  logo: {
    width: 400,
    height: 300,
    borderRadius: 10,
 },
 bigText: {
  fontSize: 24, 
  fontWeight: 'bold',
  backgroundColor: 'orange'
 }
});
  
