import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';

function Item({item}) {
  return (
    <View>
      <View style={styles.item}>
        {/*<Image source={{uri: image}} style={{height: 40, width: 40}} />*/}
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>
            <Text style={{fontWeight: 'bold'}}>Nombre: </Text> {item.name}
          </Text>
          <Text style={styles.title}>
            <Text style={{fontWeight: 'bold'}}>Apellido:</Text> {item.last_name}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>
            <Text style={{fontWeight: 'bold'}}>Edad:</Text> {item.age}
          </Text>
          <Text style={styles.title}>
            <Text style={{fontWeight: 'bold'}}>Nacimiento: </Text>
            {item.date_birth}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default class ListClient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: 0,
      count: 0,
      items: [],
      error: null,
    };
  }
  async componentDidMount() {
    console.log('EStasssq');

    const response = await fetch(`https://reto-api-rest-server.herokuapp.com/clients`);
    const json = await response.json();
    console.log('result------->>>>', json);
    this.setState({items: json});
  }

  render() {
    console.log('Items', this.state.items);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    //backgroundColor: '#BCC0C4',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: '#70136E',
    borderWidth: 2,
  },
  title: {
    fontSize: 12,
    padding: 5,
  },
});
