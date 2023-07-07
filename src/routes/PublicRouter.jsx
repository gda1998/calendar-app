import { Route } from 'react-router-dom'
import RoutesWithNotFound from './RoutesWithNotFound'
import { PublicRoutes } from '../models'
import { Login, Register } from '../pages'

const PublicRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path={`/${PublicRoutes.LOGIN}`} element={ <Login /> } />
            <Route path={`/${PublicRoutes.REGISTER}`} element={ <Register /> } />
        </RoutesWithNotFound>
    )
}

export default PublicRouter