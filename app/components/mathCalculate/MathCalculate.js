import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class MathCalculate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: 0,
      count: 0,
      values: [],
      error: null,
    };
  }
  async componentDidMount() {
    console.log('Ya');

    const response = await fetch(
      `https://reto-api-rest-server.herokuapp.com/kpideclientes`,
    );
    const json = await response.json();
    console.log('result------->>>>', json);
    this.setState({values: json});
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.values.length > 0 ?

          <View style={{paddingBottom: 10, paddingTop: 20}}>
          <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>Cálculos</Text>
          <Text style={{paddingLeft: 30,fontSize: 15, fontWeight: 'bold'}}>
            Promedio de edad: {this.state.values[0].avg_age} años
          </Text>
          <Text style={{paddingLeft: 30, fontSize: 15, fontWeight: 'bold'}}>
            Desviacion Standar: {this.state.values[0].std_age}
          </Text>
        </View>
        :
        null

        }
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
