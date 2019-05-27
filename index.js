var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  var newObj = Object.assign({}, obj)
  object[key] = value;
  return object;
}

