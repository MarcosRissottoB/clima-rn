import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
} from 'react-native';

// Components
import Form from './components/Form';
import Weather from './components/Weather';

const App = () => {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View style={styles.app}>
          <View style={styles.content}>
            <Form search={search} setSearch={setSearch} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: '2.5%',
  },
});

export default App;
