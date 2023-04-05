import {render, screen} from '@testing-library/react-native';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button text="Button" onPress={() => {}} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
