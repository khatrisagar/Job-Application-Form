import { useState } from 'react'
import BasicInfo from '../components/form sections/BasicInfo'
import EducationInfo from '../components/form sections/EducationInfo'
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
        university_name: '',
        passing_year: '',
        score:''
    })
        


    const handleChange = (event) =>{
        event.preventDefault()
        setFormData({...formData, [event.target.name]: event.target.value})
        console.log("called", formData)
    }


    const next = () => setCurrentPage((prev) => prev + 1)
    const prev = () => setCurrentPage((prev) => prev - 1)

    const handleSubmit = (event) => {
        event.preventDefault()
        let basicInfoObj = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            phone_number: formData.phone_number,
            state: formData.state,
            city: formData.city,
            address: formData.address,
            gender: formData.gender,
            zipcode: formData.zipcode,
            relationship_status: formData.relationship_status
        }

        let educationInfoObj= {
            course_name : formData.course_name,
            university_name: formData.university_name,
            passing_year: formData.passing_year,
            score: formData.score
        }

        console.log("basicInfoObj",basicInfoObj)
        console.log("educationInfoObj",educationInfoObj)
        // fetch(`http://localhost:8"080/`, {
        //     method: "post",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(basicInfoObj),
        // })
    }

    return (
        <div className='job-application-form-wrapper'>
            <form action="/test" method='post' onSubmit={handleSubmit} onChange={handleChange}>
                {currentPage === 1 &&
                    <>
                    <BasicInfo formData={formData}/>
                    <input type="submit" value="submit" className='basic-submit' />
                    </>
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
                        {currentPage === 3 &&
                            <td className='btn-td'>
                                <input type="submit" value="submit" className='basic-submit' /> 
                            </td>
                        }
                        </tr>
                    </tbody>
                </table>

            </form>
        </div>
    )
}

export default JobApplication



// components name start with Capital letter