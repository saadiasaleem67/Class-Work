

let books =[
    {
        name:"Online",
        author:"Saadia"
    },
    {
        name:"Online",
        author:"Duaa"
    },
    {
        name:"Online",
        author:"Tisha"
    },
]

interface Ibooks {
    id:number,
    name:string,
    type:string,
    available:boolean
}

const  Card= async ()=>{



    // class 08
    // status 200 Ok no error
    //.  let res =await fetch ("url") await = wait karo jb tk data na aya agy na chalo
    // consolelog(res)
    // json me aarha result to us ko js object me convert krny k leyea 
    //. let good:Ibooks[] =await  res.status{}
    //. good.id,name, type,  available OR data.[0] data[0].name
    //. consolelog(good)
    // is se jo api me data hy books ka wo aajy aga arrry k form me


    return(
        <div className="flex items-center justify-center gap-x-8">
             {books.map((item)=>{
             return(
           <div className="">
              <h1>{item.author}</h1>
             <h1>{item.name}</h1>
      </div>
      )})}
        
        </div>
    )
 }
export default Card 
