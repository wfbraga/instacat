import React from "react";

import Logo from './components/Logo';
import Photo from './components/Photo';

const Main = () => {

  return (
    <>
    <Logo />
    <Photo file={require("./assets/images/cat.png")} />
    <Photo file={require("./assets/images/cat2.png")}/>
    <Photo />
    </>
    )
}

export default Main;