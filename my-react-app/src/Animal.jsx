function Hello(){
    return (
        <p style={{textAlign:"left", color:"black"}}>Hello</p>
    );
} 
function Galaxy(props){
    return (
        <div style={{textAlign:"left"}}>
        <h4>Name:{props.name}</h4>
        <h4>process:{props.process}</h4>
        </div>
    );
}
function Star()
{
    return (
        <div style={{color:"black"}}>
        <Galaxy name="Sun"
            process="Nuclear Fission and Fusion">
        </Galaxy>
        </div>
    );
}
function Animal(){
    return (
        <>
        <body style={{backgroundColor:"pink",border:"groove", borderWidth:20,borderColor:"lightcoral"}}>
        <h1 style={{color:"brown"}}>Animals</h1>
        <div style={{display:"flex", gap:"50px",border:"dashed",borderColor:"whitesmoke", backgroundColor:"lightyellow"}}>
            <p style={{textAlign:"justify",color:"black"}}>
                The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of wolves. 
                Also called the domestic dog, it was selectively bred during the Late Pleistocene by hunter-gatherers. 
                Dogs and the modern gray wolf share a common ancestor.
                [4] Dogs were the first species to be domesticated over 14,000 years ago, before the development of agriculture,
                though genetic studies suggest the domestication process may have begun over 25,000 years ago. 
                Due to their long association with humans, dogs have gained the ability to thrive on a starch-rich diet 
                that would be inadequate for other canids.
            </p>
            <img 
            style={{width:200,border:"dotted",borderRightColor:"pink",borderLeftColor:"pink",borderTopColor:"lightcoral",borderBottomColor:"lightcoral",borderWidth:8}}
            src="https://i.pinimg.com/474x/e7/c9/25/e7c925e08ed2adbe4e9eb7b3536fa65e.jpg" alt="doggy" />
        </div>
        <Hello></Hello>
        <Star>
        </Star>
        </body>
        </>
    );
}
export default Animal;