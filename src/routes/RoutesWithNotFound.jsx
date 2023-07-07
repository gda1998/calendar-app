import { Route, Routes } from 'react-router-dom'
import { Error404 } from '../components/Errors'

const RoutesWithNotFound = ({ children }) => {
    return (
        <Routes>
            { children }
            <Route path="*" element={ <Error404 /> } />
        </Routes>
    )
}

export default RoutesWithNotFound