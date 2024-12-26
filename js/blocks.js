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
            cellNumberofemployee.textContent =element.numberofemployee
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
                    "date": "testss",
                })
                .then(()=>{{
                    location.reload()
                    getBlocks()
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
getBlocks();
//  dashboard blocks postget
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