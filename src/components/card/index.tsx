import { sCardContainer } from './styles';
import { iCardProps } from './types';

const Card = ({ id, name, email }: iCardProps) => {
  return (
    <div className={sCardContainer}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster-${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
