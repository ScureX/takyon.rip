import React from "react";
import { useEffect, useState } from 'react';
import "./GithubStats.css";

function GithubStats() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch('https://api.github.com/users/ScureX', {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      });
      const data = await response.json();
      setStats(data);
    };

    fetchStats();
  }, []);

  return (
    <div className="GithubStats">
      <p>Followers: {stats.followers}</p>
      <p>Following: {stats.following}</p>
      <p>Public Repos: {stats.public_repos}</p>
    </div>
  );
}

export default GithubStats;

