

const SelectComponent = (props) => {
    console.log("props",props)
    const { label, defaultVal,name, selectData } = props
    return (
        <>
            <label htmlFor="course_name">{label}</label>
            <select name={name} id="" value={defaultVal}>
                {defaultVal !== ''
                    ?
                    <option value={defaultVal} hidden disabled>{defaultVal}</option>
                    :
                    <option value="" hidden>Select {label}</option>
                }
                {selectData?.length > 0 && selectData.map((obj) => (
                    <option
                        key={obj.select_name}
                        value={obj.select_name}
                    >{obj.select_name}</option>
                ))}
            </select>
        </>
    )
}

export default SelectComponent

