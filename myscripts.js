// MY SCRIPT FILE

// change message when form is submitted
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit);


// sonrasil
var imgCaption = document.getElementById("#soruZ");
var attachment = document.getElementById("attachment");
var saveButton = document.getElementById("myButt");
var tooltip = document.getElementById("toolpit");

var text = "";

attachment.onchange = function(){
  if(attachment.value != "") {
    imgCaption.style.display="block";
  }
  else{
    imgCaption.style.display="none";
  }
}

// Save answers
saveButton.onclick = function(){
  text = "javascript:document.getElementById(\"#isim\").value=\"";
  text += document.getElementById("#isim").value;
  text += "\"; var crn=[\"-\",";
  for (let i=1; i<5; i++){
    text += "\"" + document.getElementById("#soru" + i.toString().padStart(2,"0")).value + "\",";
  }
  text += "\"" + document.getElementById("#soruQQ").value + "\",";
  text += "\"" + document.getElementById("#soruXX").value + "\",";
  text += "\"" + document.getElementById("#soruYY").value + "\"";
  text += "];for(var i=1;i<crn.length;i++){switch(i){case crn.length-3:document.getElementById(\"#soruQQ\").value=crn[i];break;case crn.length-2:document.getElementById(\"#soruXX\").value=crn[i];break;case crn.length-1:document.getElementById(\"#soruYY\").value=crn[i];break;default:var d=document.getElementById(\"#soru\"+i.toString().padStart(2,'0'));d.value=crn[i];}}void(0);";

  navigator.clipboard.writeText(text).then(() => {
    tooltip.innerHTML = 'Content copied to clipboard';
    /* Resolved - text copied to clipboard successfully */
  },() => {
    tooltip.innerHTML ='Failed to copy';
    /* Rejected - text failed to copy to the clipboard */
  });
}


