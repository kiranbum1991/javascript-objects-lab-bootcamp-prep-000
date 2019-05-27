var recipes = {};

function updateObjectWithKeyAndValue (Object, key, value) {
  Object[key] = value;
  var newObj = Object.assign({}, obj)
  return newObj;
}

