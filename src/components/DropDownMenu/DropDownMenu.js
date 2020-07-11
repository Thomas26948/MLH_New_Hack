import React from 'react';
import './DropDownMenu.css';

const DropDownMenu2 = (props) => {
    return (
        <select id="lang" onChange={e => props.submit(e.target.value)}>
            <option value="No_Preference">Select an Activity</option>
            <option value="No_Preference">No Preference</option>
            <option value="Amusement_Park">Amusement Park</option>
            <option value="Aquarium">Aquarium</option>
            <option value="Art_Gallery">Art Gallery</option>
            <option value="Bar">Bar</option>
            <option value="Bowling_Alley">Bowling Alley</option>
            <option value="Casino">Casino</option>
            <option value="Casino">Church</option>
            <option value="Casino">City Hall</option>
            <option value="Hindu_Temple">Hindu Temple</option>
            <option value="Meal_Takeaway">Meal Takeaway</option>
            <option value="Mosque">Mosque</option>
            <option value="Movie_Theater">Movie Theater</option>
            <option value="Museum">Museum</option>
            <option value="Night_Club">Night Club</option>
            <option value="Park">Park</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Shopping_Mall">Shopping Mall</option>
            <option value="Stadium">Stadium</option>
            <option value="Synagogue">Synagogue</option>
            <option value="Tourist_Attraction">Tourist Attraction</option>
            <option value="Zoo">Zoo</option>
        </select>
    )
}

export default DropDownMenu2