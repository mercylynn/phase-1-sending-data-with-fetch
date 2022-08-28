// Add your code here

  function submitData(name, email){
    
    let configurationObject = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        }, 
        body: JSON.stringify({
            name: name,
            email: email,
        })
    }
    return fetch("http://localhost:3000/users", configurationObject)
    .then((resp) => resp.json())
    .then(obj => {
        document.body.innerHTML = obj.id
      
    }).catch((error) => {
        alert("something went wrong");
        document.body.innerHTML = error.message
    })
}
submitData("Steve","steve@steve.com");
