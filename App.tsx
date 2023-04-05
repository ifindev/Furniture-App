import React from 'react';
import {SafeAreaView} from 'react-native';
import SignUpView from './src/screens/auth/SignUp/SignUp.view';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <SignUpView />
    </SafeAreaView>
  );
}

export default App;
