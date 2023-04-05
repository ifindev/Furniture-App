import clsx from 'clsx';
import {styled} from 'nativewind';
import React from 'react';
import {Pressable} from 'react-native';
import Checkmark from '../../../assets/check-mark.svg';

const Container = styled(
  Pressable,
  clsx(
    'flex items-center justify-center rounded border border-grey-light w-[22px] h-[22px]',
  ),
);

type Props = {
  checked: boolean;
  onChecked: () => void;
};

export default function Checkbox({checked, onChecked}: Props) {
  return (
    <Container className={clsx(checked && 'bg-grey-light')} onPress={onChecked}>
      {checked && <Checkmark width={15} height={15} />}
    </Container>
  );
}
