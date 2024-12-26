
getServices()
let emailAdmin = 'admin@gmail.com';
let passwordAdmin = '123456789';
let errorEl = document.getElementById('error');
let form = document.getElementById('form');
let email = document.getElementById('email');
let password = document.getElementById('password');
function validation(){
    let error = [];
    if(email.value !== emailAdmin){
        error.push("the email is invalied")
    }
    if(password.value !== passwordAdmin){
        error.push("the password is invalied")
    }
    if(error.length > 0){
        errorEl.style.display='block'
        errorEl.innerHTML = error.join(" <br> ");
    }
    else{
        window.location.href = "../admin/dashboard/dashboardServices.html";
    }
}

// dashboard services get
function getServices(){
    axios({
        method: 'get',
        url: 'https://671638a833bc2bfe40bcf514.mockapi.io/api/services',
    })
    .then(function (response){
        response.data.forEach(element => {
            let servicesTableBody= document.getElementById("tableBody")
            let row = document.createElement('tr')
        
            let cellId = document.createElement('td')
            cellId.textContent = element.id
            cellId.cellId="px-4 py-3"
            row.appendChild(cellId)
        
            let cellName = document.createElement('td')
            cellName.textContent = element.name
            cellId.className="px-4 py-3"
            row.appendChild(cellName)
        
        
            let cellDetails = document.createElement('td')
            cellDetails.textContent =element.details
            cellDetails.className="px-4 py-3"
            row.appendChild(cellDetails)
        
        
            let cellImage = document.createElement('td')
            let image=document.createElement('img')
            image.src=element.image
            image.className="w-44 h-20"
            cellImage.appendChild(image)
            cellImage.className="px-4 py-3"
            row.appendChild(cellImage)
            
            let updateCellButton = document.createElement('td')
            let updatebutton = document.createElement('button')
            updatebutton.className="border-2 border-green-700 hover:bg-green-800 p-2 cursor-pointer m-2"
            updateCellButton.appendChild(updatebutton)
            updatebutton.textContent="update"
            updatebutton.onclick = function(){
                axios.put(`https://671638a833bc2bfe40bcf514.mockapi.io/api/services/${element.id}`, {
                    "name": "tests",
                    "details": "testss"
                })
                .then(()=>{{
                    location.reload()
                    getServices()
                }})
            };
            row.appendChild(updateCellButton)

            let deleteCellButton = document.createElement('td')
            let deleteButton = document.createElement('button')
            deleteButton.className="border-2 border-red-700 hover:bg-red-800 p-2 cursor-pointer m-2"
            deleteCellButton.appendChild(deleteButton)
            deleteButton.textContent="delete"
            row.appendChild(deleteCellButton)
            deleteCellButton.onclick = function(){
                axios.delete(`https://671638a833bc2bfe40bcf514.mockapi.io/api/services/${element.id}`,{})
                .then(function(response){
                    location.reload()
                    getServices()
                })
            }
            servicesTableBody.appendChild(row)    
        });
        
        // document.getElementById("servicesID").innerText=response.data[i].id
        // document.getElementById("servicesName").innerText=response.data[i].name
        // document.getElementById("servicesDetails").innerText=response.data[i].details
        // document.getElementById("servicesImageSRC").src=response.data[i].image
        
    });
}

//dashboard services post
function createServices(){
    let detailsServices = document.getElementById('ServicesDetails');
    let nameServices = document.getElementById("ServicesName")
    
    let imageServices = document.getElementById('imageServices').files[0];
    const headers = {
        'Content-Type': 'application/json'
      }
      
    axios.post('https://671638a833bc2bfe40bcf514.mockapi.io/api/services', {
    "name": nameServices.value,
    "details": detailsServices.value,
    "image": imageServices.value,
    }, {
    headers: headers
    })
    .then(function(response){
        location.reload()
        getServices()
    })
}


//dashboard blocks get 
function getBlocks(){
    axios({
        method: 'get',
        url: 'https://671638a833bc2bfe40bcf514.mockapi.io/api/blocks',
    })
    .then(function(response){
        response.data.forEach(element => {
            let blocksTableBody= document.getElementById("tableBody")
            let row = document.createElement('tr')
        
            let cellId = document.createElement('td')
            cellId.textContent = element.id
            cellId.cellId="px-4 py-3"
            row.appendChild(cellId)
        
            let cellName = document.createElement('td')
            cellName.textContent = element.name
            cellId.className="px-4 py-3"
            row.appendChild(cellName)
        
        
            let cellDate = document.createElement('td')
            cellDate.textContent =element.Date
            cellDate.className="px-4 py-3"
            row.appendChild(cellDate)
        

            let cellNumberofemployee = document.createElement('td')
            cellNumberofemployee.textContent =element.Numberofemployee
            cellNumberofemployee.className="px-4 py-3"
            row.appendChild(cellNumberofemployee)


            let cellImage = document.createElement('td')
            let image=document.createElement('img')
            image.src=element.image
            image.className="w-44 h-20"
            cellImage.appendChild(image)
            cellImage.className="px-4 py-3"
            row.appendChild(cellImage)
            
            let updateCellButton = document.createElement('td')
            let updatebutton = document.createElement('button')
            updatebutton.className="border-2 border-green-700 hover:bg-green-800 p-2 cursor-pointer m-2"
            updateCellButton.appendChild(updatebutton)
            updatebutton.textContent="update"
            updatebutton.onclick = function(){
                axios.put(`https://671638a833bc2bfe40bcf514.mockapi.io/api/blocks/${element.id}`, {
                    "name": "tests",
                    "details": "testss",
                })
                    location.reload()
                    getBlocks()
            };
            row.appendChild(updateCellButton)

            let deleteCellButton = document.createElement('td')
            let deleteButton = document.createElement('button')
            deleteButton.className="border-2 border-red-700 hover:bg-red-800 p-2 cursor-pointer m-2"
            deleteCellButton.appendChild(deleteButton)
            deleteButton.textContent="delete"
            row.appendChild(deleteCellButton)
            deleteCellButton.onclick = function(){
                axios.delete(`https://671638a833bc2bfe40bcf514.mockapi.io/api/blocks/${element.id}`,{})
                .then(function(response){
                    location.reload()
                    getBlocks()
                })
            }
            blocksTableBody.appendChild(row)    
        });
        
    });
}

//dashboard blocks post
function createBlocks(){
    let nameBlocks = document.getElementById("BlocksName");
    let dateBlocks = document.getElementById("BlocksDate")
    let numberOfEmployee = document.getElementById("BlocksNumber")
    let imageBlocks = document.getElementById('imageBlocks').files[0];
    const headers = {
        'Content-Type': 'application/json'
      }
      
    axios.post('https://671638a833bc2bfe40bcf514.mockapi.io/api/blocks', {
    "name": nameBlocks.value,
    "date": dateBlocks.value,
    "number": numberOfEmployee.value,
    "image": imageBlocks.value,
    }, {
    headers: headers
    })
    .then(function(response){
        location.reload()
        getBlocks()
    })
}