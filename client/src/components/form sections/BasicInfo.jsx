import '../../styles/basicinfo.css'


const BasicInfo = (props) => {
    const { formData } = props
    // console.log("form data", formData)
    return (
        <section className="basic-info-section">
            <div className="basic-info-wrapper flex flex-col">
                <h1>Basic Info</h1>
                <table className='basic-info-table'>
                    <tbody>
                        <tr className='basic-info-table-tr'>
                            <td>
                                <label htmlFor="first_name">First Name</label>
                                <input
                                    type="text"
                                    name='first_name'
                                    defaultValue={formData.first_name}
                                />
                            </td>

                            <td>
                                <label htmlFor="last_name">Last Name</label>
                                <input
                                    type="text"
                                    name='last_name'
                                    defaultValue={formData.last_name}
                                />
                            </td>
                        </tr>

                        <tr className='basic-info-table-tr'>
                            <td>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name='email'
                                    defaultValue={formData.email}
                                />
                            </td>
                            <td>
                                <label htmlFor="phone_number">Phone Number</label>
                                <input
                                    type="text"
                                    name='phone_number'
                                    defaultValue={formData.phone_number}
                                />
                            </td>
                        </tr>

                        <tr className='basic-info-table-tr'>
                            <td>
                                <label htmlFor="state">State</label>
                                <input
                                    type="text"
                                    name='state'
                                    defaultValue={formData.state}
                                />
                            </td>
                            <td>
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    name='city'
                                    defaultValue={formData.city}
                                />
                            </td>
                        </tr>

                        <tr className='basic-info-table-tr'>
                            <td>
                                <label htmlFor="address">Address</label>
                                <textarea name="address" rows="5" id='address' defaultValue={formData.address}></textarea>
                            </td>
                            <td>
                                <label htmlFor="zipCode">Zip Code</label>
                                <input
                                    type="text"
                                    name='zipcode'
                                    defaultValue={formData.zipcode}
                                />

                                <label htmlFor="relation_status">Relationship Status</label>
                                <select 
                                    name="relationship_status" 
                                    id="relation_status" 
                                    defaultValue={formData.relation_status}
                                >
                                    <option value="" disabled hidden>Select Relationship Status</option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='basic-info-table-tr'>
                            <td className='basic-info-table-tr-td-gender'>
                                <label htmlFor="Gender">Gender</label>

                                <span>
                                    <input type="radio" name="gender" value="male" id='male' defaultChecked={formData.gender === 'male'} />
                                    <label htmlFor="male">Male</label>
                                </span>

                                <span>
                                    <input type="radio" name="gender" value="female" id='female' defaultChecked={formData.gender === 'female'} />
                                    <label htmlFor="female">Female</label>
                                </span>

                                <span>
                                    <input type="radio" name="gender" value="other" id='other' defaultChecked={formData.gender === 'other'} />
                                    <label htmlFor="other">Other</label>
                                </span>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default BasicInfo