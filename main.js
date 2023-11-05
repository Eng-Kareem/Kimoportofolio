function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "kimomo109@gmail.com",
        Password : "ratcat12",
        To : "kareem.ramos22@gmail.com",
        From : document.getElementById("email").value,
        Subject : "new contact form enquiry",
        Body : "Name: " + document . getElementById("name"). value
        +"<br> Email: "+document.getElementById("email").value
        +"<br> phone no:"+document.getElementById("phone").value
        +"<br> message:"+document.getElementById("message").value
    }).then(
      message => alert("message sent succesfully")
    );
}