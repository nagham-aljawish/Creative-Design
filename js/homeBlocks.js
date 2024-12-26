axios({method: 'get',url: 'https://671638a833bc2bfe40bcf514.mockapi.io/api/blocks'}).then((response)=>{
    let blocks = response.data
    for(block of blocks){
        function getColor(){
            if(block.id %2==0){
                return "bg-yellow-300"
            }
            else{
                return "bg-black"
            }
        }
        let contnet = `
         <div class="max-w-sm  border border-gray-200 ${getColor()}  rounded-tl-3xl rounded-br-3xl shadow my-5">
            <img class="w-full " src="${block.image}" alt="Bonnie Avatar" />
            
            <div class="p-5">  
              <div class="flex justify-between text-white py-1 pb-5">
                <p class="text-sm">By Admin</p>
                <p class="text-sm">${block.date}</p>
                <p class="text-sm">${block.id}</p>
            </div>    
            <h5 class="mb-2 tracking-tight text-white font-bold">${block.name}</h5>
                      <button href="#" class="inline-flex items-center my-3 px-3 py-2 text-sm font-medium text-white rounded-lg">
                          Learn more
                          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </button>
            </div>
          </div>
        `
        document.getElementById("block-container").innerHTML += contnet
    }
})