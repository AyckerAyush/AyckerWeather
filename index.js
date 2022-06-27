const tempretureField = document.querySelector(".weather1")
const cityField = document.querySelector(".weather2 p")
const dateField = document.querySelector(".weather2 span")
const emojiField = document.querySelector(".weather3 img")
const weatherField = document.querySelector(".weather3 span")
const searchField = document.querySelector(".searchField")
const form = document.querySelector("form")

let target = "gaya";
const fetchData= async(target) =>{
try {
    const fetchData =() =>{};
const url = `https://api.weatherapi.com/v1/current.json?key=a7e2f3e9bf3340fda6a110156222606&q=${target}`
const response = await fetch(url);
const data= await response.json();
console.log(data);

const {current:{temp_c, condition:{text,icon},},
    location:{name,localtime},
}=data;

updateDom(temp_c, name , localtime,icon,text);
} catch (error) {
    alert("location not found");
}
};
function updateDom(tempreture , city, time , icon ,text){
    tempretureField.innerText=tempreture+"°"+"C";
    cityField.innerText = city;
    const exacttime=time.split(" ")[1];
    const exactdate=time.split(" ")[0];
    const exactday=new Date(exactdate).getDay();
    const indDate=exactdate.split("-")[2]+"/"+exactdate.split("-")[1]+"/"+exactdate.split("-")[0];

    dateField.innerText=`${exacttime} - ${getDayName(exactday)} - ${indDate}`
    emojiField.src=icon;
    weatherField.innerText=text;
}
fetchData(target);

function getDayName(num){
    switch (num) {
        case 0:
            return "Sunday"
            break;
        case 1:
            return "Monday"
            break;
        case 2:
            return "Tuesday"
             break;
        case 3:
            return "Wednesday"
            break;
        case 4:
            return "Thrusday"
            break;
        case 5:
            return "Friday"
            break;
        case 6:
            return "Saturday"
            break;
    
        default:
            break;
    }
}
const search = (e) => {
    e.preventDefault();

    target=searchField.value;
    fetchData(target);
    // console.log(target);
}
form.addEventListener("submit",search)