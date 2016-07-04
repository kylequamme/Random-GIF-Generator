$(function(){
  var peopleArray = [{name: 'Brian A.', number: 0},
                    {name: 'Richard', number: 0},
                    {name: 'Justin', number: 0},
                    {name: 'Donovan', number: 0},
                    {name: 'Trent', number: 0},
                    {name: 'Liz ', number: 0},
                    {name: 'Andrew', number: 0},
                    {name: 'Anthony', number: 0},
                    {name: 'Hillary', number: 0},
                    {name: 'Megan', number: 0},
                    {name: 'Ryan', number: 0},
                    {name: 'Connor', number: 0},
                    {name: 'Kyle', number: 0},
                    {name: 'Sahasha', number: 0},
                    {name: 'Cormac', number: 0},
                    {name: 'Brian V.', number: 0},
                    {name: 'Tracy', number: 0},
                    {name: 'Katie', number: 0},
                    {name: 'Jon', number: 0},
                    {name: 'Chewbaxter', number: 0}];
  var numTeams;

  $('.btn-numbers').on('click', function(event){
    numTeams = parseInt(event.target.value);
    $('#gen').removeClass('disabled');
  })

  $('#gen').on('click', function(){
    $('.groupList').empty();
    assignTeamNum(randomizer(peopleArray), numTeams);
    //console.log(peopleArray);
    appendToDOM(peopleArray, numTeams);

  })

function randomizer(array){
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
while (0 !== currentIndex) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
  }
return array;
}

function assignTeamNum(array, numTeams){
  var num = 1;
  for (var i = 0; i < array.length; i++) {
    array[i].number = num;
    num++;
    if(num == numTeams+1){
      num = 1;
    }

  }
}

function appendToDOM(array, num){
  $('.groupList').hide();
  for (var i = 1; i <= num; i++) {
    $('.groupList').append('<div class="group ' + i + '"> <h2>Team ' + i + '</h2></div>');
  }
  if(num < 5){
    $('h2').css("font-size", "2.5em");
  }else if(num < 8){
    $('h2').css("font-size", "2em");
  }
  for (var i = 0; i < array.length; i++) {
    $('.' + array[i].number).append('<li>' + array[i].name + '</li>');
  }
  $('.groupList').fadeIn(400);
}
});
