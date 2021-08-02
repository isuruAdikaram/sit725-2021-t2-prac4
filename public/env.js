const testButtonFunction=()=>{
  alert('Thank you for clicking, sign up button is not yet active!')
}

// connect to the socket

// let socket = io();


// socket.on('number', (msg) => {
//     console.log('Random number: ' + msg);
// })

console.log('test')
$(document).ready(function(){
  console.log('Ready')
  
  //bind the button
  $('#testButton').click(testButtonFunction)

  //test get call
  $.get('/test?user_name="Fantastic User"',(result)=>{
    console.log(result)
  })


})
