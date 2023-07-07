import { Route } from 'react-router-dom'
import RoutesWithNotFound from './RoutesWithNotFound'
import { PrivateRoutes } from '../models'
import { Calendar } from '../pages'

const PrivateRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path={`/${PrivateRoutes.CALENDAR}`} element={ <Calendar /> } />
        </RoutesWithNotFound>
    )
}

export default PrivateRouter