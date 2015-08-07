export default function(obj, keyObject){
  var clones = {};
  Object.keys(keyObject).forEach(partName => {
    var clone = {};
    keyObjectspartName].forEach(key =>{
      clone[key] = obj[key];
    });
    clones[partName](clone);
  });
  return clones;
}
