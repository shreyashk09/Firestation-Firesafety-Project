var config = {
//     Add config vars
  };
  firebase.initializeApp(config);

var para1,t1,para2,t2,para3,t3;
var iDiv;
var i;
var k;
var dividee;
var houses;
var keys;
var hID;
var name;
var call;
var database = firebase.database();
var ref= database.ref('city');
var patimg1 = document.createElement("IMG")
patimg1.setAttribute("src", "avatar.png");
patimg1.className = 'patpic';
var patimg2 = document.createElement("IMG")
patimg2.setAttribute("src", "avatar.png");
patimg2.className = 'patpic';
var patimg3 = document.createElement("IMG")
patimg3.setAttribute("src", "avatar.png");
patimg3.className = 'patpic';
var patimg4 = document.createElement("IMG")
patimg4.setAttribute("src", "avatar.png");
patimg4.className = 'patpic';

function showdata(){

ref.on('value',getData,errData);

function getData(data){
  houses = data.val();
  keys = Object.keys(houses);
  console.log(keys);

    k=keys[0];
    hID = houses[k].houseID;
    name = houses[k].houseOwner;
    call = houses[k].temp;
    //$('#pat1').empty();
    document.getElementById('pat1').innerHTML = "";

    para1 = document.createElement("P");
    t1 = document.createTextNode(' HOUSE ID : ' + hID);
    para1.appendChild(t1);
    para2 = document.createElement("P");
    t2 = document.createTextNode(' OWNER NAME : ' + name);
    para2.appendChild(t2);
    para3 = document.createElement("P");
    t3 = document.createTextNode(' Temperature : ' + call);
    para3.appendChild(t3);
    iDiv = document.getElementById('pat1');
    iDiv.appendChild(patimg1);
    iDiv.appendChild(para1);
    iDiv.appendChild(para2);
    iDiv.appendChild(para3);


    if(call >= 40)
    {
      dividee = document.getElementById("pat1");
      dividee.style.backgroundColor = '#FF7043';
      dividee.style.color = 'white';
    }
    else
    {
      dividee = document.getElementById("pat1");
      dividee.style.backgroundColor = '#ECEFF1';
      dividee.style.color = 'black';
    }

    /* ============== */

    k=keys[1];
    hID = houses[k].houseID;
    name = houses[k].houseOwner;
    call = houses[k].temp;

  //  $('#pat2').empty();
    document.getElementById('pat2').innerHTML = "";
    para1 = document.createElement("P");
    t1 = document.createTextNode(' HOUSE ID : ' + hID);
    para1.appendChild(t1);
    para2 = document.createElement("P");
    t2 = document.createTextNode(' OWNER NAME : ' + name);
    para2.appendChild(t2);
    para3 = document.createElement("P");
    t3 = document.createTextNode(' Temperature  : ' + call);
    para3.appendChild(t3);
    iDiv = document.getElementById('pat2');
    iDiv.appendChild(patimg2);
    iDiv.appendChild(para1);
    iDiv.appendChild(para2);
    iDiv.appendChild(para3);

    if(call >=40)
    {
      dividee = document.getElementById("pat2");
      dividee.style.backgroundColor = '#FF7043';
      dividee.style.color = 'white';
    }
    else
    {
      dividee = document.getElementById("pat2");
      dividee.style.backgroundColor = '#ECEFF1';
      dividee.style.color = 'black';
    }


    /* =============== */

    k=keys[2];
    hID = houses[k].houseID;
    name = houses[k].houseOwner;
    call = houses[k].temp;

    //$('#pat3').empty();

    document.getElementById('pat3').innerHTML = "";
    para1 = document.createElement("P");
    t1 = document.createTextNode(' HOUSE ID : ' + hID);
    para1.appendChild(t1);
    para2 = document.createElement("P");
    t2 = document.createTextNode(' OWNER NAME : ' + name);
    para2.appendChild(t2);
    para3 = document.createElement("P");
    t3 = document.createTextNode(' Temperature : ' + call);
    para3.appendChild(t3);
    iDiv = document.getElementById('pat3');
    iDiv.appendChild(patimg3);
    iDiv.appendChild(para1);
    iDiv.appendChild(para2);
    iDiv.appendChild(para3);

    if(call >=40)
    {
      dividee = document.getElementById("pat3");
      dividee.style.backgroundColor = '#FF7043';
      dividee.style.color = 'white';
    }
    else
    {
      dividee = document.getElementById("pat3");
      dividee.style.backgroundColor = '#ECEFF1';
      dividee.style.color = 'black';
    }


    /* ================ */

    k=keys[3];
    hID = houses[k].houseID;
    name = houses[k].houseOwner;
    call = houses[k].temp;

    //$('#pat4').empty();
document.getElementById('pat4').innerHTML = "";
    para1 = document.createElement("P");
    t1 = document.createTextNode(' HOUSE ID : ' + hID);
    para1.appendChild(t1);
    para2 = document.createElement("P");
    t2 = document.createTextNode(' OWNER NAME : ' + name);
    para2.appendChild(t2);
    para3 = document.createElement("P");
    t3 = document.createTextNode(' TEMPERATURE : ' + call);
    para3.appendChild(t3);
    iDiv = document.getElementById('pat4');
    iDiv.appendChild(patimg4);
    iDiv.appendChild(para1);
    iDiv.appendChild(para2);
    iDiv.appendChild(para3);

    if(call >=40)
    {
      dividee = document.getElementById("pat4");
      dividee.style.backgroundColor = '#FF7043';
      dividee.style.color = 'white';
    }
    else
    {
      dividee = document.getElementById("pat4");
      dividee.style.backgroundColor = '#ECEFF1';
      dividee.style.color = 'black';
    }



}
function errData(data){
  console.log('Error!');
  console.log(err);
}
//function showdata(){
/*
var para = document.createElement("P");
var t = document.createTextNode("This is a paragraph");
para.appendChild(t);
var iDiv = document.createElement('div');
iDiv.id = 'div1';
iDiv.className = 'div1';
iDiv.appendChild(para);
document.body.appendChild(iDiv);
*/
}
