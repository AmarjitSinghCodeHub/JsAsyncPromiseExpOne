
let btn=document.querySelector("button");
btn.addEventListener("click",GetRecords);

let txtParam=document.querySelector("#txtPostCode");
let divMsg=document.querySelector("#divMsg");

function GetRecords(){
  let apiUrl="https://jsonplaceholder.typicode.com/posts/";
  let postCode=txtParam.value;
  apiUrl=`${apiUrl}${postCode}`;
  divMsg.innerHTML="Fetching data...";

let result=new Promise(function(resolveResult,rejectResult){  
fetch(apiUrl)
.then(res=>res.json())
.then(data=>{
    if(data){
    divMsg.innerHTML=data.body;
    resolveResult(); 
}
    else
        rejectResult();
});

result.then(
    ()=>{
        console.log("Record Fetched Successfully.")
    }
)
.catch(
    ()=>{  divMsg.innerHTML="Invalid Request.";}
)
}
)
}


