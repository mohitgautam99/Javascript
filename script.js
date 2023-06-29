 let namstebtn=document.querySelector("button");
 namstebtn.addEventListener('click', inputmsg);
 function  inputmsg()
 {
    let name=prompt('Enter the name of student');
    namstebtn.textContent='Roll No' + name;
 }