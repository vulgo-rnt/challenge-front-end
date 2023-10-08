export default function Filter({setType}){
    const selectOptions = [
        'micro',
        'nano',
        'regional',
        'brewpub',
        'large',
        'planning',
        'bar',
        'contract',
        'proprietor',
        'closed'
    ]
    return(<>
        <select onChange={(event)=> setType(event.target.value)}>
            {selectOptions.map((option)=>(<option key={option}>{option}</option>))}
        </select>
    </>)
}