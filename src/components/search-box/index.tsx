import { iSearchBoxProps } from './types';
import { sSearchBox } from './styles';

const SearchBox = ({
  className,
  placeHolder,
  onChangeHandler,
}: iSearchBoxProps) => {
  return (
    <input
      className={`${sSearchBox} ${className}`}
      type='search'
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
