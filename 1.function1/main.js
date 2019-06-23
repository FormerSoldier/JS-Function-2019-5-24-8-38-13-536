function reverseString(message){
  // wirte your code here
  // plan A
  //console.log(message.split('').reverse().join(''));
  
  // plan B
  /*var result = [];
  for(let i = 0; i < message.length; i++){
	  result.unshift(message[i]);
  };
  console.log(result.join(''));*/
  
  // plan C
  var result = '';
  for(let i = message.length-1; i >= 0; i--){
	  result += message[i];
  }
  console.log(result);
}
reverseString('hello'); // should return 'olleh'