import React from 'react';
import PropTypes from 'prop-types';
const Profile = (props) => {
    return ( 
        <div style={{color: "red"}}>
            <div>{props.children}</div>
            <p>{props.FullName}</p>
            <p>{props.bio}</p>
            <p>{props.profession}</p>
        </div>
     );
}
Profile.prototype={
    FullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
}
 
export default Profile;