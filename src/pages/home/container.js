import React from "react";
import HomePageMain from "./HomePageMain";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./home.scss";
import  ShowOneVideo  from "./components/video";


export const HomePage = () => (
  <React.Fragment>
    <Header />
    <HomePageMain />
    <Footer />
  </React.Fragment>
);

export const VideoPage = props => {
  return (
    <React.Fragment>
      <Header />
      <ShowOneVideo id={props.match.params.id}/>
      <Footer />
    </React.Fragment>
  );
};
