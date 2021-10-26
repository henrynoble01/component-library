import React, { useState } from "react";
import { Images } from "./Assets/Assets";
import {
  onboarding,
  blinkhubBenefits,
  topBenfits,
  networkPartners,
  about,
  navItems,
} from "./data";
import {
  Segment,
  Container,
  Grid,
  Image,
  Header,
  Divider,
  Icon,
  Menu,
  List,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const { title, text, images } = blinkhubBenefits[index];

  const checkIndex = (number) => {
    if (number > blinkhubBenefits.length - 1) {
      return 0;
    }
    return number;
  };

  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <>
      {/* this is the navigation("navbar") component */}
      <Navigation />
      {/* i think this is going to be the semantic-ui banner comonent  */}
      <WelcomeBanner />
      {/* this is the semantic ui dashboard */}
      <Dashboard
        title={title}
        text={text}
        images={images}
        index={index}
        next={next}
      />
      {/* this is the semantic about section */}
      <About />

      <Footer />
    </>
  );
};

const Dashboard = ({ title, text, images, index, next }) => {
  return (
    <>
      <Container>
        <Grid>
          <>
            {/* left 1 */}
            <Grid.Column width='11' stretched>
              <Segment>
                <Grid>
                  <Grid.Column width='7'>
                    <Header as='h3'>Onboarding</Header>
                    <Header size='medium'>
                      Complete These Steps to start working with blinkhub
                    </Header>
                    <Header size='small'>2 Completed / 3</Header>
                  </Grid.Column>
                  <Grid.Column width='9'>
                    <ul className=''>
                      {onboarding.map((item, index) => (
                        <Header size='tiny' key={index + item.text}>
                          <Icon name='check circle' color='yellow' />
                          <Header.Content>{item.text}</Header.Content>
                        </Header>
                      ))}
                    </ul>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Column>

            {/* right 1 */}
            <Grid.Column width='5' stretched>
              <Segment>
                <Header color='blue' as='h3'>
                  Business Clinic
                  <Icon size='tiny' name='info circle' color='blue' />
                </Header>
                <p>
                  Our business advice and support will save you time and money,
                  allowing you to concentrate on running your business.
                </p>
              </Segment>
            </Grid.Column>

            {/*left 2  */}
            <Grid.Column width='11' stretched>
              <Segment>
                <Grid stretched>
                  <>
                    <Grid.Column width='6'>
                      <Header size='large'>
                        Top {blinkhubBenefits.length} Benefits of BlinkHub
                      </Header>
                      <Header size='medium'>{title}</Header>
                      <div>
                        {blinkhubBenefits.map((element, i) => (
                          <>
                            <div
                              key={i + element.id}
                              className={`position  ${
                                i <= index ? "bg-yellow-500" : "bg-red-900"
                              }`}></div>
                          </>
                        ))}
                      </div>
                    </Grid.Column>

                    <Grid.Column width='8' className='text'>
                      <Header size='large'>
                        <Image
                          circular
                          src={images}
                          alt={title}
                          className='icon'
                        />
                        {text}
                      </Header>
                    </Grid.Column>

                    <Grid.Column
                      width='2'
                      onClick={next}
                      verticalAlign='middle'
                      className='next'>
                      <Icon name='chevron right' size='large' />
                    </Grid.Column>
                  </>
                </Grid>
              </Segment>
            </Grid.Column>
            {/* right-2 */}
            <Grid.Column width='5' stretched>
              <Segment>
                <Header as='h2' color='blue'>
                  Top {topBenfits.length} Benefits
                </Header>
                <section>
                  {topBenfits.map((item, i) => (
                    <article key={i + item.title}>
                      <Header as='h4'>{item.title}</Header>
                      <Header.Subheader>{item.text}</Header.Subheader>
                    </article>
                  ))}
                </section>
              </Segment>
            </Grid.Column>

            {/* bottom */}
            <Grid.Column width='16' stretched>
              <Segment>
                <Header as='h2' color='blue'>
                  Network of Partners
                </Header>
                <Grid>
                  {networkPartners.map((item, i) => (
                    <Grid.Column
                      computer='5'
                      tablet='8'
                      mobile='16'
                      key={i + item.title}>
                      <Header as='h4' color='blue'>
                        {item.title}
                      </Header>
                      <p>{item.text}</p>
                    </Grid.Column>
                  ))}
                </Grid>
              </Segment>
            </Grid.Column>
          </>
        </Grid>
      </Container>
    </>
  );
};

const WelcomeBanner = () => {
  return (
    <>
      <Container>
        <Grid>
          <Grid.Column width='4'>
            <Image src={Images.BlinkHubLogo} alt='BlinkHubLogo' />
          </Grid.Column>
          <Grid.Column width='8'>
            <Header size='huge'>Welcome</Header>
            <Header size='small'>To the world of business support</Header>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

const About = () => {
  return (
    <div>
      <Container>
        <Segment>
          <Header color='blue' size='huge'>
            Who we are and what we do
          </Header>
          <Divider hidden />
          {about.map((item, index) => (
            <Header key={index} size='small'>
              <div dangerouslySetInnerHTML={{ __html: item.caption }} />
            </Header>
          ))}
        </Segment>
        <Divider section hidden />
      </Container>
    </div>
  );
};

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

export default LandingPage;
