import PropTypes from 'prop-types'
import { HeadProvider, Title } from 'react-head'
import '../../scss/components/Errors/body.scss'

const Error500 = ({ message }) => {
    return (
        <>
            <HeadProvider>
                <Title>500 Server Error</Title>
            </HeadProvider>
            <div className="error">
                <div className="error__container">
                    <div className="error__head">
                        <h1>500</h1>
                    </div>
                    <h2>500 - Server Error</h2>
                    <p>Something went wrong.</p>
                    {
                        message !== '' && <span>Error: { message }</span>
                    }
                </div>
            </div>
        </>
    );
}
Error500.propTypes = {
    message: PropTypes.string.isRequired
}
Error500.defaultProps = {
    message: ''
}
export default Error500