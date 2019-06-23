function alphabetSort(message){
  // wirte your code here
  var arr = [];
  var result = '';
  for(let i = 0; i < message.length; i++){
	  arr[message[i]] ? arr[message[i]] ++ : arr[message[i]] = 1;
  }
  //将数组中的键值进行排序，从小到大
  var keysSort = Object.keys(arr).sort();
  // 按照键值从小到大的顺序，填充键值对应的value次。
  for(let i = 0; i < keysSort.length; i++){
	  for(let j = 0; j < arr[keysSort[i]]; j++)
		  result += keysSort[i];
  }
  return result;
}
alphabetSort('hello'); // should return 'ehllo'