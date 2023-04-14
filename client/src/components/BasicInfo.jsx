import '../styles/basicinfo.css'


const BasicInfo = () =>{
    return(
        <section className="basic-info-section">
            <div className="basic-info-wrapper flex flex-col">
                <h1>Basic Info</h1>
                <table className='basic-info-table'>
                    <tbody>
                        <tr className='basic-info-table-tr'>
                            <td>
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" name='first_name'/>
                            </td>

                            <td>
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" name='last_name'/>
                            </td>
                        </tr>

                        <tr className='basic-info-table-tr'>
                            <td>
                                <label htmlFor="email">Email</label>
                                <input type="text" name='email'/>
                            </td>
                            <td>
                                <label htmlFor="phone_number">Phone Number</label>
                                <input type="text" name='phone_number'/>
                            </td>   
                        </tr>

                        <tr className='basic-info-table-tr'>
                            <td>
                                <label htmlFor="state">State</label>
                                <input type="text" name='state'/>
                            </td>
                            <td>
                                <label htmlFor="city">City</label>
                                <input type="text" name='city'/>
                            </td>
                        </tr>

                        <tr className='basic-info-table-tr'>
                            <td>
                                <label htmlFor="address">Address</label>
                                <textarea name="address" rows="5" id='address'></textarea>
                            </td>
                            <td>
                                <label htmlFor="zipCode">Zip Code</label>
                                <input type="text" name='zipcode'/>
                            </td>
                        </tr>
                        <tr className='basic-info-table-tr'>
                            <td className='basic-info-table-tr-td-gender'>
                                <label htmlFor="Gender">Gender</label>

                                <span>
                                    <input type="radio" name="gender" value="male" id='male'/>
                                    <label htmlFor="male">Male</label>
                                </span>

                                <span>
                                    <input type="radio" name="gender" value="female" id='female'/>
                                    <label htmlFor="female">Female</label>
                                </span>

                                <span>
                                    <input type="radio" name="gender" value="other" id='other' />
                                    <label htmlFor="other">Other</label>
                                </span>
                            </td>
                        </tr>
                        <tr className='basic-info-table-tr'>
                            <td className='btn-td'>
                                <input type="button" value="Next" id='wizard-btns' className='basic-next'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default BasicInfo