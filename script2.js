const request = new XMLHttpRequest();
request.addEventListern('readystatechange', () =>{
  //console.log(request, request.readyState);
  if(request.readyState === 4){
    console.log(request.responseText);
  }
})
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();