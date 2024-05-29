import { useState } from "react";
import FacebookLogin from "react-facebook-login";

export const FaceBook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    setIsLoggedIn(true);
    setUserID(response.userID);
    setName(response.name);
    setEmail(response.email);
    setPicture(response.picture.data.url);
  };

  const componentClicked = () => console.log("clicked");

  let fbContent;

  if (isLoggedIn) {
    fbContent = (
      <div
        style={{
          width: "400px",
          margin: "auto",
          background: "#f4f4f4",
          padding: "20px",
          color: "black",
          textAlign: "center",
        }}
      >
        <img src={picture} alt={name} />
        <h2>Welcome {name}</h2>
        Email: {email}
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId={import.meta.env.VITE_REACT_APP_FACEBOOK_APP_ID}
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,email"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }

  return <div className="fb">{fbContent}</div>;
};
