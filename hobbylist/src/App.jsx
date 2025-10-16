import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const hobbies = [
  { id: 1, title: 'Gaming', description: 'Been with me through most of my life. I love how each game is portrayed and how much time and effort goes into making them, as well as how almost every game i play is.', img: 'https://picsum.photos/id/96/3000' },
  { id: 2, title: 'Volleyball', description: 'Played competitive for around 6 years, now playing casually. I enjoy the teamwork and the positioning that the sport requires, along with how simple but technical each move is.', img: 'https://picsum.photos/id/770/3000' },
  { id: 3, title: 'Listening to Music', description: 'I love listening to music, though its mainly been video game music.', img: 'https://picsum.photos/id/180/3000' },
  { id: 4, title: 'Singing', description: 'I usually practice singing on my own time, caused by my family also really loving to sing around the house.', img: 'https://picsum.photos/id/1082/3000' }
]

const Home = () => (
  <Container className="text-center mt-5">
    <h1 className="mt-3">Welcome Home!</h1>

    {/* Home page image */}
    <img
      src="https://picsum.photos/id/1005/600/300"
      alt="Home"
      className="home-img my-4 rounded"
    />

    <p className="mt-3">
      Explore my hobbies and learn more about me by navigating the menu above!
    </p>
  </Container>
)


const Hobbies = () => (
  <Container className="mt-5">
    <h2 className="text-center mb-4">My Hobbies</h2>
    <Row>
      {hobbies.map((hobby) => (
        <Col md={3} key={hobby.id} className="mb-4">
          <Card>
            <Card.Img variant="top" src={hobby.img} />
            <Card.Body>
              <Card.Title>{hobby.title}</Card.Title>
              <Link to={`/hobbies/${hobby.id}`} className="btn btn-primary w-100">Learn More</Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
)

const HobbyDetail = () => {
  const { id } = useParams()
  const hobby = hobbies.find((h) => h.id === parseInt(id))
  if (!hobby) return <h2 className="text-center mt-5">Hobby Not Found</h2>

  return (
    <Container className="mt-5 text-center">
      <h2>{hobby.title}</h2>
      <img src={hobby.img} alt={hobby.title} className="my-3 rounded" />
      <p>{hobby.description}</p>
      <Link to="/hobbies" className="btn btn-secondary">Back to Hobbies</Link>
    </Container>
  )
}

const About = () => (
  <Container className="mt-5 text-center">
    <h2>About Me</h2>
    <p>Hello! My name is Aaron Chiu. I'm a seinor at Pace University and enjoy playing and creating video games.</p>
  </Container>
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">ReactRouteHobbies</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/hobbies/:id" element={<HobbyDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App