import React from 'react';
import {Link, withRouter} from 'react-router-dom';
//withRouter is a higher order componenet which means it takes another component as argument


const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: '#ff9900' };
    else return { color: '#ffffff' };
}; 


//we don't need class component as we don't need states,so we wil create functional component.
const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/')} to="/">
                    Home
                </Link>
            </li>

        </ul>
    </div>
);

export default withRouter(Menu);

