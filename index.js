var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  var newObj = object.assign({}, obj)
  object[key] = value;
  return object;
}

