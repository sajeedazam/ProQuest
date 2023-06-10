import React, { useState } from 'react';
import '../City/city2.css';

export default function City2() {
    const [postalCode, setPostalCode] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [isWithinBounds, setIsWithinBounds] = useState(false);

    const handlePostalCodeSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${postalCode}&key=KEY`)
            .then((response) => response.json())
            .then((data) => {
                const { latitude, longitude } = data;
                setLatitude(latitude);
                setLongitude(longitude);
                setIsWithinBounds(checkIfWithinBounds(latitude, longitude));
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const checkIfWithinBounds = (lat, lng) => {
        const vancouverBounds = {
            west: -123.2654,
            east: -123.0236,
            north: 49.3049,
            south: 49.1996,
        };

        return (
            lng >= vancouverBounds.west &&
            lng <= vancouverBounds.east &&
            lat >= vancouverBounds.south &&
            lat <= vancouverBounds.north
        );
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handlePostalCodeSubmit}>
                <p>Select city</p>
                <input
                    className="input"
                    type="text"
                    placeholder="Enter postal code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
                <button className="button" type="submit">Submit</button>
            </form>

            {latitude && longitude && (
                <div className="result">
                    <p>Latitude: {latitude}</p>
                    <p>Longitude: {longitude}</p>
                    <p className={isWithinBounds ? 'within' : 'outside'}>
                        {isWithinBounds ? 'Within boundaries' : 'Outside boundaries'}
                    </p>
                </div>
            )}
        </div>
    );
};

