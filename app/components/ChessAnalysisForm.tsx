'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import TypingEffect from './TypingEffectSlogan';

const ChessAnalysisForm = () => {
  const [handle, setHandle] = useState<string>('');
  const [pgnFile, setPgnFile] = useState<File | null>(null);
  const [playerName, setPlayerName] = useState<string>('');
  const [formValid, setFormValid] = useState<boolean>(false);
  const [lichessData, setLichessData] = useState<any>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPgnFile(e.target.files[0]);
      setFormValid(!!playerName);
    } else {
      setPgnFile(null);
      setFormValid(false);
    }
  };

  const handlePlayerNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setPlayerName(name);
    setFormValid(!!pgnFile && !!name);
  };

  const handleLichessHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    setHandle(username);
    setFormValid(!!username || (!!pgnFile && !!playerName));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log({ handle, pgnFile, playerName });

    if (handle) {
      try {
        const response = await fetch(`/api/lichess_user_data?handle=${handle}`);
        const data = await response.json();
        setLichessData(data);
        console.log(data); // Do something with the fetched data
      } catch (error) {
        console.error('Error fetching Lichess data:', error);
      }
    }
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
      {lichessData && (
        <div className="mt-8">
          <h3 className="text-xl font-bold">Lichess Data</h3>
          <pre className="bg-base-200 p-4 rounded-md">
            {JSON.stringify(lichessData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ChessAnalysisForm;
