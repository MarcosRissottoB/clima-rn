import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Form = ({search, setSearch}) => {
  const [btnAnimate] = useState(new Animated.Value(1));
  const {city, country} = search;
  const startAnimate = () => {
    console.log('startAnimate');
    Animated.spring(btnAnimate, {
      toValue: 0.75,
    }).start();
  };
  const endAnimate = () => {
    console.log('endAnimate');
    Animated.spring(btnAnimate, {
      toValue: 1,
      friction: 4,
      tension: 30,
    }).start();
  };
  const styleAnimate = {
    transform: [{scale: btnAnimate}],
  };

  return (
    <>
      <View style={styles.form}>
        <View>
          <TextInput
            placeholder="Ciudad"
            placeholderTextColor="#666"
            onChangeText={(city) => setSearch({...search, city})}
            style={styles.input}
          />
        </View>
        <View>
          <Picker
            selectedValue={country}
            onValueChange={(country) => setSearch({...search, country})}
            itemStyle={{height: 120, backgroundColor: '#FFF'}}>
            <Picker.Item label="Seleccione un país" value="" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="México" value="MX" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Francia" value="FR" />
            <Picker.Item label="España" value="ES" />
          </Picker>
        </View>
        <TouchableWithoutFeedback
          onPressIn={() => startAnimate()}
          onPressOut={() => endAnimate()}>
          <Animated.View style={[styles.btnSearch, styleAnimate]}>
            <Text style={styles.textSearch}>Buscar clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#FFF',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  btnSearch: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
  },
  textSearch: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Form;
