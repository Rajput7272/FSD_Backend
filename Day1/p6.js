const fs=require('fs');

const appennd=()=>{
    const data='This is Appended line .\n';
    fs.writeFile(".data.txt",data, (err)=>{
        if(err) throw err;
        console.log('Data Appended');
    });
};

append();