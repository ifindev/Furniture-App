import clsx from 'clsx';
import {styled} from 'nativewind';
import React, {useCallback, useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import EyeClosed from '../../../assets/eye-closed.svg';
import EyeOpen from '../../../assets/eye-open.svg';
import {Text} from '../../Atoms';

const InputContainer = styled(
  View,
  clsx('border border-grey-light rounded-[14px] relative'),
);

const Label = styled(Text, clsx('text-purple font-normal mb-3'));
const Input = styled(TextInput, clsx('px-4 pr-12 py-5 text-lg leading-[22px]'));
const VisibilityButton = styled(Pressable, clsx('absolute right-4 top-5'));

type Props = {
  label: string;
  value: string;
  placeholder?: string;
  isPassword?: boolean;
  onChangeText: (value: string) => void;
};

export default function InputText({
  label,
  value,
  placeholder,
  isPassword,
  onChangeText,
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = useCallback(() => {
    setIsPasswordVisible(prev => !prev);
  }, []);

  return (
    <View>
      <Label>{label}</Label>
      <InputContainer>
        <Input
          secureTextEntry={isPassword && !isPasswordVisible}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
        {isPassword && (
          <VisibilityButton hitSlop={30} onPress={togglePassword}>
            {isPasswordVisible ? <EyeClosed /> : <EyeOpen />}
          </VisibilityButton>
        )}
      </InputContainer>
    </View>
  );
}
