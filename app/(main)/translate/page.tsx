"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Translator() {
  const [text, setTextareaValue] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("am"); // Default to Amharic

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextareaValue(event.target.value);
  };

  const handleTranslate = async () => {
    let apiUrl, translated;
    if (selectedLanguage === "am") {
      apiUrl = `https://api.mymemory.translated.net/get?q=${text.trim()}&langpair=en|am`;
      const apidata = await fetch(apiUrl);
      const data = await apidata.json();
      translated = data.matches[0].translation;
    } else {
      apiUrl = `https://api.mymemory.translated.net/get?q=${text.trim()}&langpair=am|en`;
      const apidata = await fetch(apiUrl);
      const data = await apidata.json();
      translated = data.matches[0].translation;
    }

    setTranslatedText(translated);
  };

  const handleTranslateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!text) {
      alert("Please enter text to translate!!");
    } else {
      handleTranslate();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Translator</h1>
        <div className="mb-4 flex justify-end"> {/* Language selection */}
          <Select
            value={selectedLanguage}
            onValueChange={(value) => setSelectedLanguage(value)}
          >
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="am">English to Amharic</SelectItem>
              <SelectItem value="en">Amharic to English</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <fieldset className="mb-6">
          <textarea
            value={text}
            placeholder="Enter text"
            spellCheck={false}
            onChange={handleTextareaChange}
            id="ft"
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          ></textarea>
        </fieldset>
        <fieldset className="mb-6">
          <div
            className="h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent overflow-auto"
            id="tt"
          >
            {translatedText}
          </div>
        </fieldset>
        <Button
          className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          onClick={handleTranslateClick}
        >
          <span className="text">Translate Text</span>
        </Button>
      </div>
    </div>
  );
}