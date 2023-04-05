import clsx from 'clsx';
import {styled} from 'nativewind';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ChevronBack from '../../../assets/chevron-back.svg';
import {Text} from '../../../components/Atoms';
import {InputText} from '../../../components/Molecules';

const Container = styled(View, clsx('flex flex-col h-screen  w-screen p-9'));
const HeaderContainer = styled(
  View,
  clsx('flex flex-row items-center w-full justify-start gap-4'),
);
const InputContainer = styled(View, clsx('flex flex-col mt-12'));
const HeaderText = styled(Text.HeadingThree, clsx('text-purple'));

type SignUpData = {
  name: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const [value, setValue] = useState<SignUpData>({
    name: '',
    email: '',
    password: '',
  });

  const handleChangeValue = (
    val: string,
    type: 'name' | 'email' | 'password',
  ) => {
    setValue(prev => {
      return {...prev, [type]: val};
    });
  };

  return (
    <Container>
      <HeaderContainer>
        <ChevronBack width={25} height={25} />
        <HeaderText>Sign Up</HeaderText>
      </HeaderContainer>
      <InputContainer style={styles.inputContainer}>
        <InputText
          label="Name"
          placeholder="John Doe"
          value={value.name}
          onChangeText={(val: string) => handleChangeValue(val, 'name')}
        />
        <InputText
          label="Email"
          placeholder="example@gmail.com"
          value={value.email}
          onChangeText={(val: string) => handleChangeValue(val, 'email')}
        />
        <InputText
          label="Password"
          placeholder="password"
          value={value.password}
          onChangeText={(val: string) => handleChangeValue(val, 'password')}
        />
      </InputContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    gap: 16,
  },
});
