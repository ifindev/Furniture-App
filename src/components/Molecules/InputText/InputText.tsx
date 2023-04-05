import clsx from 'clsx';
import {styled} from 'nativewind';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Text} from '../../Atoms';

const InputContainer = styled(
  View,
  clsx('border border-grey-light rounded-[14px]'),
);

const Label = styled(Text, clsx('text-purple font-semibold mb-4'));

type Props = {
  label: string;
  value: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
};

export default function InputText({
  label,
  value,
  placeholder,
  onChangeText,
}: Props) {
  return (
    <View>
      <Label>{label}</Label>
      <InputContainer>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </InputContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    fontSize: 18,
  },
});
