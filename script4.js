const getTodoes = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListern('readystatechange', () => {
    //console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  })
  request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
  request.send();
}
console.log(1);
console.log(2);

getTodoes((err, data) => {
  console.log('callback fired');
  //console.log(err, data);
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});

console.log(3);
console.log(4);
