
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264; // Assuming 1 block is 264 feet
    return distanceFromHqInBlocks(pickupLocation) * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(start - destination) * feetPerBlock;
  }
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
      return 0; // Free sample
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot minus the first 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fare for long distance
    } else {
      // Return the string as expected by the test
      return 'cannot travel that far';
    }
  }
  