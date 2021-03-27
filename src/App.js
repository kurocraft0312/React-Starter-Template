import React from "react"
import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import Home from './views/Home'

const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Home } />
            </Switch>
        </BrowserRouter>
    )
}

export default router