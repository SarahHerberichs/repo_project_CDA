import React from "react";
import WalkCard from "../components/WalkCard";
const walks = [
  {
    image: "https://via.placeholder.com/300x150",
    location: "Parc du Ploufplouf",
    date: "Mardi 28 Novembre",
    time: "19h30",
    title: "Rendez-vous déguisez-vous en lutin",
    timer: "5h30",
  },
  {
    image: "https://via.placeholder.com/300x150",
    location: "Parc du Pouetpouet",
    date: "Jeudi 30 Novembre",
    time: "19h30",
    title: "Rendez-vous à l'heure svp",
    timer: "",
  },
  {
    image: "https://via.placeholder.com/300x150",
    location: "Parc du Pouetpouet",
    date: "Jeudi 30 Novembre",
    time: "19h30",
    title: "Rendez-vous à l'heure svp",
    timer: "",
  },
];

const WalkList = () => {
  return (
    <div className="container-fluid mt-4">
      {/* Row avec espacement entre les cards */}
      <div className="row g-4">
        {walks.map((walk, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
            key={index}
          >
            <WalkCard walk={walk} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalkList;
