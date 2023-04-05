import clsx from 'clsx';
import {styled} from 'nativewind';
import React from 'react';
import {Image, View} from 'react-native';
import {Button, Text} from '../../../components/Atoms';

const Container = styled(
  View,
  clsx('p-9 flex flex-col justify-center items-center h-screen gap-10'),
);
const TextContainer = styled(View, clsx('flex flex-col gap-1'));
const ButtonContainer = styled(View, clsx('w-full'));
const SigninButtonContainer = styled(View, clsx('w-full mt-4'));

const SplashImage = styled(Image, clsx('w-full h-[200px]'));
const NormalText = styled(Text.HeadingOne, clsx('text-center'));
const ColoredText = styled(
  Text.HeadingOne,
  clsx('text-center text-orange underline'),
);

function Splash() {
  const handlePress = () => {
    console.log('button pressed');
  };

  return (
    <Container>
      <SplashImage source={require('../../../assets/splash.png')} />
      <TextContainer>
        <NormalText>You'll Find</NormalText>
        <ColoredText>All you need</ColoredText>
        <NormalText>Here!</NormalText>
      </TextContainer>
      <ButtonContainer>
        <Button text="Sign Up" onPress={handlePress} />
        <SigninButtonContainer>
          <Button text="Sign In" buttonType="text" onPress={handlePress} />
        </SigninButtonContainer>
      </ButtonContainer>
    </Container>
  );
}

export default Splash;
