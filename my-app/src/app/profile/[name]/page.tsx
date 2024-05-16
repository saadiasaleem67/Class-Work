interface Iprops {
    params :{
        name:string
    }
}

export default function( {params}:Iprops){
    // console.log(props)
    //let {params} =props ,,,kisi chec me se kisi ek ek nikala Rearrangment bolty hain.

    return(
        <>
   
       <h1>hello {params.name}</h1>
       </> 
    )
}