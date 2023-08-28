import CoasterCard from '../CoasterCard/CoasterCard'
import { Row } from 'react-bootstrap'
import Loader from '../Loader/Loader'

const CoastersList = ({ coasters }) => {

    return (
        !coasters ?
            <Loader />
            :
            <>
                <Row>
                    {
                        coasters.map(elm => <CoasterCard {...elm} />)
                    }
                </Row>
            </>
    )

}

export default CoastersList