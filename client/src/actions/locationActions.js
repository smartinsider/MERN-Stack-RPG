import axios from "axios";
// Save the user's location in the token
export const setLocation = (userData, location) => {
  //console.log(location);
  let data = {
    userData: userData,
    location: location
  };

  data.userData.character.location = location;

  axios({
    method: "post",
    url: "/api/saveLocalUser",
    headers: { "Content-Type": "application/json" },
    data: data
  })
    .then(function(response) {
      //console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const setSubLocation = (userData, subLocation) => {
  //console.log(location);
  let data = {
    userData: userData,
    subLocation: subLocation
  };

  data.userData.character.subLocation = subLocation;

  axios({
    method: "post",
    url: "/api/saveLocalUser",
    headers: { "Content-Type": "application/json" },
    data: data
  })
    .then(function(response) {
      //console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
