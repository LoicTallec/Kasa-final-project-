import { useParams } from 'react-router-dom';
import accomodations from '../../assets/logements.json';
import './fullcard.css';
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import HostInfo from '../../components/HostInfo/HostInfo';
import PropertyDetails from '../../components/PropertyDetails/PropertyDetails';
import Slideshow from '../../components/Slideshow/Slideshow';

function FullCard() {
  const { id } = useParams();
  const card = accomodations.find((card) => card.id === id);
  return (
    <main>
      <Slideshow images={card.pictures} />
      <PropertyDetails host={card.host} tags={card.tags} location={card.location} />
      <Rating rating={card.rating} />
      <HostInfo name={card.host.name} picture={card.host.picture} />
      <Collapse title="Description" content={card.description} />
      <Collapse title="Equipements" content={<ul>{card.equipments.map((equipement, index) => <li key={index}>{equipement}</li>)}</ul>} />

    </main>
  );

}

export default FullCard;
