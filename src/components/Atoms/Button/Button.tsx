import clsx from 'clsx';
import {styled} from 'nativewind';
import React, {useMemo} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Text from '../Text/Text';

const buttonTypes = {
  solid: clsx('bg-purple'),
  text: clsx('bg-transparent border-transparent'),
};

const textType = {
  solid: styled(Text, clsx('text-center text-white font-bold')),
  text: styled(Text, clsx('text-center text-purple font-bold')),
};

const Container = styled(TouchableOpacity, clsx('py-5 rounded-lg'));

interface Props extends Pick<TouchableOpacityProps, 'onPress'> {
  buttonType?: 'solid' | 'text';
  text: string;
}

export default function Button({buttonType = 'solid', text, onPress}: Props) {
  const TextBody = useMemo(() => textType[buttonType], [buttonType]);

  return (
    <Container
      className={buttonTypes[buttonType]}
      onPress={onPress}
      activeOpacity={0.8}>
      <TextBody>{text}</TextBody>
    </Container>
  );
}
