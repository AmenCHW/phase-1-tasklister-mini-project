document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form")
    form.addEventListener("submit", (e)=>{
    e.preventDefault()
    buildToDO(e.target.description.value)
      form.reset()
  })
  
});

function buildToDO(toDO) {
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.addEventListener("click", handleDelete)
  btn.textContent = "X"
  p.textContent = `${toDO} `
  p.appendChild(btn)
  document.querySelector("#tasks").appendChild(p)
}


function handleDelete(e){
  e.target.parentNode.remove()
}
