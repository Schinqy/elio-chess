// app/components/ChessAnalysisForm.tsx

'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

const ChessAnalysisForm = () => {
  const [handle, setHandle] = useState<string>('');
  const [pgnFile, setPgnFile] = useState<File | null>(null);
  const [playerName, setPlayerName] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPgnFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ handle, pgnFile, playerName });
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-base-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Chess Analysis Form</h2>
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => setHandle(e.target.value)}
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPlayerName(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full"
        >
          Analyze
        </button>
      </form>
    </div>
  );
};

export default ChessAnalysisForm;
