import "./card.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Monster } from "../../App";
import { Geo } from "../../data/proto_GeoNFT";
type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id } = monster;

  const navigate = useNavigate();

  return (
    <div>
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          style={{
            width: `130px`,
            height: `130px`,
            clipPath: `polygon(50% 1%, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)`,
            background: "grey",
          }}
        />
        <p className="detail">
          <b>{Geo.features[1].properties.latitude}</b>
          <br />
          <br />
          Goa, India
          <br />
          <br />
          <button
            onClick={() => {
              navigate("/Map");
            }}
          >
            View {">"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Card;
