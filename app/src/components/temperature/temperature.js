const temperatureBuildClass = (val) => {

	let rootClass = 'weathermatic-';

	if(val < 45){
    return rootClass + 'cold';
  } else if(val < 65){
    return rootClass + 'cool';
  } else if(val < 80){
    return rootClass + 'warm';
  }

  return rootClass + 'hot';
}

export {temperatureBuildClass};