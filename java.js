function myFunction() {
    var x = document.getElementById("myTable").rows.length;
    document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
    console.log(x);
}
function result(){
  var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
  var row = table.insertRow(table.rows.length);
  var name=document.getElementById("nameni").value;
  var bday=document.getElementById("bday").value;
  var gender=document.getElementById("gender").value;

  var Bday = +new Date(bday);
  var age = ~~ ((Date.now() - Bday) / (31557600000));

  var arr=[name,bday,age,gender];
  console.log(arr);
  console.log(name);
  console.log(Bday);
  console.log(age);

  var edit = "<button onclick='edit(this)'>edit</button>";
  var deleteR = "<button onclick='deleteRow(this)'>delete</button>";
   if (name != "" && bday != "") {
        for(var i= 0; i <= 5 ;i++){
          var cell = row.insertCell(i);
           
          if (i<=3) {
            cell.innerHTML = arr[i];
          }
          if (i==4) {cell.innerHTML = "<button onclick='editRow(this)'>edit</button>";}
          if (i==5) {cell.innerHTML = deleteR;}
          
        }
 }
 
}

function editRow(e) {
      console.log(e.parentNode.parentNode.rowIndex);
      var row = e.parentNode.parentNode.rowIndex;
      var trow = document.getElementsByTagName('tr')[row];
      var tcol =trow.getElementsByTagName('td');
       var tdata0 =trow.getElementsByTagName('td')[0].innerText;
       var tdata1 =trow.getElementsByTagName('td')[1].innerText;
       var tdata2 =trow.getElementsByTagName('td')[2].innerText;
       var tdata3 =trow.getElementsByTagName('td')[3].innerText;
      
      var htmlcontainer = '<label>Name</label><input type="text" name="nameni" id="nameni" required="true" value="'+tdata0+'" placeholder="Fullname" ><br>';
      htmlcontainer += '<label>BirthDay</label><input type="date" name="bday" id="bday" value="'+tdata1+'"><br>';
      htmlcontainer += '<label>Gender</label><select id="gender" value="'+tdata3+'"><option>Male</option><option>Female</option></select><br>'
      
      document.getElementById('form').innerHTML = htmlcontainer;
      document.getElementById('saveni').innerHTML = '<button onclick="save('+row+')">save</button>';
      return [tdata0,tdata1,tdata3]

      
      
       
}

function save(row){
  console.log(row);
  var table = document.getElementById('myTable').rows[row];
  var name = document.getElementById('nameni').value;
  var bday = document.getElementById('bday').value;
  var gender =document.getElementById('gender').value;

  var Bday = +new Date(bday);
  var age = ~~ ((Date.now() - Bday) / (31557600000));

  table.cells[0].innerHTML = name;
  table.cells[1].innerHTML = bday;
  table.cells[2].innerHTML = age;
  table.cells[3].innerHTML = gender;

  document.getElementById('nameni').value = null;
  document.getElementById('bday').value =null;
   document.getElementById('saveni').innerHTML = ' ';
}


function deleteRow(btn) {
  console.log(btn);
  var row = btn.parentNode.parentNode;
  console.log(row);

  row.parentNode.removeChild(row);
  console.log();
}

