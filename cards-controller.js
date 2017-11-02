function CardsController() {
  var marvelService = new MarvelService()

  this.add = function add(id) {
    // console.log('characterId', id)
    if (marvelService.checkTeamLength()) {
    marvelService.addToMyCharacters(id);
    updateRoster()
      marvelService.removeMarvelCharacter(id);
      updateMarvel(marvelService.getMarvelCharacters())
    }
  }
  this.remove = function remove(id) {
    marvelService.addToMarvelCharacters(id);
    updateMarvel(marvelService.getMarvelCharacters())
    marvelService.removeMyCharacter(id)
    updateRoster()
  }

  marvelService.getCharacters(ready)

  function ready(data) {

    updateMarvel(data)
  }

  function updateMarvel(list) {
    var elem = document.getElementById('marvel-characters')
    elem.innerHTML = ''
    var marvelTemplate = ''
    for (var i in list) {
      var character = list[i];
      character.thumbnail.path = character.thumbnail.path.replace('http:', '')
      marvelTemplate += `
      <div class="card col-sm-12 col-md-6 col-lg-4 thumbnail">
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100px">
        <h3>${character.name}</h3>
        <div>
          <button class="btn-success" id="${character.id}" onclick="cardsCtrl.add('${character.id}')">Add to Team</button>
        </div>
      </div>
      `

    }
    elem.innerHTML = marvelTemplate

  }

  function updateRoster() {
    var myChars = marvelService.getMyCharacters()
    // console.log(myChars)
    var myCharsElem = document.getElementById("my-characters")
    myCharsElem.innerHTML = ''
    var teamTemplate = ''
    for (var i in myChars) {
      var myChar = myChars[i];
      console.log(myChar)
      teamTemplate += `
        <div class="card col-sm-12 col-md-6 col-lg-4 thumbnail">
         <img src="${myChar.thumbnail.path}.${myChar.thumbnail.extension}" width="100px">
         <h3>${myChar.name}</h3>
          <div>
            <button class="btn-success" id="my-team-${i}" onclick="cardsCtrl.remove('${myChar.id}')">Remove from Team</button>
          </div>
        </div>
        `
    }
    myCharsElem.innerHTML = teamTemplate
  }
}

