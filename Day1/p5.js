const fs=require('fs');

const write=() => {
    fs.writeFile("./data.txt",data,(err)=>{
        if(err) console.log(err);
        else console.log("File Updated Succesfully");
    })
}

write();