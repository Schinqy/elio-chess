// app/components/ChessAnalysisForm.tsx
'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import TypingEffect from './TypingEffectSlogan';

const ChessAnalysisForm = () => {
  const [handle, setHandle] = useState<string>('');
  const [pgnFile, setPgnFile] = useState<File | null>(null);
  const [playerName, setPlayerName] = useState<string>('');
  const [formValid, setFormValid] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPgnFile(e.target.files[0]);
      setFormValid(!!playerName && !!e.target.files[0]); // Enable button if playerName is not empty and file is selected
    } else {
      setPgnFile(null);
      setFormValid(false);
    }
  };

  const handlePlayerNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setPlayerName(name);
    setFormValid(!!pgnFile && !!name); // Enable button if both file is selected and playerName is not empty
  };

  const handleLichessHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    setHandle(username);
    setFormValid(!!username); // Enable button if Lichess handle is not empty
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ handle, pgnFile, playerName });
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-base-200 rounded-lg shadow-md">
      <TypingEffect />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="handle" className="block text-gray-700 font-bold mb-2">
            Lichess Handle:
          </label>
          <input
            type="text"
            id="handle"
            className="input input-bordered w-full"
            placeholder="Enter Lichess Handle"
            value={handle}
            onChange={handleLichessHandleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pgnFile" className="block text-gray-700 font-bold mb-2">
            Upload PGN File:
          </label>
          <input
            type="file"
            id="pgnFile"
            className="file-input file-input-bordered w-full"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="playerName" className="block text-gray-700 font-bold mb-2">
            Player Name:
          </label>
          <input
            type="text"
            id="playerName"
            className="input input-bordered w-full"
            placeholder="Enter Player Name"
            value={playerName}
            onChange={handlePlayerNameChange}
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary w-full ${formValid ? '' : 'btn-disabled'}`}
          disabled={!formValid}
        >
          Analyze
        </button>
      </form>
    </div>
  );
};

export default ChessAnalysisForm;
