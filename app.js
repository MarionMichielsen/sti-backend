const cors = require("cors")
const express = require("express")
var bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001
const app = express()
let uuid ;
let x ;
let y ;

const users = [];
let XPosMap = new Map();
let YPosMap = new Map();

//app.use('healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true}));
app.use(cors())
app.use(bodyParser.json())

//app.post("https://marionmichielsen-backend.herokuapp.com/save", (req, res)=>{
  app.post("/save", (req, res)=>{
  headers={http_status:200, "cache-control": "no-cache"}
  console.log('TRYING to get data from frontend to backend')

  uuid = req.body.uuid;
  x = req.body.x;
  y = req.body.y;

  users.push(uuid);
  XPosMap.set(uuid, x);
  YPosMap.set(uuid, y);
  console.log("Y "+y+" Z: "+z+" UUID: "+uuid);
//console.log(users.get[0], users.get[1]);

  res.set('Content-Type', 'application/json')
})
function returnGreenXPosition(uuid){
  if (!uuid ===users[0]){
    return  XPosMap.get(users[0])
  }
  else {
    return XPosMap.get(users[1])
  }
}

function returnGreenYPosition(uuid){
  if (!uuid ===users[0]){
    return YPosMap.get(users[0])
  }
  else {
   return YPosMap.get(users[1])
  }
}

app.get("/save", (req, res)=>{
  headers={http_status:200, "cache-control": "no-cache"}
  body= 
  [
    { "uuid":uuid,
      "x": returnGreenXPosition(uuid),
      "y": returnGreenYPosition(uuid),
      // "x": 50,
      // "y": 75,
    }
  ]
  res.set('Content-Type', 'application/json')
  res.status(200).send(body)
  console.log("trying to send data back to frontend")
  console.log("Sending back: X: "+returnGreenXPosition(uuid))
})



function createRandomNumber(){
        return Math.floor(Math.random() * 200);     
}

app.listen(PORT , ()=>{
  console.log('STARTED LISTENING ON PORT ${PORT}')
});


setTimeout(age, 100)

  function age(){
    // var xhr = new XMLHttpRequest()
    // xhr.open("GET", "/get_position")
    // xhr.onload = function(){
    //     var data = JSON.parse(this.response)
    //   //  saveGreenPosition();
    //   }
    // xhr.send()
    // setTimeout(age, 10)
}