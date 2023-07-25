drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ]


  const sortDrinkByPrice =(list) =>{
  
    return list.sort((a,b)=>a.price>b.price?1:-1)


  }

  console.log(sortDrinkByPrice(drinks));
  