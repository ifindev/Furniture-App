import clsx from 'clsx';
import {styled} from 'nativewind';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ChevronBack from '../../../assets/chevron-back.svg';
import {Button, Checkbox, Separator, Text} from '../../../components/Atoms';
import {InputText} from '../../../components/Molecules';

const Container = styled(View, clsx('flex flex-col h-screen  w-screen p-9'));
const HeaderContainer = styled(
  View,
  'flex flex-row items-center w-full justify-start gap-4',
);
const InputContainer = styled(View, clsx('flex flex-col mt-12'));
const SeparatorContainer = styled(View, clsx('my-6'));
const HeaderText = styled(Text.HeadingThree, clsx('text-purple'));

type SignUpData = {
  name: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [formValue, setFormValue] = useState<SignUpData>({
    name: '',
    email: '',
    password: '',
  });

  const handleChangeValue = useCallback(
    (val: string, type: 'name' | 'email' | 'password') => {
      setFormValue(prev => {
        return {...prev, [type]: val};
      });
    },
    [],
  );

  const handleSignUp = useCallback(() => {
    console.log('signing up');
  }, []);

  const handleChangeEmail = useCallback(
    (val: string) => {
      handleChangeValue(val, 'email');
    },
    [handleChangeValue],
  );

  const handleChangeName = useCallback(
    (val: string) => {
      handleChangeValue(val, 'name');
    },
    [handleChangeValue],
  );

  const handleChangePassword = useCallback(
    (val: string) => {
      handleChangeValue(val, 'password');
    },
    [handleChangeValue],
  );

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
          value={formValue.name}
          onChangeText={handleChangeName}
        />
        <InputText
          label="Email"
          placeholder="example@gmail.com"
          value={formValue.email}
          onChangeText={handleChangeEmail}
        />
        <InputText
          isPassword
          label="Password"
          placeholder="password"
          value={formValue.password}
          onChangeText={handleChangePassword}
        />
      </InputContainer>
      <View style={styles.checkboxContainer}>
        <Checkbox
          checked={checkboxChecked}
          onChecked={() => setCheckboxChecked(prev => !prev)}
        />
        <View style={styles.termsPrivacyContainer}>
          <Text className="text-purple font-normal">I agree with </Text>
          <Text className="text-purple font-bold">Terms & Privacy</Text>
        </View>
      </View>
      <Button text="Sign Up" onPress={handleSignUp} />
      <SeparatorContainer>
        <Separator text="Or sign up with" />
      </SeparatorContainer>
    </Container>
  );
}

/** These styles are needed because there are bugs when styling with nativewind */
const styles = StyleSheet.create({
  inputContainer: {
    gap: 20,
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 13,
    marginVertical: 24,
  },
  termsPrivacyContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 0,
  },
});
