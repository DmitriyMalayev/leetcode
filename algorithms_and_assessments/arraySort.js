const myArr = [
    {name:"X00",price:150 },
    {name:"X01",price:100 },
    {name:"X02",price:100 },
    {name:"X03",price:100 },
    {name:"X04",price:110 },
    {name:"X05",price:110 },
    {name:"X06",price:110 },
    {name:"X07",price:110 }
  ];



  myArr.sort((p1, p2) => {
    if (p1.price < p2.price){
        return -1 
    }
    if (p1.price > p2.price){
        return 1
    }
    return 0
  })

  myArr