import clsx from 'clsx';
import {styled} from 'nativewind';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChevronBack from '../../../assets/chevron-back.svg';
import GoogleSignin from '../../../assets/google-signin.svg';
import {Button, Separator, Text} from '../../../components/Atoms';
import {InputText} from '../../../components/Molecules';
import useSignInViewModel from './SignIn.viewModel';

const Container = styled(View, clsx('flex flex-col h-screen  w-screen p-9'));
const HeaderContainer = styled(
  View,
  'flex flex-row items-center w-full justify-start gap-4',
);
const InputContainer = styled(View, clsx('flex flex-col my-12'));
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

export default function SignIn() {
  const {values, handlers} = useSignInViewModel();

  return (
    <Container>
      <HeaderContainer>
        <ChevronBack width={25} height={25} />
        <HeaderText>Sign In</HeaderText>
      </HeaderContainer>
      <InputContainer style={styles.inputContainer}>
        <InputText
          label="Email"
          placeholder="example@gmail.com"
          value={values.formValue.email}
          onChangeText={handlers.handleEmailChange}
        />
        <InputText
          isPassword
          label="Password"
          placeholder="password"
          value={values.formValue.password}
          onChangeText={handlers.handlePasswordChange}
        />
      </InputContainer>
      <Button text="Sign In" onPress={handlers.handleSignUp} />
      <SeparatorContainer>
        <Separator text="Or" />
      </SeparatorContainer>

      <Button buttonType="secondary">
        <GoogleButtonContainer>
          <GoogleSignin />
          <Text className="text-white font-bold">Sign In with Google</Text>
        </GoogleButtonContainer>
      </Button>

      <SignInContainer>
        <Text className="text-purple font-normal">Don't have an account?</Text>
        <Text className="text-purple font-bold pl-1">Sign Up</Text>
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
