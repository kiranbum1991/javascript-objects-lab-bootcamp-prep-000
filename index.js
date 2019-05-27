var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  let objCopy = Object.assign({}, object);
  objCopy[key] = value;
return objCopy;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key) {
  delete object[key];
  return Object.assign({}, object);
}

function destructivelyDeleteFromObjectByKey (object, key) {
  object.delete[key];
  return object;
}