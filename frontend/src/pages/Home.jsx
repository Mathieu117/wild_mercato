import CardInfo from "@components/CardInfo";
import YourTeamSelect from "@components/YourTeamSelect";
import React from "react";
import "../styles/Home.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import MercatoArticle from "@components/MercatoArticle";
import YourTeamArticle from "@components/YourTeamArticle";
import InputSelect from "@components/InputSelect";

const Home = () => {
  const [player, setPlayer] = useState([]);
  const [team, setTeam] = useState([]);
  const [teamSelect, setTeamSelect] = useState("");
  const [teamSelectInput, setTeamSelectInput] = useState("");

  const getPlayers = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/players`)
      .then((res) => setPlayer(res.data));
  };

  const getTeams = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/teams`)
      .then((res) => setTeam(res.data));
  };

  const handleTeam = (e) => {
    setTeamSelect(e.target.value);
  };
  const handleTeamInput = (e) => {
    setTeamSelectInput(e.target.value);
  };

  useEffect(() => {
    getPlayers();
    getTeams();
  }, []);
  return (
    <div className="homeMercato">
      <div className="mercatoTrend">
        <h2>Mercato Actus</h2>
        <MercatoArticle player={player} lien={"article"} />
      </div>
      <div className="yourTeamTrend">
        <div className="yourTeamTitle">
          <YourTeamSelect
            team={team}
            handleTeam={handleTeam}
            teamSelect={teamSelect}
          />{" "}
          <InputSelect
            teamSelectInput={teamSelectInput}
            handleTeamInput={handleTeamInput}
          />
        </div>

        <div className="mercatoTrend">
          <YourTeamArticle
            team={team}
            teamSelect={teamSelect}
            teamSelectInput={teamSelectInput}
            lien={"team"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
