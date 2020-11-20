import React from 'react'
import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"

import Profile from './SitePages/Profile'
import Home from './SitePages/Home'


class Main extends React.Component {
    render() {
        const { history } = this.props
        return (
            <Switch>
                <Route history={history} path='/profile' component={Profile} />
                <Route history={history} path='/catalog' component={Home} />
                <Redirect from='/' to='/catalog'/>
            </Switch>
        )
    }
}

export default withRouter(Main)