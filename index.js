const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push("Ralph")
  return cats
}

function destructivelyPrependCat(name) {
  cats.unshift("Bob")
  return cats
}

function destructivelyRemoveLastCat(name) {
  cats.pop("Garfield")
  return cats
}

function destructivelyRemoveFirstCat(name) {
  cats.shift("Milo")
  return cats
} 

function appendCat(name) {
  const copyCats = cats.slice();
  copyCats.push(name);
  return copyCats;
}

function prependCat(name) {
  const copyCats = cats.slice();
  copyCats.unshift("Arnold");
  return copyCats;
  
}

function removeLastCat(name) {
  const copyCats = cats.slice();
  copyCats.pop("Garfield");
  return copyCats;
}

function removeFirstCat(name) {
  const copyCats = cats.slice();
  copyCats.shift("Milo");
  return copyCats;
}
