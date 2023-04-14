import { useEffect, useState } from 'react'
import BasicInfo from '../components/BasicInfo'
import EducationInfo from '../components/EducationInfo'
import '../styles/jobapplication.css'


const JobApplication = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const [formData, setFormData] = useState({
        first_name :'',
        last_name: '',
        email: '',
        phone_number: '',
        state: '',
        city:'',
        address:'',
        zipcode: '',
        relation_status: '',
        gender:'',
        course_name: '',
    })
        
    // useEffect(()=>{
        
    // },[formData])


    const handleChange = (event) =>{
        // event.preventDefault()
        console.log("called")
        setFormData({...formData, [event.target.name]: event.target.value})
    }


    const next = () => setCurrentPage((prev) => prev + 1)
    const prev = () => setCurrentPage((prev) => prev - 1)

    const handleSubmit = (event) => {
        event.preventDefault()
        let elementsVal = event.target.elements
        
        let basicInfoObj = {
            first_name: elementsVal.first_name.value,
            last_name: elementsVal.last_name.value,
            email: elementsVal.email.value,
            phone_number: elementsVal.phone_number.value,
            state: elementsVal.state.value,
            city: elementsVal.city.value,
            address: elementsVal.address.value,
            gender: elementsVal.gender.value,
            zipcode: elementsVal.zipcode.value,
            relationship_status: elementsVal.relationship_status.value
        }

        fetch(`http://localhost:8080/`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(basicInfoObj),
        })
    }

    return (
        <div className='job-application-form-wrapper'>
            <form action="/test" method='post' onSubmit={handleSubmit} onChange={handleChange}>
                {currentPage === 1 &&
                    <BasicInfo formData={formData}/>
                }
                {currentPage === 2 &&
                    <EducationInfo formData={formData}/>
                }
                <table>
                    <tbody>
                        <tr className='basic-info-table-tr'>
                        {currentPage !== 1 &&
                            <td className='btn-td'>
                                <input type="button" value="Back" id='wizard-btns' onClick={prev} className='basic-back' />
                            </td>
                        }
                            <td className='btn-td'>
                                <input type="button" value="Next" id='wizard-btns' onClick={next} className='basic-next' />
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* <input type="submit" value="submit" /> */}
            </form>
        </div>
    )
}

export default JobApplication



// components name start with Capital letter