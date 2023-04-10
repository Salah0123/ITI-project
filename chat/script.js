function talk(){
  var know = {
    "Hi": "Hello, Developers Community Here.",
    "How are you": "Good :)",
    "What can i do for you": "Please Give us A Subscribe.",
    "What is HTML": "stands for Hyper Text Markup Language.",
    "What are Attributes and how do you use them": "Each tag has additional attributes that change the way the tag behaves or is displayed. ",
    "What is an image map": "An image map is used for linking many different web pages using a single image.",
    "How to create a new HTML element": "like this <myElement>hello edureka!</myElement>",
    "ok": "Thank You So Much <3",
    "Bye": "Okay! Will meet soon. TC:)..",
  };
    var user = document.getElementById('userBox').value;
      document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
      document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
      document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
  }