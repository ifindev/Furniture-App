import clsx from 'clsx';
import {styled} from 'nativewind';
import {Text} from 'react-native';

const HeadingOne = styled(Text, clsx('text-[40px] font-semibold m-0 p-0'));
const HeadingTwo = styled(Text, clsx('text-[30px] font-semibold m-0 p-0'));
const HeadingThree = styled(Text, clsx('text-[26px] font-semibold m-0 p-0'));

const Body18 = styled(Text, clsx('text-lg m-0 p-0'));
const Body16 = styled(Text, clsx('text-base m-0 p-0'));
const Body14 = styled(Text, clsx('text-sm m-0 p-0'));
const Body12 = styled(Text, clsx('text-xs m-0 p-0'));

export default Object.assign(Body18, {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Body16,
  Body14,
  Body12,
});
