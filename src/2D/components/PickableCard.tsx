import { animated, useSpring } from "@react-spring/web";
import { twMerge } from "tailwind-merge";

export const CARD_ASPECT_RATIO = 1.5;
const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = DEFAULT_WIDTH * CARD_ASPECT_RATIO;

const UP_POSITION = -20;
const DEFAULT_POSITION = 0;

const FRONT_GRADIENT = {
  from: "#f87171", // red-400
  to: "#fbbf24", // yellow-400
};

const BACK_GRADIENT = {
  from: "#60a5fa", // blue-400
  to: "#a855f7", // purple-500
};

interface PickableCardProps {
  width?: number;
  height?: number;
  isSelected: boolean;
  isPickable: boolean;
}

const PickableCard = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  isSelected,
  isPickable,
}: PickableCardProps) => {
  const [positionSprings, positionSpringApi] = useSpring(() => ({
    from: { y: isSelected ? UP_POSITION : DEFAULT_POSITION },
  }));
  const [colorSprings, colorSpringApi] = useSpring(() => ({
    from: {
      gradientFrom: isSelected ? FRONT_GRADIENT.from : BACK_GRADIENT.from,
      gradientTo: isSelected ? FRONT_GRADIENT.to : BACK_GRADIENT.to,
    },
  }));

  const animateCardUp = () => {
    positionSpringApi.start({
      from: { y: DEFAULT_POSITION },
      to: { y: UP_POSITION },
    });
  };

  const animateCardDown = () => {
    positionSpringApi.start({
      from: { y: UP_POSITION },
      to: { y: DEFAULT_POSITION },
    });
  };

  const animateCardColor = () => {
    colorSpringApi.start({
      from: {
        gradientFrom: isSelected ? FRONT_GRADIENT.from : BACK_GRADIENT.from,
        gradientTo: isSelected ? FRONT_GRADIENT.to : BACK_GRADIENT.to,
      },
      to: {
        gradientFrom: isSelected ? BACK_GRADIENT.from : FRONT_GRADIENT.from,
        gradientTo: isSelected ? BACK_GRADIENT.to : FRONT_GRADIENT.to,
      },
    });
  };

  const handleMouseEnter = () => {
    if (isSelected || !isPickable) return;
    animateCardUp();
  };

  const handleMouseLeave = () => {
    if (isSelected || !isPickable) return;
    animateCardDown();
  };

  const handleClick = () => {
    if (!isSelected && !isPickable) return;
    animateCardColor();
  };

  return (
    <animated.div
      className={`relative cursor-pointer`}
      style={{
        width,
        height,
        ...positionSprings,
        willChange: "transform",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <animated.div
        className={twMerge(
          "absolute flex h-full w-full items-center justify-center rounded-lg text-white shadow-lg"
        )}
        style={{
          background: colorSprings.gradientFrom.to(
            (from) =>
              `linear-gradient(to bottom right, ${from}, ${colorSprings.gradientTo.get()})`
          ),
          willChange: "background",
        }}
      >
        {/* <div>🌟</div> */}
      </animated.div>
    </animated.div>
  );
};

export default PickableCard;
