import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { StyledNavigation } from "./StyledSubNav";
import { navItems } from "../data";
import { Menu, Segment, Container } from "semantic-ui-react";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState({});

  const handleItemClick = (e, { name }) => {
    setActiveItem({ activeItem: name });
  };

  return (
    <Segment inverted vertical>
      <Container>
        <Menu inverted stackable secondary>
          <Menu.Menu>
            {navItems.map((items) => (
              <Menu.Item
                key={items.id}
                name={items.text}
                active={activeItem === items.text}
                onClick={handleItemClick}>
                <Link to={`${items.link}`}>{items.text}</Link>
              </Menu.Item>
            ))}
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item
              name='sign-up'
              active={activeItem === "sign-up"}
              onClick={handleItemClick}>
              Sign Up
            </Menu.Item>
            <Menu.Item
              name='log-in'
              active={activeItem === "log-in"}
              onClick={handleItemClick}>
              Login
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </Segment>
  );
};

export default Navigation;
