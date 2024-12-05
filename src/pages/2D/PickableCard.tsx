const CARD_WIDTH = 120;
const CARD_HEIGHT = 200;

const PickableCard = () => {
  return (
    <div
      className={`relative cursor-pointer transition ease-in-out hover:-translate-y-3`}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      }}
    >
      <div className="absolute flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 text-white shadow-lg">
        <div>🌟</div>
      </div>
    </div>
  );
};

export default PickableCard;
