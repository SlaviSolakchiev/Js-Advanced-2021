function solve(speed, area) {

    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }

    const speedDiff = speed - limits[area];

    const getStatus = speedDiff => {
        const status = {
            [speedDiff > 40]: 'reckless driving',
            [speedDiff > 20 && speedDiff <= 40]: 'excessive speeding',
            [speedDiff <= 20]: 'speeding',
        }

        return status['true'];
    }

    if (speedDiff < 0) {
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
    }
    else {
        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${limits[area]} - ${getStatus(speedDiff)}`)
    }

}


solve(21, 'residential');