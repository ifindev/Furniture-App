import {useCallback, useState} from 'react';

type SignUpData = {
  name: string;
  email: string;
  password: string;
};

export default function useSignUpViewModel() {
  // #region INTERNAL STATES

  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [formValue, setFormValue] = useState<SignUpData>({
    name: '',
    email: '',
    password: '',
  });
  // #endregion

  // #region HANDLERS

  const handleCheckbox = useCallback(() => {
    setCheckboxChecked(prev => !prev);
  }, []);

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

  const handleEmailChange = useCallback(
    (val: string) => {
      handleChangeValue(val, 'email');
    },
    [handleChangeValue],
  );

  const handleNameChange = useCallback(
    (val: string) => {
      handleChangeValue(val, 'name');
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
      checkboxChecked,
    },
    handlers: {
      handleCheckbox,
      handleSignUp,
      handleEmailChange,
      handleNameChange,
      handlePasswordChange,
    },
  };
}
