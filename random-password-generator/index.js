upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lowerLetters = "abcdefghijklmnopqrstuvwxyz";
numbers = "01234567";
symbols = "!@#$%^&*()";

// password length
lengthB = document.getElementById("lengthB");
ucl = document.getElementById("ucl");
lcl = document.getElementById("lcl");
num = document.getElementById("num");
sym = document.getElementById("sym");
generateB = document.getElementById("generateB");
generatedPwd = document.getElementById("generatedPwd");
copyB = document.getElementById("copyB");

var lenOfPwd = 8;

lengthB.onclick = function () {
  lenOfPwd = Number(document.getElementById("lengthInput").value);
  console.log(lenOfPwd);
};

generateB.onclick = function () {
  var str = "";
  str += ucl.checked ? upperLetters : "";
  str += lcl.checked ? lowerLetters : "";
  str += num.checked ? numbers : "";
  str += sym.checked ? symbols : "";

  var pwd = "";
  for (var i = 0; i < lenOfPwd; i++) {
    var r = Math.floor(Math.random() * str.length);
    pwd += str.charAt(r);
    
  }
  generatedPwd.value = pwd;
};

copyB.onclick = function(){
    var copyText = generatedPwd;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}
