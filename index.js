           //THE START
console.log("JS IS WORKING");

//Getting the main div that holds all the data
const dataContainer = document.getElementById('data')
//Element styling
dataContainer.style.fontSize="25px"
dataContainer.style.fontWeight="bold"
dataContainer.style.fontStyle="italic"
dataContainer.style.textAlign ="center"

//Getting button , searchbar and errors elements
const button = document.getElementById("btn")
const userInput = document.getElementById("search")
const errors = document.getElementById("ERRORS")
errors.style.fontSize="20px"
errors.style.color="red"
errors.style.fontStyle="italic"
errors.style.fontWeight="bold"


// const APP_ID = "9a481591"; 
// const API_KEY = "047eb26379df7750048c7efbf88f8f8e";
// const keyword="software";//

//HOF FUNCTION TO FETCH DATA AND DISPLAY
async function fetchJobs(keyword){
try{
    //resetting our form
    dataContainer.innerHTML=""
    errors.innerHTML=""

    //Code to check if user input in empty
    if(search.value.trim()===""){
        errors.innerHTML="INPUT INVALID....!"
        return;
    }
    //THE MAIN URL
    const res=await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=9a481591&app_key=047eb26379df7750048c7efbf88f8f8e&results_per_page=10&what=${keyword}`)
    const data=await res.json()
    console.log(data);

    // if(!search.value){
    //     errors.innerHTML="JOB NOT AVAILABLE....!"
    //     return;
    // }

    displayContent(data)
    }catch(error){
        console.error("Error fetching jobs:", error);
        errors.innerHTML=error;
    }
};

//FUNCTION TO DISPLAY DATA FROM THE SERVER TO OUR WEBPAGE
function displayContent(data) {
    //Looping through the server to access values
    data.results.forEach( results => {
        //DISPLAYING COMPANY NAME
        const name = document.createElement('div')
        name.style.color="#00e1ff"
        name.innerHTML = `Company Name: ${results.company.display_name}`;
        dataContainer.appendChild(name);
        //DISPLAYING JOB TITLE
        const jobTitle = document.createElement('div')
        jobTitle.style.color="#173270"
        jobTitle.innerHTML = `Job Title: ${results.title}`;
        dataContainer.appendChild(jobTitle);
        //DISPLAYING SALARY EXPECTATIONS
        const salary = document.createElement('div')
        salary.style.color="#08f500"
        salary.innerHTML = `Salary Expectation: ${results.salary_min}`;
        dataContainer.appendChild(salary);
        //DISPLAYING LOCATION
        const location = document.createElement('div')
        location.style.color="white"
        location.innerHTML = `Location: ${results.location.display_name}`;
        location.style.marginBottom="20px"
        dataContainer.appendChild(location);
    });
};

//ADDING THE BUTTON'S EVENT LISTENER
button.addEventListener("click",(e)=>{
    e.preventDefault();                 //Prevents html default form bahaviour
    fetchJobs(userInput.value);         //Running the core function

    userInput.value=""
})

   //THE END OF CODE