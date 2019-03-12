//Promise
//  const promise = new Promise((resolve, reject) => {
//   const a = 5;
//   const b = 10;
   
//   if (a < b) {
//       resolve();
//   } else {
//       reject();
//   }
//  });   

// promise.then(() => console.log('everything OK'));
// promise.catch(() => console.log('BAD !!!'));

// Не працює без сервера треба налаштувати через clode9 
 const promise = new Promise((resolve, reject) => {
   const xhr = new XMLHttpRequest();
   
   xhr.open('GET', 'data.json', true);
   
   xhr.send();
   
   xhr.addEventListener('readystatechange', () => {
       if (xhr.readyState !== 4) {
           return;
       }
       
       if (xhr.status !== 200) {
        throw new Error('Response error');
   } 
   
       resolve(xhr.responseText);
   });
 });   

promise
    .then((text) => console.log(text))
    .catch(() => console.log('BAD !!!'));
    
// 
let list = [1, 2, 3, 4, 5];
for ( let index = 0; index < list.length; index++){
	let item = list[index];
	console.log(`${index}: ${item}`);
}