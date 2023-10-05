function studentCheck() {
    // Get the checkbox
    var studentRadio = document.getElementById("studentRadio");
    var alumniRadio = document.getElementById("alumniRadio");
    console.log(studentRadio);
    console.log(alumniRadio);
    

    // Get the output text
    var div = document.getElementById("inputMajor");
    console.log(div);

    var divA = document.getElementById("inputDegree");
    console.log(divA);

    var interestsDiv = document.getElementById("inputInterests");
    var workDiv = document.getElementById("inputWork");
  
    // If the checkbox is checked, display the output text
    if (studentRadio.checked == true){
      div.style.display = "block";
      interestsDiv.style.display = "block";
      divA.style.display = "none";
      workDiv.style.display = "none";

    } else if(alumniRadio.checked == true) {
      div.style.display = "none";
      interestsDiv.style.display = "none";
      divA.style.display = "block";
      workDiv.style.display = "block";

    } else {
        div.style.display = "none";
        interestsDiv.style.display = "none";
        divA.style.display = "none";
        workDiv.style.display = "none";
    }
    

    /*if (alumniRadio.checked == true){
        divA.style.display = "block";
        div.style.display = "none";
      } else {
        divA.style.display = "none";
        div.style.display = "block";
      }*/
  }


  function alumniCheck() {
    // Get the checkbox
    var studentRadio = document.getElementById("studentRadio");
    var alumniRadio = document.getElementById("alumniRadio");
    console.log(studentRadio);
    console.log(alumniRadio);
    

    // Get the output text
    var div = document.getElementById("inputMajor");
    console.log(div);

    var divA = document.getElementById("inputDegree");
    console.log(divA);

    /*if (alumniRadio.checked == true){
        divA.style.display = "block";
        div.style.display = "none";
      } else {
        divA.style.display = "none";
        div.style.display = "block";
      }

    }*/
}
