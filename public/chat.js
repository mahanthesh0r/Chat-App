//Make connection 
var socket = io.connect('https://mysterious-tor-40612.herokuapp.com');

//Query DOM
var message = document.getElementById('message');
 handle = document.getElementById('handle'),
 btn = document.getElementById('send'),
 output = document.getElementById('output'),
 feedback = document.getElementById('feedback');

 //Emit event
 btn.addEventListener('click',function(){
     socket.emit('chat',{
         message: message.value,
         handle: handle.value
     });
 });

 message.addEventListener('keypress', function(){
     socket.emit('typing', handle.value);
 })

 //Listen for the events
 socket.on('chat',function(data){
    feedback.innerHTML = "";
     output.innerHTML += '<p><strong>'+ data.handle +': </strong>'+ data.message + '</p>';

 });

 socket.on('typing', function(data){
     feedback.innerHTML = '<p> <em>' + data + ' is typing..</em> </p>';
 });