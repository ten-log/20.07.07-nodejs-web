const express =require('express'),
      http = require('http'),
      path = require('path');

let app = express();


let arr = new Array(10);
let count ;
let element ;
let min = -100;
let max = 100;
let rand;


app.use(function(req, res, next){
  element =0;
  count =0;
  arr[9]=undefined;


arr.size()


  for(let i = 0; i <arr.size(); i++ ){

    rand = Math.floor(Math.random() * (max - min)) + min;
    if(rand >= 22 && rand <= 32 ){
      arr[element]= rand;
      element++;
    }
     else {
       i--;
     }
    count++;
    if(arr[9]!==undefined)break;
  }


  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8' });
      arr.map((value)=>{ if(value===22){
        return  res.write(`<div  style="background-color:yellow;" >${value}</div>`);
      }else if(value ===32){
          return  res.write(`<div  style="background-color:red;" >${value}</div>`);
      }else{
          res.write(`<div>${value}</div>`);
      }

    });
      res.write(`<div> COUNT = ${count}</div>`);
      res.end('');

});

app.listen(4000);
