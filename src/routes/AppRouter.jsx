import { Navigate, Route, Routes, createBrowserRouter } from 'react-router-dom'
import { PrivateRoutes } from '../models'
import { AuthGuard, PublicGuard } from '../guards'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import ErrorBoundary from '../ErrorBoundary'

const AppRouter = () => {
    return (
        <ErrorBoundary>
            <Routes>
                <Route element={ <PublicGuard /> }>
                    <Route path="/*" element={ <PublicRouter /> } />
                </Route>
                <Route element={ <AuthGuard /> }>
                    <Route path={`/${PrivateRoutes.AUTH}/*`} element={ <PrivateRouter /> } />
                </Route>
            </Routes>
        </ErrorBoundary>
    )
}

const router = createBrowserRouter([
    { path: '/', Component: () => <Navigate to={`/${PrivateRoutes.AUTH}/${PrivateRoutes.CALENDAR}`} /> },
    { path: '*', Component: AppRouter },
])

export default router