import React from "react";
import PropTypes from 'prop-types';

function Profile(prop) {
  return (
      <div id="profile">
        <p>{prop.profile}</p>
      </div>
  );
}

Profile.propTypes = {
  profile: PropTypes.string
};


export default Profile;
