
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const WordGame = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const uiWords = [
    "DESIGN", "LAYOUT", "COLORS", "BUTTON", "NAVBAR", "FOOTER", 
    "MOBILE", "DESKTOP", "ICONS", "FONTS", "SPACING", "BORDER"
  ];

  const maxWrongGuesses = 6;

  const initializeGame = () => {
    const randomWord = uiWords[Math.floor(Math.random() * uiWords.length)];
    setCurrentWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameWon(false);
    setGameOver(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (currentWord && guessedLetters.length > 0) {
      const wordLetters = currentWord.split('');
      const isWordComplete = wordLetters.every(letter => guessedLetters.includes(letter));
      
      if (isWordComplete) {
        setGameWon(true);
      }
      
      if (wrongGuesses >= maxWrongGuesses) {
        setGameOver(true);
      }
    }
  }, [guessedLetters, wrongGuesses, currentWord]);

  const handleLetterGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || gameWon || gameOver) return;

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    if (!currentWord.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
    }
  };

  const displayWord = () => {
    return currentWord
      .split('')
      .map(letter => guessedLetters.includes(letter) ? letter : '_')
      .join(' ');
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="text-center">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-4">Guess the UI Term!</h3>
        <div className="text-3xl font-mono text-purple-300 mb-4 tracking-wider">
          {displayWord()}
        </div>
        <div className="text-white mb-4">
          Wrong guesses: {wrongGuesses}/{maxWrongGuesses}
        </div>
      </div>

      {gameWon && (
        <div className="bg-green-500/20 rounded-lg p-4 mb-4 animate-fade-in">
          <h4 className="text-green-300 font-bold text-xl">🎉 Congratulations!</h4>
          <p className="text-green-200">You guessed "{currentWord}" correctly!</p>
        </div>
      )}

      {gameOver && !gameWon && (
        <div className="bg-red-500/20 rounded-lg p-4 mb-4 animate-fade-in">
          <h4 className="text-red-300 font-bold text-xl">💀 Game Over!</h4>
          <p className="text-red-200">The word was "{currentWord}"</p>
        </div>
      )}

      <div className="grid grid-cols-6 gap-2 mb-6 max-w-md mx-auto">
        {alphabet.map(letter => (
          <Button
            key={letter}
            onClick={() => handleLetterGuess(letter)}
            disabled={guessedLetters.includes(letter) || gameWon || gameOver}
            className={`
              h-10 text-sm font-bold transition-all duration-200
              ${guessedLetters.includes(letter)
                ? currentWord.includes(letter)
                  ? 'bg-green-500 hover:bg-green-500 text-white'
                  : 'bg-red-500 hover:bg-red-500 text-white'
                : 'bg-purple-500 hover:bg-purple-600 text-white'
              }
              ${guessedLetters.includes(letter) ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {letter}
          </Button>
        ))}
      </div>

      <Button 
        onClick={initializeGame}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
      >
        New Game
      </Button>

      <p className="text-gray-300 text-sm mt-2">
        Guess the UI-related word letter by letter!
      </p>
    </div>
  );
};
