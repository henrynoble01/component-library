import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import "./style.css";

export default function Home() {
  return (
    <div className='home-container'>
      <Link to='EcoPrefrences'>
        <Button content='Prefrences' primary />
      </Link>
      <Button content='Secondary' secondary />
    </div>
  );
}
