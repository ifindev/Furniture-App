import React from 'react';
import {SafeAreaView} from 'react-native';
import SignInView from './src/screens/auth/SignIn/SignIn.view';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <SignInView />
    </SafeAreaView>
  );
}

export default App;
