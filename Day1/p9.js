const fs=require('fs');

fs.rmdir("mydir",(err)=>{
    if(err){
        console.log("Error Deleting Directory:", err);
    }
    else{
        console.log("Directory Deleted succesfully");
    }
 
})