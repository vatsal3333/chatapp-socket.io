var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
  
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});

socket.emit('createMessage',{
  from:'client',
  text:'hi'},
function(){
  console.log('Got it');
});

jQuery('#message-form').on('submit', function(e){
  e.preventDefault();

  socket.emit('createMessage',{
    from:'User',
    text:jQuery('[name=message]').val()},
  function(){
    console.log('This is jQuery');
  });

})