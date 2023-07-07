import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../../models'
import { HeadProvider, Title } from 'react-head'
import '../../scss/components/Errors/body.scss'

const Error404 = () => {
    return (
        <>
            <HeadProvider>
                <Title>404 Not Found</Title>
            </HeadProvider>
            <div className="error">
                <div className="error__container">
                    <div className="error__head">
                        <h1>Oops!</h1>
                    </div>
                    <h2>404 - Page not found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <Link to={ `/${PrivateRoutes.AUTH}/${PrivateRoutes.CALENDAR}` }>Go To Homepage</Link>
                </div>
            </div>
        </>
    );
}
export default Error404