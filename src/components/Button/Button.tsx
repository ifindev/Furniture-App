import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  onPress: () => void;
};

function Button({title, onPress}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.solidText}>{title}</Text>
    </TouchableOpacity>
  );
}

function Transparent({title, onPress}: Props) {
  return (
    <Pressable style={styles.buttonTransparent} onPress={onPress}>
      <Text style={styles.transparentText}>{title}</Text>
    </Pressable>
  );
}

export default Object.assign(Button, {Transparent});
