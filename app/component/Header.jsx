import React, { createContext, useContext } from 'react'
import { AppTest, AppContext } from './Context'


function Header() {
  const { title, subTitle } = useContext(AppContext);
  const { twotwtle } = useContext(AppTest);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <h3>{twotwtle}</h3>
    </div>
  );
}

export default Header;