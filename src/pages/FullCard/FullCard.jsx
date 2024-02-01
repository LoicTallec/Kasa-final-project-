import { useParams } from 'react-router-dom';
import accomodations from '../../assets/logements.json';
import Card from '../../components/Card/Card';
import './fullcard.css';
import Collapse from '../../components/Collapse/Collapse';

function FullCard() {
    const { id } = useParams();
    const card = accomodations.find((card) => card.id === id);
    return (
        <main>
        <Card src={card.cover} alt={card.cover} content={card.title} />
        <Collapse title="Description" content={card.description} />
        <Collapse title="Equipements" content={<ul>{card.equipments.map((equipement, index) => <li key={index}>{equipement}</li>)}</ul>} />
        </main>
    );
    
}

export default FullCard;