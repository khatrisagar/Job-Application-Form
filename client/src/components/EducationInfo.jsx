import { useState } from 'react'
import '../styles/educationinfo.css'

const EducationInfo = (formData) =>{

        // fetch(`http://localhost:8080/getEducation`)
        // .then(res => res.json())
        // .then(data=> setCourse(data))

const [course, setCourse] = useState()


    return(

        <section className="basic-info-section">
            <div className="basic-info-wrapper flex flex-col">
                <h1>Education Info</h1>
                <table className='basic-info-table'>
                    <tbody>
                        <tr className='basic-info-table-tr'>
                            <td>
                                <label htmlFor="course_name">Course</label>
                                <select name="course_name" id=""  defaultValue={formData.course_name}>
                                    {/* {console.log(course)}
                                    course.map((obj))=>{
                                        <option value="">select_course</option>

                                    } */}

                                </select>
                                {/* <input type="text" name='course_name' value={formData.course_name}/> */}
                            </td>
                        </tr>
                        <tr className='basic-info-table-tr'>
                            <td>
                                <label htmlFor="university_name">University/College Name</label>
                                <input type="text" name='university_name'/>
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