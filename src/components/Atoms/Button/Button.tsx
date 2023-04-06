import clsx from 'clsx';
import {styled} from 'nativewind';
import React, {useMemo} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Text from '../Text/Text';

const baseStyles = clsx('flex items-center justify-center');

const buttonTypes = {
  primary: clsx('bg-purple', baseStyles),
  secondary: clsx('bg-grey-dark', baseStyles),
  text: clsx('bg-transparent border-transparent', baseStyles),
};

const textType = {
  primary: styled(Text, clsx('text-center text-white font-bold')),
  secondary: styled(Text, clsx('text-center text-white font-bold')),
  text: styled(Text, clsx('text-center text-purple font-bold')),
};

const Container = styled(TouchableOpacity, clsx('py-4 rounded-lg'));

interface Props extends Pick<TouchableOpacityProps, 'onPress'> {
  buttonType?: 'primary' | 'secondary' | 'text';
  text?: string;
  children?: JSX.Element;
}

function Button({buttonType = 'primary', text, children, onPress}: Props) {
  const TextBody = useMemo(() => textType[buttonType], [buttonType]);

  return (
    <Container
      className={buttonTypes[buttonType]}
      onPress={onPress}
      activeOpacity={0.8}>
      {text && !children && <TextBody>{text}</TextBody>}
      {children && children}
    </Container>
  );
}

export default React.memo(Button);
