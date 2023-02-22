import {app} from "./firebaseConfig.js"
// console.log(app);
import {getDatabase,set,ref,child,update,remove,get} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
const db=getDatabase();
// console.log(ref(db));
let name ,rollNo,section;
name = document.getElementById("sname");
rollNo = document.getElementById("sroll");
section = document.getElementById("section");
// let count;
// let count=0;
// function countC()
// {
//     let path="user";
//     get(child(ref(db),path)).then((snapshot)=>{
//        snapshot.forEach(element => {
//         count=element.key();
//        });
//     }).catch((err)=>{console.log(err)});
//     return count;
// }
function readUsers()
{
    let path="user";
    document.getElementById("s1").innerText="STUUDENT DETAILS";
    let display=document.getElementById("displayData");
    display.innerHTML+="<tr><td>Name</td><td>Roll Number</td><td>Section</td></tr>"
    get(child(ref(db),path)).then((snapshot)=>{
       snapshot.forEach(element => {
        // console.log(element.val().Name+" "+element.val().RollNo);
        display.innerHTML+="<tr><td>"+element.val().Name+"</td><td>"+element.val().RollNo+"</td><td>"+element.val().Section+"</td></tr>";
       });
    }).catch((err)=>{console.log(err)});
}
let readbtn=document.getElementById("read");
readbtn.addEventListener("click",readUsers);
function addUser()
{
    // count=countC()
    let path="user/"+rollNo.value;
    console.log("adding user");
    // set(ref(db,"user/1"),{Name : name,RollNo : rollNo,Section : section});
    set(ref(db,path),{Name : name.value,RollNo : rollNo.value,Section : section.value});
    console.log("added User");
    // count++;
}
let addbtn=document.getElementById("add");
addbtn.addEventListener("click",addUser);
let updatebtn=document.getElementById("update");
updatebtn.addEventListener("click",addUser);
function deleteUser()
{
    let path="user/"+rollNo.value;
    remove(ref(db,path));
}
let deletebtn=document.getElementById("delete");
deletebtn.addEventListener("click",deleteUser);