import React, {useState} from "react";
import Form from "./form";
import DisplayData from "./DisplayData";

function ParentComponent (){
    const [firstName,setFirstName] = useState("John");
    const[lastName,setLastName] =useState("Henry");

 function handleFirstNameChange(event){
    setFirstName(event.target.value);
 }
 function handleLastNameChange(event){
    setLastName(event.target.value);
 }

 return(
    <>
    <form
    firstName = {firstName}
    lastName = {lastName}
    handleFirstNameChange = {handleFirstNameChange}
    handleLastNameChange = {handleLastNameChange}
     />
     <DisplayData firstName = {firstName} lastName = {lastName} />
    </>
 )
}
export default ParentComponent;