function MarvelService(){
  var key = '?apikey=cc2826b199f950b9ef5c715ccfef51df';
  var baseUrl = 'http://gateway.marvel.com/v1/public/'
  
  var marvelCharacters = [];
  var myCharacters = [];
  
  
  this.getMarvelCharacters = function(){
    //what should this function return
    return JSON.parse(JSON.stringify(marvelCharacters))
  }
  
  this.getMyCharacters = function(){
    //what should this function return
    return JSON.parse(JSON.stringify(myCharacters))
  }
  
  this.addToMyCharacters = function(id){
    //in order to add a character to your list you will first need to find 
    //the character by its id in the marvelCharacters array
    for (var i = 0; i < marvelCharacters.length; i++) {
      var character = marvelCharacters[i];
      if (character.id == id) {
        myCharacters.push(marvelCharacters[i])
      }
    }
    // console.log(myCharacters)

  }

  this.addToMarvelCharacters = function(id){
    for (var i = 0; i < myCharacters.length; i++) {
      var myCharacter = myCharacters[i];
      if (myCharacter.id == id) {
        marvelCharacters.push(myCharacter)
      }
    }
  }
  
this.removeMarvelCharacter = function(id){
  //Removes character from marvelCharacters object array
  for (var i = 0; i < marvelCharacters.length; i++) {
    var marvelCharacter = marvelCharacters[i];
    if (marvelCharacter.id == id) {
      marvelCharacters.splice(i, 1)
    }
  }
}

  this.removeMyCharacter = function(id){
    //you need to find the character that you want to remove by its id
    //and remove it.
    for (var i = 0; i < myCharacters.length; i++) {
      var charToRemove = myCharacters[i];
      if (charToRemove.id == id) {
        myCharacters.splice(i, 1)
        console.log(myCharacters)
      }
    }

  }
  
  
  this.getCharacters = function(callWhenDone){
    //Use &offset=Number to add pagination
    $.get(baseUrl + 'characters'+ key, function(response){
      marvelCharacters = response.data.results;
      callWhenDone(marvelCharacters) //ready() in controller
      console.log(marvelCharacters)
    })
  }
  
  
}
