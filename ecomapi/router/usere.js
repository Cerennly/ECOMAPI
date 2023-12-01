//we create useRouter 2 type clients-side routing: navigate between pages and server-side routing: pages redirecting to the server
// but we can write index js why we need to open new? and also have express that can be directing
//what we are getting from user can provide username , email :req / after then res:(response) is done can be say or register is sucessguf etc
const router = require("express").Router();

//router.get("/usertest", (req,res)=>{
//    res.send("yes");
//});

//router.post("/userpostest", (req,res)=>{
//    const username =req.body.username;
//    res.send("your usernameis:" + username);
//}); we have to option herre ont he this other one console.log(username)-it work on vscode terminal

//so how we are gonna pass this request and body we cant brwonse lh5000api because we dont have any client user also inputs
//to send it for user response-wecans send response-to test ,therefore there is a postman ı have use it 

//lh:5000/api/userr/usert

module.exports = router;