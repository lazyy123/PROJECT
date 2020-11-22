const userName=document.getElementById("userName");
  const userEmail=document.getElementById("userEmail");
  const userSubject=document.getElementById("subject");
  const userMessage=document.getElementById("userMessage");

  const submitBtn=document.getElementById("submitmsg");

  const database=firebase.database();

  submitBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        database.ref('/users/'+userName.value).set({
        Name:userName.value,
        Email:userEmail.value,
        Subject:userSubject.value,
        Message:userMessage.value,
        });
        document.getElementById("contactForm").reset();
  });
  