function minPlanes(arr) {
    //if the first element is 0, we can't fly anywhere
    if (arr[0] === 0) return -1;
  
    let maxReach = arr[0]; // maximum station we can reach now 
    let steps = arr[0]; // number of steps we can move now 
    let planes = 1; // number of planes we have taken till now 
  
  
    for (let i = 1; i < arr.length; i++) {
      // If we have reached the last station, return the number of jumps
      if (i === arr.length - 1) return planes;
  
      // Update maxReach to the maximum station we can reach from our current station
      maxReach = Math.max(maxReach, i + arr[i]);
  
      // Decrement steps by 1
      steps--;
  
      // If steps is 0 and we have not reached the end, it means we need to take another jump
      if (steps === 0 && i < arr.length - 1) {
        // If maxReach is less than the current station, it means we can't fly forward
        if (maxReach <= i) return -1;
  
        // Reset steps and increment planes by 1
        steps = maxReach - i;
        planes++;
      }
    }
  }
  console.log(minPlanes([1,6,3,4,5,0,0,0,6])); 
