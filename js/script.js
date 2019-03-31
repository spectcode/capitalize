$(document).ready(function() {
  $("form#newcontact").submit(function(event) {
    event.preventDefault();
    var proceed = [];
    var capitalize = [];
    var input = $("input#exampleInputEmail1").val();
    proceed = input.split(" ");
    for(index = 0; index < proceed.length; index ++) {
      capitalize.push(proceed[index].charAt(0).toUpperCase() + proceed[index].substr(1));
    }
    var output = capitalize.join(" ");
    document.getElementById('output').innerHTML = output;
  });
});
