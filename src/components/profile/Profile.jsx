import { useState, useRef } from "react";

const initValues = {
    userName: "вкажіть ім'я", 
    password: "вкажіть пароль"
}

function Profile() {
    const [userData, setUserData] = useState(initValues);
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    console.log("render");

    const saveHandler = () => {
        const newUserName = userNameRef.current.value;
        if(newUserName.trim().length > 0) {
             setUserData(prev => {
                return {...prev, userName: newUserName.trim()};
             });
             userNameRef.current.value = "";
        }

        const newPassword = passwordRef.current.value;     
        if(newPassword.trim().length > 0) {
             setUserData(prev => {
                return {...prev, password: newPassword.trim()};
             });
             passwordRef.current.value = "";
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                alignItems: "center",
                margin: "auto",
            }}
        >
            <div>
                <h2 style={{ margin: "5px" }}>{userData.userName}</h2>
                <input style={{ margin: "5px" }} ref={userNameRef} />
            </div>
            <div>
                <h2 style={{ margin: "5px" }}>{userData.password}</h2>
                <input style={{ margin: "5px" }} ref={passwordRef} />
            </div>
            <button onClick={saveHandler} style={{ margin: "5px" }}>
                Зберегти
            </button>
        </div>
    );
}

export default Profile;
