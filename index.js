const data = [
    {
        "id" : 1,
        "iogo":"https://img.icons8.com/fluency/2x/poolside-bar.png",
        "title":"RESTURANT & BAR",
        "description": "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater"
    },
    { 
        "id" : 2,
        "iogo":"https://img.icons8.com/fluency/2x/poolside-bar.png",
        "title":"LUXURIOUS ROOMS",
        "description": "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater"
    },
    {  
        "id" : 3,
        "iogo":"https://img.icons8.com/fluency/2x/poolside-bar.png",
        "title":"BANQUET",
        "description": "Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum."
    },
    {     
        "id" : 4,
        "iogo":"https://img.icons8.com/fluency/2x/poolside-bar.png",
        "title":"WI-FI INTERNET",
        "description": "Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum."
    },
    {   
        "id" : 5,
        "iogo":"https://img.icons8.com/fluency/2x/poolside-bar.png",
        "title":"24/7 SERVICE",
        "description": "Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum."
    },
    {    
        "id" : 6,
        "iogo":"https://img.icons8.com/fluency/2x/poolside-bar.png",
        "title":"ROOM SERVICE",
        "description": "Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum."
    }   
]

// selectors

const col = document.querySelector('#services')
const profile = document.querySelector('#p1')
const pricing = document.querySelector('#p2')



let output='';
for(let x of data){
   output += `
   <div class="col-4 p-3">
   <div class="card" style="height:12rem">
     <div class="card-body"  style="background-color: #E5D549;">
         
       <h5 class="card-title">${x.title}</h5>
       <p class="card-text">${x.description}</p>
     </div>
   </div>
   </div>
          `
}
col.innerHTML = output;

loadListeners();
function loadListeners(){
    // document.addEventListener('DOMContentLoaded' , getData)
    getData();
    getPricingData();
    // document.addEventListener('DOMContentLoaded', getPricingData)
}


function getData(){

const xhr = new XMLHttpRequest()

// const url = "data1.json";
xhr.open('GET', "data1.json" , true)

xhr.onload = function(){
    
    if(this.status === 200){
        const Data = JSON.parse(this.response)
    let out  = document.createElement('div');
        out.classList.add('row')
        console.log("data",Data)
        Data.forEach(function(Data) {
            out.innerHTML+= `
            <div class="card m-4 p-2" style="width:20rem; text-align:center; background-color:#DBE6FD;">
            <div class="card-body" >
            <img src="${Data.img}" style="width:150px; height:150px; border-radius: 50%; ">
             <h3 class="card-title p-3">${Data.name}</h3>
           <p>${Data.designation}</p>
           </div>
        </div>`
             
        

        })
       profile.appendChild(out);
    }
    

}
xhr.send()


 }

function getPricingData(){
const xhr = new XMLHttpRequest()

xhr.open('GET', "data.json" , true)

xhr.onload = function(){
    
    if(this.status === 200){
        const pData = JSON.parse(this.response)
        console.log(pData)
        let out1  = document.createElement('div');
        out1.classList.add('row')

        console.log("data",pData)
        pData.forEach(function(pData) {
            out1.innerHTML+= `
            <div class="card m-4 " style="width:18rem; text-align:center">
             <div class="card-body" >
              <h1 class="card-title p-2">${pData.title}</h1>
              <hr style="border: 1px solid black;"> 
              <h3>${pData.price}</h3>
              <p>per month</p>
              <p>24/7 support</p>
              <a href="http://127.0.0.1:5500/Signup.html"><button type="button" class="btn btn-info">Book Now</button></a>
              </div>
         </div>`
                 

        })
        pricing.appendChild(out1);
     }
     
 
 }
 xhr.send()
 
 
  }
 