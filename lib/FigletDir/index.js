// require and use 
const figlet=require("figlet");
figlet("Mahak Gupta", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
