import React from 'react';
import {Image, Text, View} from 'react-native';
import Button from '../../../components/Button/Button';
import styles from './styles';

function Splash() {
  const handlePress = () => {
    console.log('button pressed');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/splash.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={styles.title}>
          <Text style={styles.innerTitle}>All you need</Text>
        </Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <View style={styles.widthContainer}>
        <Button title="Sign Up" onPress={handlePress} />
        <Button.Transparent title="Sign In" onPress={handlePress} />
      </View>
    </View>
  );
}

export default Splash;
