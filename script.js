let currency;
let from  = 'RUB'
let to  = 'USD'
let selector = true;
let arr = [];
let j=0;
let count;

let to_List = document.querySelectorAll('#money_from');
let from_list = document.querySelectorAll('#money_to');


 
function displayConverter(){
    fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`)
    .then(response=>{return response.json()})
    .then(data => post_one.innerText = `1 ${from} = ${data.rates[to].toFixed(4)} ${to}`)
    
    fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${from}`)
    .then(response=>{return response.json()})
    .then(data => post_two.innerText = `1 ${to} = ${data.rates[from].toFixed(4)} ${from}`)
}


from_list.forEach(item=>{
    item.addEventListener('click',()=>{
        let colored = document.querySelector('.usd2');
        colored.classList.remove('usd2');
        item.classList.add('usd2');
        to = item.innerText;
        if(user_input_to.value != null){
            fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${from}`)
            .then(response => { return response.json()})
            .then(data =>{
                           currency = notconverter(user_input_from.value)/data.rates[from];
                            responser(currency);
                            user_input_to.value = converter(currency);
                            if(user_input_from.value*1 == 0) user_input_to.value = null;
                          })
        }
        displayConverter();
        deal();
    })
})

to_List.forEach(item=>{
    item.addEventListener('click',()=>{
        let colored = document.querySelector('.rub1');
        colored.classList.remove('rub1');
        item.classList.add('rub1');
        from = item.innerText;
        if(user_input_from.value != null){
            fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`)
            .then(response => { return response.json()})
            .then(data =>{ 
                           currency = notconverter(user_input_to.value)/data.rates[to]
                           responser(currency);
                          user_input_from.value = converter(currency)
                            if(user_input_to.value*1 == 0) user_input_from.value = null;
                          }) 
        }
        displayConverter();
        deal();
    })
})

let post_one = document.querySelector('.post_one');
let post_two = document.querySelector('.post_two');


window.addEventListener('load',()=>{
   displayConverter()});

   let user_input_from = document.querySelector('.input_one');
   let user_input_to = document.querySelector('.input_two');


deal()
function responser(a){
    if(Number.isInteger(a)) currency = currency.toFixed(0)
    else currency = currency.toFixed(4);
   }

function deal(){
user_input_from.addEventListener('input',()=>{
  fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${from}`)
 .then(response => { return response.json()})
  .then(data =>{
                     currency = notconverter(user_input_from.value)/data.rates[from];
                      responser(currency);
                      user_input_to.value = converter(currency);
                      user_input_from.value = converter(user_input_from.value)
                      if(user_input_from.value*1 == 0) user_input_to.value = null;
                 } 
                )

});
user_input_to.addEventListener('input',()=>{
    fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`)
    .then(response => { return response.json()})
    .then(data =>{ if(user_input_to.value==0) user_input_from.value=0;
                   currency = notconverter(user_input_to.value)/data.rates[to]
                   responser(currency);
                  user_input_to.value = converter(user_input_to.value)
                  user_input_from.value = converter(currency)
                    if(user_input_to.value*1 == 0) user_input_from.value = null;
                  })
  });}


 document.querySelector('button').addEventListener('click',()=>{
    if(selector){
    document.querySelector('ul').style.display='block';
    selector = false;}
    else{ document.querySelector('ul').style.display='none'
       selector=true}
})



 function notconverter(a){
    if (a.includes(" ")) return a = a.split(" ").join("");
    else return a;
 }

 function converter(a){
    if(a.split("").findIndex(i=> i== ",") != -1){
       let arr = a.split("");
   let j = arr.findIndex(i => i==",")
   for(let i = j - 4;i >=0; i = i - 3){
       arr.splice(i+1,0," ");
   }
   if(arr.join("") != 'NaN') return arr.join("");
      else return null
   }
  
   else {
   let arr = a.split("");
   for(let i = j - 4;i >=0; i = i - 3){
       arr.splice(i+1,0," ");
   }
   if(arr.join("") != 'NaN') return arr.join("");
   else return null;
}
}