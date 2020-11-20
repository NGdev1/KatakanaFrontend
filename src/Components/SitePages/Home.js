import React, {useEffect, useState} from 'react';
import { properties } from '../../properties';
import Loading from '../Common/Loading'


function Home () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch({ 
            host: properties.host + "/products",
            headers: { "Access-Control-Allow-Origin" : "*"} 
        })
          .then(res => res.json())
          .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                console.log(error);
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

    if (isLoaded === false) {
        return (
            <div>
                <Loading />
            </div>
        )
    } else {
        return (
            <div>
                Items
            </div>
        )
    }
}

export default Home;