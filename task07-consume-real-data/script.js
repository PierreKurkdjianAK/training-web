async function getData(url)
{
  try
  {
    const response = await fetch(url);
    const data = await response.json();
    let islands       = data.islands.sort(      function(a, b) { return a.name.localeCompare(b.name); }).slice(0, 3);
    let characters    = data.characters.sort(   function(a, b) { return a.name.localeCompare(b.name); }).slice(0, 4);
    let mysticObjects = data.mysticObjects.sort(function(a, b) { return a.name.localeCompare(b.name); }).slice(0, 4);
    islands.forEach(island => document.getElementById("islands").innerHTML += island.name + '<br>');
    characters.forEach(character => document.getElementById("characters").innerHTML += character.name + '<br>');
    mysticObjects.forEach(mysticObject => document.getElementById("mysticObjects").innerHTML += mysticObject.name + '<br>');
  }
  catch (error)
  {
    console.log(error);
  }
}

getData("https://static.akurey.com/trainings/OnePieceInformation.json");
