import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

interface FlippableCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

const CARD_WIDTH = 300;
const CARD_HEIGHT = 500;

const FlippableCard = ({ front, back }: FlippableCardProps) => {
  const [isShown, setIsShown] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: isShown ? 1 : 0,
    transform: `perspective(${CARD_WIDTH + 500}px) rotateY(${isShown ? -180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <div
      className={`relative cursor-pointer`}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      }}
      onClick={handleClick}
    >
      <animated.div
        className="absolute flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 text-white shadow-lg"
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          willChange: "transform, opacity",
        }}
      >
        {back}
      </animated.div>

      <animated.div
        className="absolute flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-red-400 to-yellow-400 text-white shadow-lg"
        style={{
          opacity,
          transform: transform.to((t) => `${t} rotateY(-180deg)`),
          willChange: "transform, opacity",
        }}
      >
        {front}
      </animated.div>
    </div>
  );
};

export default FlippableCard;
