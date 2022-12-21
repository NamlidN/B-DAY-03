import fs from 'fs';


// const fs = require('fs');

 const promise =()=>{
  return new Promise((resolve, reject)=>{
fs.readFile('blog1.txt', 'utf8', (err, data) => {
  
    
    if (err) reject(err)
    else resolve()
  console.log(data);
    return;
  

});


const newContent = 'This is the new content for the file';

fs.writeFile('blog1.txt', newContent, 'utf8', (err) => {
  if (err) {
    if (err) reject(err)
    else resolve()
    return;
  }

  console.log('File updated successfully');
});


const content = 'This is the content for the new file';

fs.writeFile('blog2.txt', content, 'utf8', (err) => {
  if (err) {
    if (err) reject(err)
    else resolve()
    return;
  }

  console.log('File created and written successfully');
});


fs.mkdir('assets', (err) => {
  if (err) {
    if (err) reject(err)
        else resolve()
    return;
  }

  console.log('Directory created successfully');
});


fs.stat('assets', (err, stats) => {
  if (err) {
    if (err) reject(err)
    else resolve()
    return;
  }

  if (stats.isDirectory()) {
    // Directory exists, delete it
    fs.rmdir('assets', (err) => {
      if (err) {
        if (err) reject(err)
        else resolve()
        return;
      }

      console.log('Directory deleted successfully');
    });
  } else {
    console.log('Directory does not exist');
  }
});


const content1 = 'This is the content for the new file';

fs.writeFile('delete.txt', content, 'utf8', (err) => {
  if (err) {
    if (err) reject(err)
    else resolve()
    return;
  }

  console.log('File created successfully');

  fs.unlink('delete.txt', (err) => {
    if (err) {
      if (err) reject(err)
      else resolve()
      return;
    }

    console.log('File deleted successfully');
  });
});


const content2 = 'Hello, World!';

fs.writeFile('Hello.txt', content, 'utf8', (err) => {
  if (err) {
    if (err) reject(err)
    else resolve()
    return;
  }

  console.log('File created and written successfully');

  fs.rename('Hello.txt', 'HelloWorld.txt', (err) => {
    if (err) {
      if (err) reject(err)
      else resolve()
      return;
    }

    console.log('File renamed successfully');
  });
});
})}

            promise()
        .then(()=>console.log("alles gut"))
        .catch(err => console.log(err))
     
