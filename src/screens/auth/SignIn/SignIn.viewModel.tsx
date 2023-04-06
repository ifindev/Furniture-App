import {useCallback, useState} from 'react';

type SignInData = {
  email: string;
  password: string;
};

export default function useSignInViewModel() {
  // #region INTERNAL STATES

  const [formValue, setFormValue] = useState<SignInData>({
    email: '',
    password: '',
  });
  // #endregion

  // #region HANDLERS

  const handleChangeValue = useCallback(
    (val: string, type: 'email' | 'password') => {
      setFormValue(prev => {
        return {...prev, [type]: val};
      });
    },
    [],
  );

  const handleSignUp = useCallback(() => {
    console.log('signing up');
  }, []);

  const handleEmailChange = useCallback(
    (val: string) => {
      handleChangeValue(val, 'email');
    },
    [handleChangeValue],
  );

  const handlePasswordChange = useCallback(
    (val: string) => {
      handleChangeValue(val, 'password');
    },
    [handleChangeValue],
  );

  // #region

  return {
    values: {
      formValue,
    },
    handlers: {
      handleSignUp,
      handleEmailChange,
      handlePasswordChange,
    },
  };
}
