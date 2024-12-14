import React from "react";

const WalkCard = ({ walk }) => {
  return (
    <div className="card" style={{ width: "100%", cursor: "pointer" }}>
      <div className="position-relative">
        <img src={walk.image} className="card-img-top" alt="Walk" />

        {walk.time && (
          <div
            className="position-absolute top-0 start-0 m-2"
            style={{ zIndex: 1 }}
          >
            <span className="badge bg-success rounded-circle p-3">
              {walk.time}
            </span>
          </div>
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title">{walk.location}</h5>
        <p className="card-text text-muted">
          {walk.date} à {walk.time}
        </p>
        <p className="card-text">{walk.title}</p>
      </div>
    </div>
  );
};

export default WalkCard;
