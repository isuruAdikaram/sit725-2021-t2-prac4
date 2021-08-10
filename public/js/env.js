const itemsList =[
  {
    title:"Cowardly-cat",
    image:"assets/cat-1.jpg",
    link:"stupidcats.com",
    descripton:"wacked birds all day"
  },
  {
    title:"Enlightened-cat",
    image:"assets/cat-2.jpg",
    link:"evenstupidercats.com",
    descripton:"harased dogs all day"
  }
]

const testButtonFunction=()=>{
  alert('Thank you for clicking, sign up button is not yet active!')
}

// connect to the socket

// let socket = io();


// socket.on('number', (msg) => {
//     console.log('Random number: ' + msg);
// })
const addcard =(items)=>{
  items.forEach(item => {
    let itemToAppend = 
    '<div class="col s4">'+
    ' <div class="card medium">'+
    '<div class="card-image waves-effect waves-block waves-light">'+
    '<img class="activator" src="'+item.image+'"></div>'+
    '<div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span>'+
    '<p><a href="#">about</a></p>'+
    '</div>'+
    '<div class="card-reveal">'+
    '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
    '<p>Here is some more information about this product that is only revealed once clicked on.</p>'+
    ' </div></div></div></div>';
    $('#card-section').append(itemToAppend)
  });
}

$(document).ready(function(){
  console.log('Ready')
  
  //bind the button
  $('#testButton').click(testButtonFunction)

  //test get call
  $.get('/test?user_name="Fantastic User"',(result)=>{
    console.log(result)
  })
  addcard(itemsList);


})
