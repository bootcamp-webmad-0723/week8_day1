import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {

    return (
        <Container className="Home">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    <h1>Ops... 404</h1>
                    <hr />
                    <p>Página no encontrada D:</p>
                    <Link to="/galeria">
                        <Button variant="dark">Ir a la galería</Button>
                    </Link>

                </Col>

            </Row>

        </Container>
    )
}

export default NotFoundPage