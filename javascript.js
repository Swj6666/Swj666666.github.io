// JavaScript Document
function signup() {window.location.href='注册跳转.html';}
function login() {
  console.log('舒伟建是帅哥');

  username.value;
  password.value;
  if (username.value=='') {
    m.style.display='block';
    m.innerText='用户名不能为空!';
    return;
  }
  if (password.value==''){
    m.style.display='block';
    m.innerText='密码不能为空!';
    return;
  }
  if (username.value=='admin' && password.value=='2008416') {
    m.style.display='block';
    m.innerText='登录成功';
    m.style.color='green';
    setTimeout(function () {
      window.location.href='登录跳转.html';
    },1500);
  }
  else {
    m.style.display='block';
    m.innerText='用户名或密码错误';
    return;
  }
}