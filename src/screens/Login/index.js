import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {REGISTER} from '../../constants/routeName';

const LoginComponent = props => {
  const [email, setemail] = useState('');
  var Value = email;
  const{navigation} = props;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'white',
        paddingLeft: 30,
        paddingRight: 30,
      }}>
      <View style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../../assets/images/swell-logo.png')}
          style={styles.logo}
        />
      </View>
      <View
        style={{flex: 0.25, alignItems: 'center', justifyContent: 'flex-end'}}>
        <TextInput
          style={styles.email}
          placeholder="Email"
          value={Value}
          onChangeText={Value => {
            setemail(Value);
          }}
        />

        <TouchableOpacity style={styles.loginButton} onPress={login}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.45}}>
        <Text style={styles.textLink}>Forgot email?</Text>
        <Text style={styles.textLink}>Apply for an account</Text>
        <Text style={styles.textLink}>1.0.0(27)</Text>
      </View>
    </View>
  );
  function login() {
    console.log('pressed=' + Value + '=' + isEmailValid());
    // if (Value.length == 0) {
    //   warningAlertBox('Field should not be an empty');
    // } else if (!isEmailValid()) {
    //   warningAlertBox('Please enter a valid email ID');
    // }else{
    //   prop
    // }
    navigation.navigate(REGISTER)
  }
  function warningAlertBox(data) {
    Alert.alert('Attention', data, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  function isEmailValid() {
    let pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(String(Value).toLowerCase())) return true;
    else return false;
  }
};

export default LoginComponent;
