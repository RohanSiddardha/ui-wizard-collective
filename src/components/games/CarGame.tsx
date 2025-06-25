
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

export const CarGame = () => {
  const [carPosition, setCarPosition] = useState(50);
  const [obstacles, setObstacles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [score, setScore] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const moveLeft = () => {
    setCarPosition(prev => Math.max(10, prev - 20));
  };

  const moveRight = () => {
    setCarPosition(prev => Math.min(90, prev + 20));
  };

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') moveLeft();
    if (e.key === 'ArrowRight') moveRight();
  }, []);

  useEffect(() => {
    if (gameRunning) {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [gameRunning, handleKeyPress]);

  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      // Move obstacles down
      setObstacles(prev => {
        const updated = prev.map(obs => ({ ...obs, y: obs.y + 5 }))
          .filter(obs => obs.y < 100);
        
        // Add new obstacle occasionally
        if (Math.random() < 0.3) {
          updated.push({
            id: Date.now(),
            x: Math.random() * 80 + 10,
            y: 0
          });
        }
        
        return updated;
      });

      // Check collisions
      setObstacles(prev => {
        const collision = prev.some(obs => 
          Math.abs(obs.x - carPosition) < 15 && obs.y > 80
        );
        
        if (collision) {
          setGameOver(true);
          setGameRunning(false);
        }
        
        return prev;
      });

      setScore(prev => prev + 1);
    }, 100);

    return () => clearInterval(gameLoop);
  }, [gameRunning, carPosition]);

  const startGame = () => {
    setCarPosition(50);
    setObstacles([]);
    setScore(0);
    setGameOver(false);
    setGameRunning(true);
  };

  const resetGame = () => {
    setGameRunning(false);
    setGameOver(false);
    setScore(0);
    setObstacles([]);
  };

  return (
    <div className="text-center">
      <div className="bg-gray-800 rounded-lg p-4 mb-4 relative overflow-hidden h-96 w-full max-w-md mx-auto">
        {/* Road */}
        <div className="absolute inset-0 bg-gray-700">
          <div className="absolute left-1/2 top-0 w-1 h-full bg-yellow-400 transform -translate-x-1/2 opacity-50"></div>
        </div>

        {/* Car */}
        <div 
          className="absolute bottom-4 w-8 h-12 bg-blue-500 rounded transition-all duration-200"
          style={{ left: `${carPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-full h-2 bg-blue-300 rounded-t"></div>
        </div>

        {/* Obstacles */}
        {obstacles.map(obstacle => (
          <div
            key={obstacle.id}
            className="absolute w-6 h-10 bg-red-500 rounded"
            style={{ 
              left: `${obstacle.x}%`, 
              top: `${obstacle.y}%`,
              transform: 'translateX(-50%)'
            }}
          ></div>
        ))}

        {/* Score */}
        <div className="absolute top-4 left-4 text-white font-bold">
          Score: {score}
        </div>

        {/* Game Over */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white text-xl font-bold mb-2">Game Over!</h3>
              <p className="text-gray-300 mb-4">Final Score: {score}</p>
              <Button onClick={resetGame} className="bg-purple-500 hover:bg-purple-600">
                Play Again
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center gap-4 mb-4">
        <Button 
          onClick={moveLeft} 
          disabled={!gameRunning}
          className="bg-purple-500 hover:bg-purple-600"
        >
          ← Left
        </Button>
        <Button 
          onClick={moveRight} 
          disabled={!gameRunning}
          className="bg-purple-500 hover:bg-purple-600"
        >
          Right →
        </Button>
      </div>

      {!gameRunning && !gameOver && (
        <Button onClick={startGame} className="bg-gradient-to-r from-purple-500 to-pink-500">
          Start Racing!
        </Button>
      )}

      <p className="text-gray-300 text-sm mt-2">
        Use arrow keys or buttons to move. Avoid obstacles!
      </p>
    </div>
  );
};
