import PickableCard from "./PickableCard";
import Tarot2DCard from "./Tarot2DCard";

const Tarot2DPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-16">
      <PickableCard />
      <Tarot2DCard name="The Fool" />
    </div>
  );
};

export default Tarot2DPage;
