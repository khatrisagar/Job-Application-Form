import BasicInfo from '../components/BasicInfo'
import '../styles/jobapplication.css'

const JobApplication = () =>{

    const handleSubmit = (event)=>{
        event.preventDefault()
        let elementsVal = event.target.elements
        let basicInfoObj = {
            first_name: elementsVal.first_name.value,
            last_name: elementsVal.last_name.value,
            email: elementsVal.email.value,
            phone_number: elementsVal.phone_number.value,
            state: elementsVal.state.value,
            city: elementsVal.city.value,
            address:elementsVal.address.value,
            gender: elementsVal.gender.value,
            zipcode: elementsVal.zipcode.value
        }
        fetch(`http://localhost:8080/`,{
            method: "post",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(basicInfoObj),
        })
    }

    return (
        <div className='job-application-form-wrapper'>
            <form action="/test" method='post' onSubmit={handleSubmit}>
                <BasicInfo />

                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default JobApplication



// components name start with Capital letter