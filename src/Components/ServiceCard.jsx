/* eslint-disable react/prop-types */

// REACT ROUTER DOM
import { Link } from "react-router-dom";

// CARD INFO
const cards = [
  {
    id: "1",
    url: "/fasttrack",
    title: "FastTrack Build",
    desc: "Up to 4 pages, responsive design, contact form with custom email plus more...",
    img: "./FastTrack.webp",
    price: "from £150",
  },
  {
    id: "2",
    url: "/startup",
    title: "StartUp Build",
    desc: "Up to 6 pages, responsive design, basic SEO, custom UI & UX research and design, plus more...",
    img: "./StartUp.webp",
    price: "from £295",
  },
  {
    id: "3",
    url: "/business",
    title: "Business Build",
    desc: "Up to 10 pages, animated page and menu transitions, FREE domain setup, FREE hosting for 1 year plus more...",
    img: "./Business.webp",
    price: "from £550",
  },
  {
    id: "4",
    url: "/support",
    title: "Tech Support",
    desc: "From hosting to domain setup, we've got your back!",
    img: "./FastTrack.webp",
    price: "from £6 per month",
  },
];

const Card = ({ id, url, title, desc, img, price }) => (
  <Link to={url}>
    <li className="bg-white m-10 p-8 rounded-lg" key={id}>
      <h2 className="text-center font-bold text-xl pb-4 text-black ">
        {title}
      </h2>
      <img src={img} className="pb-4 w-32" />
      <h3 className="description">{desc}</h3>
      <h4 className="price">{price}</h4>
    </li>
  </Link>
);

const CardContainer = () => {
  return (
    <div>
      <ul className="cardContainer">{cards.map(Card)}</ul>
    </div>
  );
};

export default CardContainer;
