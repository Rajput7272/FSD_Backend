const fs=require('fs/promises');

const read=async ()=>{
    const data=await fs.readFile("./data.text","utf-8");
    console.log(data);

}

read();