var messageContainer = document.querySelectorAll('.messages')[0];
var addLink = document.querySelectorAll('.add-link')[0];

addLink.addEventListener('click', function () {
  var value = Math.floor(Math.random() * 13);

  Chat.sendMessage({
    sender: username,
    type: 'activity',
    value: value
  });
}


$('.museum').click(function () {
  sendMessage(0);
});

$('.coffee').click(function () {
  sendMessage(1);
});

$('.drinks').click(function () {
  sendMessage(2);
});

$('.park').click(function () {
  sendMessage(3);
});



Chat.onMessage(function (data) {
  var message = document.createElement('div');
  message.className = 'message';
  message.innerHTML += 'From: ' + data.sender + '<br>';
  message.innerHTML += 'Type: ' + data.type + '<br>';
  message.innerHTML += 'Value: ' + data.value;
  messageContainer.appendChild(message);
});


var value = {
  0: 'coffee'
  1: 'drinks'
  2: 'museum'
  3: 'movie'
  4: 'homework'
  5: 'park'
  6: 'gallery'
  7: 'shop'
  8: 'meal'
  9: 'nothing'
}