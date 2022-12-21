import fs from 'fs';

import datas from './datas.json' assert {type: "json" };

const promise =()=>{
  return new Promise((resolve, reject)=>{
    for(let i=0; i< 10; i++){
fs.appendFile('output.txt',+datas[i].id+'\n' + JSON.stringify(datas[i].title + datas[i].description), 'utf8', (err) => {
    if (err) reject(err);
      else resolve()
    }
    )
  }
}
 )
 };
          promise()
        .then(()=>console.log("alles gut"))
        .catch(err => console.log(err))
        