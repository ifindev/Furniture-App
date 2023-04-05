import clsx from 'clsx';
import {styled} from 'nativewind';
import React, {useMemo} from 'react';
import {Pressable, PressableProps} from 'react-native';
import Text from '../Text/Text';

const buttonTypes = {
  solid: clsx('bg-purple'),
  text: clsx('bg-transparent border-transparent'),
};

const textType = {
  solid: styled(Text.Body16, clsx('text-center text-white font-bold')),
  text: styled(Text.Body16, clsx('text-center text-purple font-bold')),
};

const Container = styled(Pressable, clsx('py-5 rounded-lg'));

interface Props extends Pick<PressableProps, 'onPress'> {
  buttonType?: 'solid' | 'text';
  text: string;
}

export default function Button({buttonType = 'solid', text, onPress}: Props) {
  const TextBody = useMemo(() => textType[buttonType], [buttonType]);

  return (
    <Container className={buttonTypes[buttonType]} onPress={onPress}>
      <TextBody>{text}</TextBody>
    </Container>
  );
}
