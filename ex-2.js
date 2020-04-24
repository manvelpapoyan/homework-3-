let o={
    
    name:"Manvel",
  surname:"Papoyan",
  city:"Yerevan",
  birthcity:"Yerevan",
  asd:"Yerevan",
  dsa:"Yerevan"
}
let bool=false;

for(let key in o){

if(o.hasOwnProperty(o[key])&& bool===false){

o[o[key]]=[o[o[key]]]
bool=true;
}
if(o.hasOwnProperty(o[key])){

o[o[key]].push(key)
delete o[key];

}else{

o[o[key]]=key
delete o[key];

}
}

console.log(o)