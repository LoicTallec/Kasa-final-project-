import { useParams } from 'react-router-dom';
import accomodations from '../../assets/logements.json';
import Card from '../../components/Card/Card';
import './fullcard.css';
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import HostInfo from '../../components/HostInfo/HostInfo';
import PropertyDetails from '../../components/PropertyDetails/PropertyDetails';

function FullCard() {
  const { id } = useParams();
  const card = accomodations.find((card) => card.id === id);
  return (
    <main>
      <Card src={card.cover} alt={card.cover} content={card.title} />
      <PropertyDetails host={card.host} tags={card.tags} location={card.location} />
      <Rating rating={card.rating} />
      <HostInfo name={card.host.name} picture={card.host.picture} />
      <Collapse title="Description" content={card.description} />
      <Collapse title="Equipements" content={<ul>{card.equipments.map((equipement, index) => <li key={index}>{equipement}</li>)}</ul>} />

    </main>
  );

}

export default FullCard;
