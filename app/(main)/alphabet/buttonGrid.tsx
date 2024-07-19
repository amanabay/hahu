"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { amharicCharacters } from '@/utils/amharic-alpabets';


const ButtonGrid: React.FC = () => {
const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const audioRefs = useRef<HTMLAudioElement[]>([]);

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, amharicCharacters.length);
  }, [amharicCharacters.length]);

  const handleCharacterPress = (character: string, index: number) => {
    setSelectedCharacter(character);
    audioRefs.current.forEach((audio) => {
      if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    if (audioRefs.current[index]) {
      audioRefs.current[index]?.play();
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-md border border-purple-200">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4 sm:text-3xl md:text-4xl lg:text-4xl">
        Amharic Alphabet Chart
      </h2>
      <div className="grid grid-cols-7 gap-1 sm:gap-2 p-1 sm:p-2">
        {amharicCharacters.map((char, index) => (
          <div key={index}>
            <Button
              className="h-24 w-full bg-gray-100 rounded-md text-center border-purple-900 hover:bg-green-50 flex flex-col items-center hover justify-center p-0.3 sm:p-1"
              onClick={() => handleCharacterPress(char.amharic, index)}
            >
              <span className="text-sm sm:text-base md:text-lg lg:text-2xl">
                {char.amharic}
              </span>
              <span className="text-[8px] sm:text-xs text-gray-600">
                {char.transliteration}
              </span>
            </Button>
            <audio
              ref={(el) => {
                if (el) {
                  audioRefs.current[index] = el;
                }
              }}
              preload="none"
            >
              <source src={`/alphabet/${index + 1}.mp3`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonGrid;