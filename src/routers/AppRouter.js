import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function AppRouter() {
    return (
        <Router>
            
            <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/" component={Login} />
            </Switch>
        
        </Router>
    )
}

export default AppRouter
