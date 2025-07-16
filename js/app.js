async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
         setTimeout( function(){ resolve("I love You !!") },3000  ) 
    });
    document.getElementById('h1').innerHTML = await myPromise ;
  }
  
  myDisplay();
