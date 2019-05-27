var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  Object.assign({}, obj);
  Object.assign(object, { [key]: value })
  object[key] = value;
  return object;
}


