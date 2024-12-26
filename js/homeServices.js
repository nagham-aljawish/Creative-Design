
axios({
    method: 'get',url: 'https://671638a833bc2bfe40bcf514.mockapi.io/api/services'
})
.then((response)=>{
    
    let services = response.data
    for(service of services){
        
        let contnet = `
              <div id="servicesCard" class="flex flex-col md:flex-row items-start shadow border border-yellow-300 hover:bg-transparent p-2 space-x-4">  
                <a href="#" class="flex-shrink-0 w-full sm:w-32 md:w-1/3">  
                    <img  
                        id="servicesImage"  
                        class="w-full h-auto rounded-lg sm:rounded-l-lg object-cover"  
                        src="${service.image}"  
                        alt="Service Image">  
                </a>  
                <div class="px-5 w-full sm:w-2/3 md:w-2/3 flex flex-col">  
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">  
                        <a id="servicesTitle" class="text-black" href="#">${service.name}</a>  
                    </h3>  
                    <span id="servicesDetails" class="text-gray-500 dark:text-gray-400">${service.details}</span>  
                </div>  
            </div>
        `
        document.getElementById("card-container").innerHTML+=contnet
    }
})