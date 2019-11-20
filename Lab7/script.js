var alertDiv = document.getElementById("entrybutton");

alertDiv.addEventListener('click', function(){
    var input = document.getElementById("entryinput").value
    alert(`Leo Hiracheta: ${input}`);
    document.getElementById("textoutput").innerHTML = input;
});
