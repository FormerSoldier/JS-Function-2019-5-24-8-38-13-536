function palindrome(message){
  // wirte your code here
  let left = 0, right = message.length - 1;
  while(left < right){
	  if(message[left] != message[right])
		  return false;
	  left++;
	  right--;
  }
  return true;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true