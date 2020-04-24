let books =[
    {
       book: "Catcher in the Rye", 
       readStatus: true, 
       percent: 40
       },
     {
       book: "Animal Farm", 
       readStatus: true, 
       percent: 20
       },
     {
       book: "Solaris", 
       readStatus: false, 
       percent: 90 
       },
      {
        book: "The Fall", 
        readStatus: true, 
        percent: 50
       },
     {
        book: "White Nights", 
        readStatus: false, 
        percent: 60 
       },
     { book: "After Dark", 
      readStatus: true, 
      percent: 70
     }
   ]
   
   books.sort(function (prev,next) {
       
    return next.percent-prev.percent;

   });
   let newArr = [];
     
   for (let i=0; i<books.length; i++){
    
    if(books[i].readStatus === true) {
     newArr.push(books[i].book+ " "+ books[i].percent)
     }
   }
   console.log (newArr)