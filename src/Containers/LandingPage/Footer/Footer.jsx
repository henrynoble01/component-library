import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../Assets/Assets";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <Segment inverted vertical>
        <Container>
          <Grid columns='equal'>
            <Grid.Column className='logo img-container'>
              <Image src={Images.BlinkHubLogo} alt='BlinkHub Logo' />
            </Grid.Column>
            <Grid.Column>
              <Header size='medium' inverted>
                Business Ecosystem Linkages
              </Header>
              <List>
                <List.Item>#30 trans woji road 2nd floor</List.Item>
                <List.Item>Port Harcourt</List.Item>
                <List.Item>Rivers State</List.Item>
                <List.Item>Tel: +234 08033131904</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <Header size='medium' inverted>
                Legal
              </Header>

              <List>
                <List.Item>
                  <Link to='/terms-of-use'>Terms and Conditions</Link>
                </List.Item>
                <List.Item>Cookie Policy</List.Item>
              </List>
            </Grid.Column>
          </Grid>
          <Divider hidden />
          <Menu inverted>
            <Menu.Menu position='right'>
              <Icon size='big' name='twitter' />
              <Icon size='big' name='facebook' />
              <Icon size='big' name='linkedin' />
            </Menu.Menu>
          </Menu>
        </Container>
      </Segment>
    </>
  );
};

export default Footer;
