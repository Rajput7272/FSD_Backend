const fs=require('fs');

fs.mkdir("mydir",(err)=> {
    if(err) {
        console.error("Error creating directory:", err);
        return;
    }
    console.log('Directory Created succesfully');
})