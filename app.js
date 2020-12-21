
var storage = localStorage.getItem("StorageKey");


if (storage !== null) {
  
  var data = JSON.parse(storage);
  
  loadData(data);
  
  var id = data.length;
}


else {
  
  id = 0;
  data = [];
}


function loadData(array) {
  array.forEach(function(todo) {
    newItem(todo.name, todo.id);
  });
}


document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    
    var todo = document.getElementById("input").value;
   
    newItem(todo, id);
    
    data.push({
      name: todo,
      id: id
    });
    
    localStorage.setItem("StorageKey", JSON.stringify(data));
  }
};


function newItem(todo, id) {
  

  var ul = document.getElementById("list");

  var li = document.createElement("li");

  li.appendChild(document.createTextNode('- ' + todo));

  
  li.setAttribute("id", id);

  ul.appendChild(li);

  todo = document.getElementById("input").value = "";

  
  li.onclick = removeItem;
}


function removeItem(event) {

  element = event.target;

  
  element.remove();
  event.currentTarget.remove();

  //localStorage.removeItem(element);
    
}