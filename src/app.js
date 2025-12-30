window.onload = function () {
  let Titulo = document.getElementById("Titulo")
  Titulo.innerHTML = "This Page Doesn't Onload Because...";
  let excusas = document.getElementById("excusas")
  excusas.innerHTML = ""
  let sorry = document.getElementById("sorry")
  sorry.innerHTML= "Try again later..."
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


  let RandomWho = Math.floor(Math.random()* who.length);
  console.log(RandomWho)
  let RandomAction = Math.floor(Math.random()* action.length);
  console.log(RandomAction)
  let RandomWhat = Math.floor(Math.random()* what.length);
  console.log(RandomWhat)
  let RandomWhen = Math.floor(Math.random()* when.length);
  console.log(RandomWhen)

  excusas.innerHTML = who[RandomWho]+" "+ action[RandomAction]+" "+ what[RandomWhat]+" "+ when[RandomWhen];
};