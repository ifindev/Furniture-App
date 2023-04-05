import {StyleSheet, TextStyle} from 'react-native';
import colors from '../../utils/colors';

const baseFont: TextStyle = {
  fontWeight: '700',
  fontSize: 16,
  textAlign: 'center',
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.purple,
    paddingVertical: 20,
    borderRadius: 8,
  },
  buttonTransparent: {
    backgroundColor: 'transparent',
    paddingVertical: 30,
  },
  solidText: {
    color: colors.white,
    ...baseFont,
  },
  transparentText: {
    color: colors.purple,
    ...baseFont,
  },
});

export default styles;
