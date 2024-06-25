const input = document.querySelector("input")
const btn = document.querySelector("button")
const container2=document.querySelector(".container-2")
let itemList=[]
container2.innerHTML="<h3> Please ADD Item</h3>"

    
btn.addEventListener("click", () => {
    
        const item = document.createElement("div")
        value = input.value
        item.classList.add("item")
        item.innerHTML = `<p>${input.value}</p><span class="material-symbols-outlined delete">delete</span>`
        itemList.push(item)
        console.log(...itemList)
        itemList.forEach((element) => {
            container2.appendChild(element)
            element.getElementsByClassName("delete")[0].addEventListener("click", () => {
                element.remove()
                itemList.splice(itemList.indexOf(element),1)
            })
        
            
        })
        
        input.value=""

    })

