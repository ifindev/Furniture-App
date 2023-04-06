import clsx from 'clsx';
import {styled} from 'nativewind';
import React from 'react';
import {Text, View} from 'react-native';

const Container = styled(View, clsx('flex flex-row items-center'));
const Line = styled(View, clsx('bg-grey-light h-px flex-1'));
const TextContent = styled(
  Text,
  clsx('text-purple font-semibold text-base mx-2'),
);

type Props = {
  text: string;
};

export default function Separator({text}: Props) {
  return (
    <Container>
      <Line />
      <TextContent>{text}</TextContent>
      <Line />
    </Container>
  );
}
