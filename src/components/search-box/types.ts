import { ChangeEvent } from 'react';

export type iSearchBoxProps = {
  className: string;
  placeHolder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
