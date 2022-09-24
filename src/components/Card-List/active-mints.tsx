import Card from "../Card/card";
import React from "react";
import "./card-list.css";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    <p className="Header">Active Mints</p>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
