function convert(meth){
  var num = Number(document.getElementById("pass").value);
  var x = document.getElementById("txt").value;
  if(document.getElementById("txt").value.length == 0)
      {
        alert("Please Enter String!")
      }
  switch (meth){
    case "encrypt":
      var z;
      var encrypt = '';

      for(z = 0;z < x.length; z++){
        var encr = x.charCodeAt(z);
        encrypt = encrypt + String.fromCharCode(encr + num);
      }

      document.getElementById("res").value = encrypt;
      break;
    case "decrypt":
      var i;
      var decrypt = '';

      for(i = 0;i < x.length; i++){
        var decr = x.charCodeAt(i);
        decrypt = decrypt + String.fromCharCode(decr - num);
      }

      document.getElementById("res").value = decrypt;
      break;
  }
}

function copy() {
  var copyText = document.getElementById("res");
  if (document.getElementById("res").value.length==0){
    alert("No text to copy");
  } else {
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
  }
}