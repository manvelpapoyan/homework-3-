let o={
    name:"Manvel",
  surname:"Papoyan",
  city:"Yerevan",
  birthcity:"Yerevan",
  asd:"Yerevan",
  dsa:"Yerevan"
}

for(let key in o){
if(o.hasOwnProperty(o[key])){
    o[o[key]] = [o[o[key]]].concat([key]).join(",").split(",");
delete o[key];
}else{
o[o[key]]=key
delete o[key];
}
}


console.log(o)
