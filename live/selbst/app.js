// //promises
// //ein promise hat 3 verschienene status
// /*
// -Pending Der prozess läuft noch
// -fullfilled Erfolgreich beendet
// -Rejected mit einem error beendet
// */
import fs from 'fs'

// const myPromise = new Promise((resolve, reject) =>{
//     //  hier kommen unserew async operation 
// fs.writeFile("./batcave","Alfred räumt auf",(err)=>{
//     if(err) reject(err)
//     else resolve ("ok")
// }) 
// })

// myPromise
// .then(state => console.log(state))
// .catch(err => console.error(err))
// .finally(() =>console.log("im finally"))
// console.log(myPromise)


// const asyncFunction = () =>{
//     return new Promise((resolve, reject) =>{
//         for(let i = 0 ; i < 1; i++){

        
        
//         }
//         if (Math.random() < 0.3) resolve("fullfilled")
//         else reject("ohhh")
//     })
//     }
//     asyncFunction()
//     .then(wert => console.log(wert))
//     .catch(err => console.error(err))
    
//     console.log("ich stehe hinter dem aufrugf vom asyncFunction");


//     for(let i = 0 ; i < 35; i++){
//         fetch("https://api.chucknorris.io/jokes/random")
//         .then(data => data.json())
//         .then(joke => fs.promises.appendFile("./userchuck",i+ ". "+joke.value+".          "+'\n'))
//         .catch(err => console.log(err))
//         }
//         console.log("ready to sell");
        
//         const promisWriter = ()=>{
//             return new Promise((resolve, reject)=>{
//         fs.writeFile("./flughafen", "Airport", (err)=>{
//         if (err) reject(err)
//         else resolve()
//         })
//             })
//         }
        
//         promisWriter()
//         .then(()=>console.log("alles gut"))
//         .catch(err => console.log(err))
        
        let path 
        let inputTxT 
        function abc(){

      path = document.getElementById("input-path").value
          inputTxT = document.getElementById("inputTxT").value
            promisWriter2()
        .then(()=>console.log("alles gut"))
        .catch(err => console.log(err))
        }
        
        
        
        
        
        
        const promisWriter2 = ()=>{
            return new Promise((resolve, reject)=>{
        fs.writeFile(`./${path}`, `${inputTxT}`, (err)=>{
        if (err) reject(err)
        else resolve()
        })
        })
        }
        
        