import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,

} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';

import {
  createStackNavigator,
} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MapsScreen from '../../components/maps/Maps';

import CreateClient from '../../components/createClient/CreateClient';

import ListClient from '../../components/listClient/ListClient';

import MathCalculate from '../../components/mathCalculate/MathCalculate'

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function CreateClientScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{paddingBottom: 10, paddingTop: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Creación de un nuevo Cliente
        </Text>
      </View>
      <CreateClient />
    </View>
  );
}

function ListClientScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{paddingBottom: 10, paddingTop: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Listado de nuestros Clientes
        </Text>
      </View>

      <ListClient />
      <MathCalculate/>
    </View>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="ListClientScreen"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="CreateClient"
        component={CreateClientScreen}
        options={{
          tabBarLabel: 'Crear Cliente',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListClientScreen"
        component={ListClientScreen}
        options={{
          tabBarLabel: 'Listar Clientes',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="android" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          tabBarLabel: 'Ubicanos',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default class Navigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer style={{backgroundColor: 'red'}}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeTab} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    padding: 10,
  },

  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },

  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
