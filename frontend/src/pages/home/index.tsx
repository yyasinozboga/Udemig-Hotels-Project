import React from "react";
import Hero from "../../components/hero";
import Filter from "../../components/filter";
import List from "./List";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col md:flex-row w-[90vw] mx-auto gap-7">
        <Filter />
        <List />
      </div>
    </div>
  );
};

export default Home;
