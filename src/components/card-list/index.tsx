import React from 'react';
import Card from '../card';

import { sCardListContainer } from './styles';
import { iCardListProps } from './types';

const CardList = ({ monsters }: iCardListProps) => {
  return (
    <div className={sCardListContainer}>
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
};

export default CardList;
