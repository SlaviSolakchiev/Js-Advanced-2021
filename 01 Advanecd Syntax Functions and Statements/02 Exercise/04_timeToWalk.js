function solve(steps, footprintInMeters, speed) {

    let distanceInMeters = steps * footprintInMeters;
    let speedForMeterInSec = speed / 3.6;
    let breakTime = Math.floor(distanceInMeters / 500);

    let time = distanceInMeters / speedForMeterInSec + breakTime * 60;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    if (hours < 10) {
        console.log(`0${hours}:${minutes}:${seconds}`);
    }
    else {
        console.log(`${hours}:${minutes}:${seconds}`);
    }

}

solve(2564, 0.70, 5.5);