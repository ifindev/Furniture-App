import {StyleSheet, TextStyle} from 'react-native';

const baseFont: TextStyle = {
  fontWeight: '700',
  fontSize: 16,
  textAlign: 'center',
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4F63AC',
    paddingVertical: 20,
    borderRadius: 8,
  },
  buttonTransparent: {
    backgroundColor: 'transparent',
    paddingVertical: 30,
  },
  solidText: {
    color: '#fff',
    ...baseFont,
  },
  transparentText: {
    color: '#4F63AC',
    ...baseFont,
  },
});

export default styles;
