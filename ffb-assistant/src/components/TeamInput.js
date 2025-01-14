import React, { useState } from 'react';

const TeamInput = () => {
  // State to hold the user input for each position and bench players
  const [team, setTeam] = useState({
    qb: '',
    rb1: '',
    rb2: '',
    wr1: '',
    wr2: '',
    te: '',
    flex: '',
    dst: '',
    k: '',
    bench: [], // Array to hold bench players
  });

  // Handle change in input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTeam((prevTeam) => ({
      ...prevTeam,
      [name]: value,
    }));
  };

  // Handle change for bench players (dynamically created fields)
  const handleBenchChange = (index, value) => {
    const newBench = [...team.bench];
    newBench[index] = value;
    setTeam({ ...team, bench: newBench });
  };

  // Add a new bench player
  const handleAddBench = () => {
    setTeam({ ...team, bench: [...team.bench, ''] });
  };

  // Remove a bench player
  const handleRemoveBench = (index) => {
    const newBench = team.bench.filter((_, i) => i !== index);
    setTeam({ ...team, bench: newBench });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Team submitted:', team);
    // Here you'd eventually trigger an API call to get advice based on `team` data
  };

  return (
    <div>
      <h2>Enter Your Fantasy Football Team</h2>
      <form onSubmit={handleSubmit}>
        {/* Main Positions Input */}
        <label>
          Quarterback (QB):
          <input
            type="text"
            name="qb"
            value={team.qb}
            onChange={handleInputChange}
            placeholder="Enter QB name"
          />
        </label>

        <label>
          Running Back 1 (RB1):
          <input
            type="text"
            name="rb1"
            value={team.rb1}
            onChange={handleInputChange}
            placeholder="Enter RB1 name"
          />
        </label>

        <label>
          Running Back 2 (RB2):
          <input
            type="text"
            name="rb2"
            value={team.rb2}
            onChange={handleInputChange}
            placeholder="Enter RB2 name"
          />
        </label>

        <label>
          Wide Receiver 1 (WR1):
          <input
            type="text"
            name="wr1"
            value={team.wr1}
            onChange={handleInputChange}
            placeholder="Enter WR1 name"
          />
        </label>

        <label>
          Wide Receiver 2 (WR2):
          <input
            type="text"
            name="wr2"
            value={team.wr2}
            onChange={handleInputChange}
            placeholder="Enter WR2 name"
          />
        </label>

        <label>
          Tight End (TE):
          <input
            type="text"
            name="te"
            value={team.te}
            onChange={handleInputChange}
            placeholder="Enter TE name"
          />
        </label>

        <label>
          Flex:
          <input
            type="text"
            name="flex"
            value={team.flex}
            onChange={handleInputChange}
            placeholder="Enter Flex player name"
          />
        </label>

        <label>
          Defense/Special Teams (D/ST):
          <input
            type="text"
            name="dst"
            value={team.dst}
            onChange={handleInputChange}
            placeholder="Enter D/ST name"
          />
        </label>

        <label>
          Kicker (K):
          <input
            type="text"
            name="k"
            value={team.k}
            onChange={handleInputChange}
            placeholder="Enter Kicker name"
          />
        </label>

        {/* Bench Players Section */}
        <div>
          <h3>Bench Players</h3>
          {team.bench.map((benchPlayer, index) => (
            <div key={index}>
              <label>
                Bench Player {index + 1}:
                <input
                  type="text"
                  value={benchPlayer}
                  onChange={(e) => handleBenchChange(index, e.target.value)}
                  placeholder={`Enter Bench Player ${index + 1} name`}
                />
              </label>
              <button type="button" onClick={() => handleRemoveBench(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddBench}>
            Add Bench Player
          </button>
        </div>

        <button type="submit">Get Advice</button>
      </form>
    </div>
  );
};

export default TeamInput;