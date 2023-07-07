import { Suspense } from 'react'
import { AppRouter } from './routes'
import { RouterProvider } from 'react-router-dom'

const App = () => {
    return (
        <Suspense fallback={ 'Loading...' }>
            <RouterProvider router={AppRouter} />
        </Suspense>
    )
}

export default App