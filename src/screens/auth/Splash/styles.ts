import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    padding: 36,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100%',
    gap: 55,
  },
  widthContainer: {
    width: '100%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },
});

export default styles;
