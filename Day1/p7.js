const fs= require('fs');

fs.unlink("./data.txt",(err)=>{
    if(err){
        console.error('Error Deleting File: ${err}');
        return;
    }
    console.log("File Deleted succesfully");
})