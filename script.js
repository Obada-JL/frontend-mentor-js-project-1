const numbers = document.getElementsByClassName("rate_number")
const rate_container = document.getElementById("rate_numbers")
const rate_text = document.getElementById("rate_text")

const add_rate= ()=> {
            for (let i = 0; i < rate_container.children.length; i++) {     
                numbers[i].classList.remove("rate_number_checked")
        };  
        }
const rated_number = ()=>{
    for (let i = 0; i < rate_container.children.length; i++) {
        console.log(numbers[i].className)
if(numbers[i].className.toString().includes("rate_number_checked")){
    console.log(numbers[i])
    rate_text.innerHTML = `You selected ${i+1} out of 5`
}
    }
}
const rate = ()=>{        
    for (let i = 0; i < rate_container.children.length; i++) {
    numbers[i].addEventListener("click", () => {
        add_rate()
            numbers[i].classList.add("rate_number_checked")
        rated_number();
   

})


    };  }



rate_text.innerHTML = `You selected ${rate()} out of 5`
const submit_button = document.getElementById("submit_button")
const box_container = document.getElementById("box_container")
const box_container2 = document.getElementById("box_container2")
submit_button.addEventListener("click",()=>{
box_container.style.display= "none"
box_container2.style.display= "flex"
})

 

