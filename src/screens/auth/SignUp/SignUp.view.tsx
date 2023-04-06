import clsx from 'clsx';
import {styled} from 'nativewind';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ChevronBack from '../../../assets/chevron-back.svg';
import GoogleSignin from '../../../assets/google-signin.svg';
import {Button, Checkbox, Separator, Text} from '../../../components/Atoms';
import {InputText} from '../../../components/Molecules';

const Container = styled(View, clsx('flex flex-col h-screen  w-screen p-9'));
const HeaderContainer = styled(
  View,
  'flex flex-row items-center w-full justify-start gap-4',
);
const InputContainer = styled(View, clsx('flex flex-col mt-12'));
const SeparatorContainer = styled(View, clsx('my-6'));
const GoogleButtonContainer = styled(
  View,
  clsx('flex flex-row items-center gap-4'),
);
const TermsPrivacyContainer = styled(
  View,
  clsx('flex flex-row items-center justify-center gap-0 pl-3'),
);
const SignInContainer = styled(TermsPrivacyContainer, clsx('mt-6'));
const HeaderText = styled(Text.HeadingThree, clsx('text-purple'));
const StyledView = styled(View);

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
      <StyledView className="flex flex-row items-center justify-start gap-0 my-6">
        <Checkbox
          checked={checkboxChecked}
          onChecked={() => setCheckboxChecked(prev => !prev)}
        />
        <TermsPrivacyContainer>
          <Text className="text-purple font-normal">I agree with </Text>
          <Text className="text-purple font-bold">Terms & Privacy</Text>
        </TermsPrivacyContainer>
      </StyledView>
      <Button text="Sign Up" onPress={handleSignUp} />
      <SeparatorContainer>
        <Separator text="Or" />
      </SeparatorContainer>

      <Button buttonType="secondary">
        <GoogleButtonContainer>
          <GoogleSignin />
          <Text className="text-white font-bold">Sign Up with Google</Text>
        </GoogleButtonContainer>
      </Button>

      <SignInContainer>
        <Text className="text-purple font-normal">
          Already have an account?
        </Text>
        <Text className="text-purple font-bold">Sign In</Text>
      </SignInContainer>
    </Container>
  );
}

/** These styles are needed because there are bugs when styling with nativewind */
const styles = StyleSheet.create({
  inputContainer: {
    gap: 20,
  },
});
