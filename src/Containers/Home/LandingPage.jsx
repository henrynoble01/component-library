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
      <div className='dashboard'>
        <div className='content'>
          {/* <StyledDashboarditems> */}
          <div className='item  left-one '>
            <div className='inner '>
              <div className='circle w-2/5 text-white'>
                <h3 className='text-2xl  font-bold mb-3'>Onboarding</h3>
                <p className=' text-lg w-11/12 font-semibold mb-3'>
                  Complete These Steps to start working with blinkhub
                </p>
                <p className='text-lg font-normal'>2 Completed / 3</p>
                {/* <div className='steps stepper'>
                <div className='line completed'></div>
                <div className='line completed'></div>
                <div className='line '></div>
              </div> */}
              </div>
              <div className='steps-list w-3/5  flex items-center  pl-5 '>
                <ul className='flex gap-y-3 flex-col  '>
                  {onboarding.map((item, index) => (
                    <li
                      key={index + item.text}
                      className='flex gap-x-3  items-start '>
                      <Icon name='check circle' color='yellow' />
                      <span className='text-lg'>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* </StyledDashboarditems> */}

          {/* <StyledDashboarditems> */}
          <div className='item right-one '>
            <header>
              Business Clinic
              <Icon size='tiny' name='info circle' color='blue' />
            </header>
            <p>
              Our business advice and support will save you time and money,
              allowing you to concentrate on running your business.
            </p>
          </div>
          {/* </StyledDashboarditems> */}

          {/* <StyledDashboarditems> */}
          <div className='item left-two   '>
            {/* <header className='header'>Blinkhub Benfits</header> */}
            <div className='benefits'>
              <div className='card'>
                <div className='circle '>
                  <h3>Top {blinkhubBenefits.length} Benefits of BlinkHub</h3>
                  <p>{title}</p>
                  <div className='slide-index '>
                    {blinkhubBenefits.map((element, i) => (
                      <>
                        <div
                          key={i + element}
                          className={`position  ${
                            i <= index ? "bg-yellow-500" : "bg-red-900"
                          }`}></div>
                      </>
                    ))}
                  </div>
                </div>
                <div className='text'>
                  <img src={images} alt={title} className='icon' />
                  <span>{text}</span>
                </div>
                <div onClick={next} className='next'>
                  <Icon name='chevron right' size='large' />
                </div>
              </div>
            </div>
          </div>
          {/* </StyledDashboarditems> */}

          {/* <StyledDashboarditems> */}
          <div className='item right-two '>
            <header>Top {topBenfits.length} Benefits</header>
            <section>
              {topBenfits.map((item, i) => (
                <article key={i + item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </section>
          </div>
          {/* </StyledDashboarditems> */}

          {/* <StyledDashboarditems> */}
          <div className='item bottom '>
            <header>Network of Partners</header>
            <section>
              {networkPartners.map((item, i) => (
                <div key={i + item.title} className='network'>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </section>
          </div>
          {/* </StyledDashboarditems> */}
        </div>
      </div>
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
