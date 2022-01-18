const resultList = document.querySelector(".user-list")
const inputFilter = document.querySelector(".input-filter")

const userList = []


getData()


inputFilter.addEventListener("input", function(e){
    dataFilter(e.target.value)

})

async function getData(){
    const allUsers = await fetch("https://randomuser.me/api?results=66")
    // console.log(allUsers)

    const data = await allUsers.json()
    // console.log(data)
    
    resultList.innerHTML = ""

    data.results.forEach(function(oneUser){
        const li = document.createElement("li")
        li.innerHTML = ` <img src="${oneUser.picture.large}" alt="${oneUser.name.first}">
        <div class="user-information">
        <h3>${oneUser.name.first} ${oneUser.name.last}</h3>
        <p>${oneUser.location.city}, ${oneUser.location.country}</p>
        </div> `

        resultList.appendChild(li)

        userList.push(li)
    })

}

function dataFilter(inputText){
    userList.forEach(function(user){
      if(user.innerText.toLowerCase().includes(inputText.toLowerCase())){
          user.classList.remove("hide")

      } else{
          user.classList.add("hide")
      }
    })


}





