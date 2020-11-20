import React, { useState, useEffect } from 'react';
import { properties } from '../../properties';

export default function Profile() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    var count = 0;

    useEffect(() => {
        count++;
        console.log(count);
    }, [])


    if (error) {
        return <div> error </div>
    } else {
        return <div>OK</div>
    }
}