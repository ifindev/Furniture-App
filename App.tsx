import React from 'react';
import {SafeAreaView} from 'react-native';
import Splash from './src/screens/auth/Splash/Splash';

function App(): JSX.Element {
  // const [theme, setTheme] = useState('light');

  return (
    <SafeAreaView>
      <Splash />
    </SafeAreaView>
  );
}

export default App;
