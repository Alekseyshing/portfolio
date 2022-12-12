import { Col, Container, Row, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import colorSharp2 from "../assets/img/color-sharp2.png";

interface IProjects {
  title: string;
  description: string;
  imgUrl: string;
  [key: string]: any
}


export const Projects = () => {
  const projects: IProjects[] = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ]


  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum quasi nulla nam similique neque possimus dolores sunt ipsa consectetur! Harum vitae illo dolor mollitia cumque at eos molestiae dolores.</p>
            <Tab.Container>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ducimus perferendis necessitatibus molestiae ipsum dolore voluptatem minus labore voluptatibus impedit corrupti corporis illum, nisi, maxime repellendus rerum obcaecati aliquid iusto?</Tab.Pane>
                <Tab.Pane eventKey='third'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error dolores libero ex corrupti maiores dicta, dolore at ducimus corporis, veniam saepe voluptatem placeat, enim fugit tempore commodi ut aperiam.</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} />
    </section>
  )
}