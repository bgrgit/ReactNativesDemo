import {View, Text,  TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {
 
  SETTINGS
} from '../../constants/routeName';
const HomeTab = props => {
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
   
      <View
        style={{flex: 0.25, alignItems: 'center', justifyContent: 'flex-end'}}>
     

        <TouchableOpacity style={styles.loginButton} onPress={moveToNextScreen}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
  function moveToNextScreen() {
  console.log(navigation.navigate)
  navigation.navigate(SETTINGS)
  }
};

export default HomeTab;
