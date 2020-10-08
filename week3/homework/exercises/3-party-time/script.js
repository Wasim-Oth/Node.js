
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

  const fetch = require ('node-fetch')

  async function makeReservation() {
  try{
  const url = 'https://reservation100-sandbox.mxapps.io/api/reservations'
  const reservation = {
    name: "wasim",
    numberOfPeople: 3
  }

  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(reservation),
    headers: { "Content-Type": "application/json" }
  })
  const data = await response.json()
  console.log(data)

  } catch (error) { 
    console.log('ops! ' + error)
  }
  

}

makeReservation();