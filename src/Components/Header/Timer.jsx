import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

function Timer() {
    const [time, setTime] = useState(60);
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000);
        return () => clearTimeout();

    }, [time]);
    if (!time)
        return <Redirect to={'/sign-out'}/>;

    return (
        <ul className="nav text-info align-items-center col-12 col-md-auto justify-content-end">
            <li className="nav-item px-1">
                <span className="h5 ">{time}</span>
            </li>
            <li className="nav-item">
                <i className="icofont-wall-clock h4 icofont-2x "/>
            </li>
        </ul>
    );
}

export default Timer;
