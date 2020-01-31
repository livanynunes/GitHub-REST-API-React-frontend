import React from "react";

import DetailsSection from './Sections/DetailsSection'; 
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Parallax from "components/Parallax/Parallax.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const { ...rest } = props;
  const classes = useStyles();
  
  return (
    <div>
      <Header
        color="transparent"
        brand="P.S. Clubpetro - Desafio Desenvolvedor"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/landing-bg2.jpeg")} />
      <div className={classes.container}>
        <DetailsSection location={props.location.search}/>
      </div>
      
      <Footer />
    </div>
  );
}
