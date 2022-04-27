import { iMonster } from '@components/card-list/types';
import { useState, useEffect, ChangeEvent } from 'react';
import { sHomeContainer, sTitle } from './styles';

import { getData } from 'utils/data.utils';
import CardList from '@components/card-list';
import SearchBox from '@components/search-box';

const Home = () => {
  const [monster, setMonster] = useState<iMonster[]>([]);
  const [searchField, setSearhField] = useState('');
  const [filteredMonster, setFilteredMonster] = useState(monster);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<iMonster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonster(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    setFilteredMonster(newFilteredMonster);
  }, [monster, searchField]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearhField(searchFieldString);
  };
  return (
    <div className={sHomeContainer}>
      <h1 className={sTitle}>Monster Roledex</h1>
      <SearchBox
        className='monster-search-box'
        placeHolder='search monster'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
};

export default Home;
