
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Button, Text, Alert, TextInput, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './pages/home';
import Login from './pages/login';
import signup from './pages/Signup';
import { Icon } from '@rneui/themed';


const TabNav = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <TabNav.Navigator initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <TabNav.Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />),
          }} />

<TabNav.Screen name="Login" component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="logout" color={color} size={size} />),
          }} />

<TabNav.Screen name="signup" component={signup}
          options={{
            tabBarLabel: 'signup',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />),
          }} />

        <TabNav.Screen name="Profile" component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />),
          }} />

        <TabNav.Screen name="book Mark" component={Setting}
          options={{
            tabBarLabel: 'bookmark',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={size} />),
          }} />

        <TabNav.Screen name="Updates" component={Updates}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />)
          }} />

        {/* tabBarBadge: 3 */}


      </TabNav.Navigator>
    </NavigationContainer>

  );
}



const Updates = () => {
  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Scrollable Content</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam. Sed nisi.
        </Text>
        {/* Add more content as needed */}
        <Text style={styles.Latter}>Why Government or Bank Jobs?</Text>
        <Text>
          In India, the Government sector is one of the largest employment providing sectors and every year lakhs of candidates are given an opportunity to join this sector and enjoy the perks of being a Government employee.

          Given below are the major benefits of cracking the various competitive exams to get appointed in the Government, Insurance or Banking sector:

          Job Security: There is a hundred percent job security for employees in the Government sector
          Financial Security: It is a well-known fact that the income, perks, benefits and allowances contribute as one of the major reasons for the attraction of candidates in this sector
          Status Quo: One of the most respectable industries to work in is the Government or the Banking industry
          Work-Life Balance: With scheduled working hours, there is a proper balance between work and personal life
          Contentment: Qualifying the competitive exams and joining any respectable Organisation gives the candidates a sense of achievement and contentment
        </Text>
        <Text>
          SSC CGL (Combined Graduate Level Exam).
          SSC CHSL (Combined Higher Secondary Level).
          SSC JE (Junior Engineer).
          SSC CPO (Central Police Organisation).
          SSC GD (General Duty Constable).
          SSC MTS (Multi Tasking Staff)
          SSC Stenographer
          RRB ALP (Assistant Loco Pilot)
          RRB NTPC (Non-Technical Popular Categories)
          RRB JE (Junior Engineer)
          RRB Grade D
          UPSC CAPF (Central Armed Police Forces Assistant Commandant)
          SBI PO (Probationary Officer)
          SBI SO (Specialist Officer)
          SBI Clerk (Junior Associate and Customer Support)
          IBPS PO (Probationary Officer)
          IBPS SO (Specialist Officer)
          IBPS Clerk
          IBPS RRB (Regional Rural Bank Exam)
          RBI Grade B (Officer Scale)
          RBI Assistant
          NIACL Assistant
          NIACL AO (Administrative Officer)
          NICL Exam
          LIC AAO (Assistant Administrative Officer)
          LIC ADO (Apprentice Development Officer)
          LIC HFL (Housing Finance Limited)
          FCI Manager Exam
          National Defence Academy Exam (NDA)
          Combined Defence Service Exam (CDS)
          Air Force Common Admission Test (AFCAT)
          National Bank for Agriculture and Rural Development (NABARD)
          Small Industries Development Bank of India Officers Grade A (SIDBI)
          Common Aptitude Test (CAT)
          Assistant Central Intelligence Officer in Intelligence Bureau (ACIO IB)
          Indian Economic Exam Service
          Combined Defence Services Examination (CDSE)
          Graduate Aptitude Test in Engineering (GATE)
        </Text>
      </View>
    </ScrollView>
  )
}

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Latter}>PROFILE</Text>
      <View>
        <Text style={styles.nameSize}>
          <Icon style={styles.icones} name="account-circle" size={40} color="#333" />
          <Button title="Rupam Kuyla" onPress={RupamKuyla} /></Text>
      </View>
      <View>
        <Text style={styles.nameSize}>
          <Icon style={styles.icones} name="account-circle" size={40} color="#333" />
          <Button title="Ashis Mahata" onPress={AshisMahata} /></Text>
      </View>
      <View >
        <Text style={styles.nameSize}>
          <Icon style={styles.icones} name="account-circle" size={40} color="#333" />
          <Button title="Biswajit Kolya" onPress={BiswajitKolya} /></Text>
      </View>
      <View>
        <Text style={styles.nameSize}>
          <Icon style={styles.icones} name="account-circle" size={40} color="#333" />
          <Button title="Biswajit Bera" onPress={BiswajitBera} /></Text>
      </View>
      <View>
        <Text style={styles.nameSize}>
          <Icon style={styles.icones} name="account-circle" size={40} color="#333" />
          <Button title="Surajit Sau" onPress={SurajitSau} /></Text>
      </View>
     
      <View>
        <Text style={styles.nameSize}>
          <Icon style={styles.icones} name="account-circle" size={40} color="#333" />
          <Button title="Kamal Das" onPress={KamalDas} /></Text>
      </View>
      <View>
        <Text style={styles.nameSize}>
          <Icon style={styles.icones} name="account-circle" size={40} color="#333" />
          <Button title="Swarup Manay" onPress={SwarapManay} /></Text>
        <Text style={styles.nameSize}>
          <Icon style={styles.icones} name="account-circle" size={40} color="#333" />
          <Button title="Narayan Maity" onPress={NarayanMaity} /></Text>
      </View>
    </View>
  )
}

const BiswajitKolya = () => {
  Alert.alert("Address:-Anandapur,Paschim medinipur, West Bangal")
}
const NarayanMaity = () => {
  Alert.alert("Address:-Anandapur,Paschim medinipur, West Bangal")
}
const BiswajitBera = () => {
  Alert.alert("Address:-Paskura,Purba medinipur, West Bangal")
}
const RupamKuyla = () => {
  Alert.alert("Address:-Anandapur,Paschim medinipur, West Bangal")
}
const SurajitSau = () => {
  Alert.alert("Address:-Anandapur,Paschim medinipur, West Bangal")
}
const AshisMahata = () => {
  Alert.alert("Address:-Anandapur,Paschim medinipur, West Bangal")
}
const KamalDas = () => {
  Alert.alert("Address:-Anandapur,Paschim medinipur, West Bangal")
}
const SwarapManay = () => {
  Alert.alert("Address:-Anandapur,Paschim medinipur, West Bangal")
}

// const [fdata, setFdata] = useState({
//   name: '',
// })

const Setting = () => {
  const [name, setName] = useState('');
  const handleChangeName = (text) => {
    setName(text);

  };
  return (
    <View>
      <Text>book Mark setting</Text>
      <View>
        <Text style={styles.nameSize}>Details Information</Text>
      </View>
      <View>
        <TextInput value={name} onChangeText={handleChangeName} placeholder="Enter your Input" />
        <Button title="Save" onPress={() => {
          Alert.alert(name);
        }}></Button>
      </View>
    </View>
  )
}




export default App;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'relative'

  },
  Latter: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameSize: {
    backgroundColor: "#FFB0CC",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginVertical: 8,

  },
  icones: {
    width: 40,
    height: 40,
    top: 10
  },
  formgroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginVertical: 8,
  },

});  


 // "react-native-vector-icons": "^10.0.3",
 //    "react-native-vector-icons": "https://github.com/react-native-vector-icons/MaterialCommunityIcons.git"