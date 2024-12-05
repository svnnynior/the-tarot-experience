import FlippableCard from "./FlippableCard";

interface Tarot2DCardProps {
  name: string;
}

const Tarot2DCard = ({ name }: Tarot2DCardProps) => {
  return <FlippableCard front={<div>{name}</div>} back={<div>🌟</div>} />;
};

export default Tarot2DCard;
