const axiosRequest = require('axios')

// axiosRequest.get('https://www.boredapi.com/api/activity')

// .then((response)=>
//     console.log(`you could ${response.data.activity}`))
// .catch((error)=>console.log(error))

const getBoard = async() => {

    let response = await axiosRequest.get('https://www.boredapi.com/api/activity')
    console.log(response.data.activity)
}


getBoard()