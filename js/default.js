// function upload(){
// //get your image
// var image=document.getElementById('image').files[0];

// //text
// var post=document.getElementById('message'.value);
// //var Name=document.getElementById('message'.name);
// //var Email=document.getElementById('message'.email);
// //var Subject=document.getElementById('message'.subject);

// var imageName=image.name;
//  var storageRef=firebase.storage().ref('images/'+imageName);
// var uploadTask=storageRef.put(image);
// uploadTask.on('state_changed',function(snapshot){

//     //get task progress
//     var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
//     console.log("upload  is "+progress+"done");
// },function(error){
//     console.log(error.message);
// },function(){
//     uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){

//         firebase.database().ref('Project!!/').push().set({
//             text:post,
//             //name:Name,
//             //email:Email,
//             //text:Subject,
//             imageURL:downloadURL
//         },function(error){
//             if(error){
//                 alert("Error while uploading");
//             }
//             else{
//                 alert("Successfully done!!");

//                 document.getElementById('contact').reset();
//             }
//         });
//     });


// });



// }











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
  