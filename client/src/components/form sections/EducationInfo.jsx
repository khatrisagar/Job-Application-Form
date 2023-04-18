import { useEffect, useState } from 'react'
import '../../styles/educationinfo.css'
import SelectComponent from '../select/Select'

const EducationInfo = (props) =>{
    const {formData} = props

    const [course, setCourse] = useState([])
    const [university, setUniversity] =  useState([])

    const fetchEducationFormData = async() =>{
        const url = `http://localhost:8080/getEducation` 
        const response =  await fetch(url)
        const data =  await response.json()
        setCourse(data.courseData) 
        setUniversity(data.universityData) 
    }

    useEffect(()=>{
        fetchEducationFormData() 
    },[])
    

    return(

        <section className="basic-info-section">
            <div className="basic-info-wrapper flex flex-col">
                <h1>Education Info</h1>
                <table className='basic-info-table'>
                    <tbody>
                        <tr className='basic-info-table-tr'>
                            <td>
                                <SelectComponent
                                    label="Course"
                                    formData={formData} 
                                    name="course_name" 
                                    selectData={course}
                                    defaultVal = {formData.course_name}
                                />
                
                            </td>
                        </tr>
                        <tr className='basic-info-table-tr'>
                            <td>
                                <SelectComponent
                                    label="University"
                                    formData={formData} 
                                    name="university_name" 
                                    selectData={university}
                                    defaultVal = {formData.university_name}
                                />
                            </td>
                        </tr>

                        <tr className='basic-info-table-tr'>
                            <td>
                                <label htmlFor="passing_year">Passing Year</label>
                                <input type="text" name='passing_year'/>
                            </td>
                        </tr>
                        <tr className='basic-info-table-tr'>
                            <td>
                                <label htmlFor="score">Score</label>
                                <input type="text" name='score'/>
                            </td>   
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default EducationInfo