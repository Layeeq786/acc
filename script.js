const accordionContent = document.querySelectorAll('.accordion-content');
document.getElementById("pic").style.backgroundImage="url('https://img.freepik.com/free-photo/portal-games_1268-28263.jpg?t=st=1706276218~exp=1706279818~hmac=a0f0e15f5a87c6f467f2d5616a5cab411793bdf04c9afac282485d0fba653c2c&w=740')"

accordionContent.forEach((item,index)=>{
    let header = item.querySelector("header");
    header.addEventListener("click",()=>{
        item.classList.toggle("is-open");

        let description = item.querySelector(".description");
        if(item.classList.contains("is-open")){
            description.style.height=`${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus","fa-minus");
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
        removeOpenedContent(index);
    })
})

function removeOpenedContent(index) {
    accordionContent.forEach((item2,index2)=>{
        if(index != index2) {
            item2.classList.remove("is-open");
            let descrip = item2.querySelector(".description");
            descrip.style.height="0px";
            item2.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
    })
}











/*const backbutton = document.getElementById("home")
backbutton.addEventListener('click',backbutton)

 function  backbutton (){
    backbutton.href = "./Marvel/index.html"}*/