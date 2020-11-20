# covid-tracker
API based application using React And Meterial UI<br/>
I used react-chartjs-2 ton display the line and bar graph<br/>
The App.js is the only class based component initialized with empty data and empty country state<br/>
Async functions are used to fetch data from the api.<br/>
The data is then destructured to only retrieve needed information<br/>
Fetch country function call return an array of countries. <br/>
Inside the form control, a user should be able to select a country of choice and see the related data.<br/>
To achieve this with only one option tab, we need to map over the data(countries) then we will be able to make a choice. <br/>
After the user choice, that choice goes to App.js through a handleCountryChange function which takes in a country as a param. <br/>
We use that choice to send a request to the api
