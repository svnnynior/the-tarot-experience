import { TAROT_DECK } from "./data/cards";
import PickableCard, { CARD_ASPECT_RATIO } from "./components/PickableCard";
import { useLayoutEffect, useState } from "react";

const TAILWIND_SCREEN_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const CARD_WIDTH_BREAKPOINTS = {
  sm: 80,
  md: 100,
  lg: 120,
  xl: 140,
};

const OVERLAP_MARGIN = 0.7;
const getCardWidth = (windowWidth: number) => {
  if (windowWidth < TAILWIND_SCREEN_BREAKPOINTS.sm) {
    return CARD_WIDTH_BREAKPOINTS.sm;
  }
  if (windowWidth < TAILWIND_SCREEN_BREAKPOINTS.md) {
    return CARD_WIDTH_BREAKPOINTS.md;
  }
  if (windowWidth < TAILWIND_SCREEN_BREAKPOINTS.lg) {
    return CARD_WIDTH_BREAKPOINTS.lg;
  }
  return CARD_WIDTH_BREAKPOINTS.xl;
};

const Tarot2DPage = () => {
  // Layouting
  const windowWidth = window.innerWidth;
  const [cardWidth, setCardWidth] = useState(getCardWidth(windowWidth));
  const [cardHeight, setCardHeight] = useState(cardWidth * CARD_ASPECT_RATIO);
  const [numColumns, setNumColumns] = useState(
    Math.floor(windowWidth / cardWidth)
  );

  const recalculateSizes = () => {
    const windowWidth = window.innerWidth;
    const newCardWidth = getCardWidth(windowWidth);
    const newCardHeight = newCardWidth * CARD_ASPECT_RATIO;
    const newNumColumns = Math.floor(windowWidth / newCardWidth);
    setCardWidth(newCardWidth);
    setCardHeight(newCardHeight);
    setNumColumns(newNumColumns);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", recalculateSizes);
    return () => window.removeEventListener("resize", recalculateSizes);
  }, []);

  // Logic
  const MAX_SELECTIONS = 3;
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const onCardClick = (cardId: number) => () => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter((id) => id !== cardId));
    } else if (selectedCards.length < MAX_SELECTIONS) {
      setSelectedCards([...selectedCards, cardId]);
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="mx-2 mt-8 w-full">
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: `repeat(${numColumns}, fit-content(100%))`,
            paddingTop: cardHeight * OVERLAP_MARGIN,
          }}
        >
          {TAROT_DECK.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center"
              style={{ marginTop: -cardHeight * OVERLAP_MARGIN }}
              onClick={onCardClick(card.id)}
            >
              <PickableCard
                width={cardWidth}
                height={cardHeight}
                isSelected={selectedCards.includes(card.id)}
                isPickable={selectedCards.length < MAX_SELECTIONS}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <button
          disabled={selectedCards.length < MAX_SELECTIONS}
          className="rounded bg-gradient-to-r from-emerald-400 to-sky-500 px-10 py-3 font-semibold text-white hover:opacity-80 disabled:opacity-20"
        >
          🔮
        </button>
      </div>
    </div>
  );
};

export default Tarot2DPage;
