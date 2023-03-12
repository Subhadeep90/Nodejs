const array =['apple','oranges',' ','mango',' ','lemon'];
const newarray=array.map(element=>{

    if(element==' ')
    {
        return element='empty string';
    }
    else
    {
      return element=element

    }

})
console.log(newarray);
