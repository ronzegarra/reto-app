var moment = require('moment');
moment.locale('es');

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  Image,
  Switch,
  Picker,
  ScrollView,
  Dimensions,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';

import ModalSelector from 'react-native-modal-selector';

import DateTimePicker from 'react-native-modal-datetime-picker';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//import format from '../../tools/format';
//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';
//import actions from '../../redux/actions';
//import CargandoView from '../Common/CargandoView';
//import BarraNavegacion from '../Common/BarraNavegacionView';
////import SofiaBubble from '../Sofia/components/buttonBubbleView'
//import theme from '../../theme/theme';

//import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

var {width, height} = Dimensions.get('window');

export default class CreateClient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: [
        {key: 1, label: '000000000231456'},
        {key: 2, label: '000000000231455'},
        {key: 3, label: '000000000231457'},
      ],

      originAccount: '',
      destineAccount: '',
      fecha: 'Selecciona Fecha',
      importe: '',
      referencia: '',
      sendMail: false,

      name: '',
      lastname: '',
      age: '',
    };
  }

  changeOriginAcount = account => {
    console.warn(account);
    this.setState({originAccount: account});
  };

  changeDestineAccount = account => {
    console.warn(account);
    this.setState({destineAccount: account});
  };

  showDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: true});
  };

  hideDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: false});
  };

  handleDatePicked = date => {
    console.log('A date has been picked: ', date);

    this.setState({
      fecha: moment(date).format('DD/MM/YYYY'),
      fechaFormat: moment(date).format('YY/MM/DD'),
    });

    this.hideDateTimePicker();
  };

  changeImporte = importe => {
    this.setState({importe});
  };

  changeReferencia = referencia => {
    this.setState({referencia});
  };

  doTransfer = () => {
    console.warn('Transferes');

    let data = {
      originAccount: this.state.originAccount.label,
      destineAccount: this.state.destineAccount.label,
      fecha: this.state.fecha,
      importe: this.state.importe,
      referencia: this.state.referencia,
      mail: this.state.sendMail,
    };

    console.warn('data', data);

    this.props.navigation.navigate('Second', {data});
  };

  changeName = name => {
    this.setState({name});
  };

  changeLastName = lastname => {
    this.setState({lastname});
  };

  changeAge = age => {
    this.setState({age});
  };

  doCancel() {

    console.log('CANCEL')

    this.setState({
      name: '',
      lastname: '',
      age: '',
      fecha: 'Selecciona Fecha',
    });
  }
  doConfirm() {
   
    let data = {
      name: this.state.name,
      last_name: this.state.lastname,
      age: this.state.age,
      date_birth: this.state.fecha,
    };

    console.warn('DATA-->>', data);
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.viewForm}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 5,
              }}>
              <View style={{flexDirection: 'column', alignSelf: 'stretch'}}>
                <Text style={styles.titleInput}>Nombre</Text>
                <View style={[styles.viewInput, {height: 35}]}>
                  <TextInput
                    underlineColorAndroid={'transparent'}
                    style={[styles.picker, {height: 40, borderRadius: 6}]}
                    onChangeText={name => this.changeName(name)}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 5,
              }}>
              <View style={{flexDirection: 'column', alignSelf: 'stretch'}}>
                <Text style={styles.titleInput}>Apellido</Text>
                <View style={[styles.viewInput, {height: 35}]}>
                  <TextInput
                    underlineColorAndroid={'transparent'}
                    style={[styles.picker, {height: 40, borderRadius: 6}]}
                    onChangeText={lastname => this.changeLastName(lastname)}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 5,
              }}>
              <View style={{flexDirection: 'column', alignSelf: 'stretch'}}>
                <Text style={styles.titleInput}>Edad</Text>
                <View style={[styles.viewInput, {height: 35}]}>
                  <TextInput
                    underlineColorAndroid={'transparent'}
                    keyboardType="numeric"
                    style={[styles.picker, {height: 40, borderRadius: 6}]}
                    onChangeText={age => this.changeAge(age)}
                  />
                </View>
              </View>
            </View>

            <Text style={styles.titleInput}>Fecha de Nacimiento</Text>
            <TouchableWithoutFeedback onPress={this.showDateTimePicker}>
              <View style={styles.viewCalendar}>
                <Text Text style={styles.title}>
                  {this.state.fecha}
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 20,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.botonCancel}
                onPress={() => this.doCancel()}>
                <Text style={styles.textoBoton}>CANCELAR</Text>
              </TouchableOpacity>
              <View style={{width: 5}} />
              <TouchableOpacity
                style={styles.boton}
                onPress={() => this.doConfirm()}>
                <Text style={styles.textoBoton}>CONFIRMAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewInput: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 2,
    marginBottom: 5,
  },

  steps: {
    height: 10,
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  boton: {
    backgroundColor: '#000000',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    marginTop: 0,
  },

  botonCancel: {
    backgroundColor: '#C8161D',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: '#C8161D',
    borderRadius: 4,
    marginTop: 0,
  },

  textoBoton: {
    fontSize: 16,
    color: '#FFFFFF',
  },

  picker: {
    alignSelf: 'stretch',
    width: width * 0.8,
    backgroundColor: '#ECECEC',
    //backgroundColor: 'green',
    paddingLeft: 5,
    borderRadius: 2,
    height: 35,
  },

  pickerModal: {
    alignSelf: 'stretch',
    width: width * 0.8,
    backgroundColor: '#ECECEC',
    //backgroundColor: 'green',
    //borderRadius:5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
    height: 38,
    paddingLeft: 5,
  },

  subTitle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },

  titleInput: {
    textAlign: 'left',
    color: 'black',
    fontSize: 12,
    fontWeight: '100',
    marginBottom: 2,
  },

  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  viewMenu: {
    //flex: 1,
    flexDirection: 'column',
    paddingTop: 15,
    //flexWrap: 'wrap',
  },

  viewForm: {
    flexDirection: 'column',
    marginTop: 20,
    padding: 20,
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1,
  },

  selectStyle: {
    flex: 1,
    borderWidth: 0,
    padding: 7,
    flexDirection: 'row',
  },
  touchableStyle: {
    flexDirection: 'row',
  },

  selectTextStyle: {
    fontSize: 16,
    textAlign: 'left',
  },

  viewCalendar: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 2,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
  },
});
