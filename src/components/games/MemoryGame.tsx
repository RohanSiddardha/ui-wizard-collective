
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const MemoryGame = () => {
  const [cards, setCards] = useState<Array<{ id: number; icon: string; isFlipped: boolean; isMatched: boolean }>>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const uiIcons = ["🎨", "💻", "📱", "🖱️", "⌨️", "🖥️", "📐", "🎯"];

  const initializeGame = () => {
    const gameCards = [...uiIcons, ...uiIcons]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        id: index,
        icon,
        isFlipped: false,
        isMatched: false
      }));
    
    setCards(gameCards);
    setFlippedCards([]);
    setMoves(0);
    setGameWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards.find(card => card.id === first);
      const secondCard = cards.find(card => card.id === second);

      if (firstCard?.icon === secondCard?.icon) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isMatched: true } 
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false } 
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      setGameWon(true);
    }
  }, [cards]);

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2) return;
    
    const card = cards.find(c => c.id === cardId);
    if (card?.isFlipped || card?.isMatched) return;

    setCards(prev => prev.map(c => 
      c.id === cardId ? { ...c, isFlipped: true } : c
    ));
    setFlippedCards(prev => [...prev, cardId]);
  };

  return (
    <div className="text-center">
      <div className="mb-4">
        <p className="text-white">Moves: {moves}</p>
        {gameWon && (
          <div className="bg-green-500/20 rounded-lg p-4 mt-2 animate-fade-in">
            <h3 className="text-white font-bold">🎉 Congratulations!</h3>
            <p className="text-green-200">You won in {moves} moves!</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto mb-4">
        {cards.map(card => (
          <div
            key={card.id}
            className={`
              aspect-square border-2 rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center text-2xl
              ${card.isFlipped || card.isMatched 
                ? 'bg-white/20 border-purple-400' 
                : 'bg-white/10 border-gray-400 hover:bg-white/15'
              }
              ${card.isMatched ? 'opacity-75' : ''}
            `}
            onClick={() => handleCardClick(card.id)}
          >
            {(card.isFlipped || card.isMatched) && card.icon}
          </div>
        ))}
      </div>

      <Button 
        onClick={initializeGame}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
      >
        New Game
      </Button>

      <p className="text-gray-300 text-sm mt-2">
        Match all the UI-related icons!
      </p>
    </div>
  );
};
