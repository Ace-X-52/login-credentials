let element = document.getElementById('top');
document.getElementsById('check').style.visibility = 'hidden';  //  Hide the checkbox
document.getElementById('submit').innerText = "<";
function logging(){
    element.innerHTML   = "Login Page";
    document.getElementById('name').style.visibility = 'hidden';
    document.getElementById('password2').style.visibility = 'hidden';
}
function signing(){
    element.innerHTML   = "Sign-Up Page";
    document.getElementById('name').style.visibility = 'visible';
    document.getElementById('password2').style.visibility = 'visible';
}