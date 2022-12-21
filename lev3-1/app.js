import fs from 'fs'


const promise =()=>{
  return new Promise((resolve, reject)=>{

fs.mkdir('data', { recursive: true }, (err) => {
  if (err) reject(err);
  else resolve()
  
    console.log('Directory created successfully');
  });

  fs.exists('myfile.txt', (exists) => {
    if (!exists) {
      fs.writeFile('myfile.txt', 'Hello, World!', 'utf8', (err) => {
        if (err) reject(err);
        else resolve()
  
        console.log('File created successfully');
      });
    } else {
      console.log('File already exists');
    }
  });

function writeToFile(content) {
    fs.appendFile('myfile.txt', content + '\n', 'utf8', (err) => {
      if (err) reject(err);
      else resolve()
  
      console.log('Content added to file successfully');
    });
  }
  
  // Aufruf der Funktion mit verschiedenen Inhalten
  writeToFile('Hello, World!'); // Fügt den Text "Hello, World!" in einer neuen Zeile hinzu
  writeToFile('Hello, Universe!'); // Fügt den Text "Hello, Universe!" in einer neuen Zeile hinzu
  writeToFile('Hello, Galaxy!'); 

})
};
    promise()
    .then(()=>console.log("alles gut"))
    .catch(err => console.log(err))