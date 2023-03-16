// Arrow function (function components)
export const MyHeading1 = () => (<h1>Myheading first</h1>);//agar only arrow function banao to semmi colon lagao 
 const MyHeading2 = (props) => {
    console.log("Props is:",props,props.fname);
    const data=props.fname;
    return (<>
         <h2>Myheading second</h2>
         <ol>
        <li>first name is: {props.fname}</li>
        <li>last name is: {props.lname}</li>
        <li>My age is:{props.age}</li>
        <li>and its my gender:{props.gender}</li>
        </ol>
        <MyHeading3 value={props.age}/>
         </>);    
        
};
export const MyHeading3 = ({value}) => { 
    console.log("Value is :",value);
    return (<><h3>Myheading Three</h3>
<p>The age_value is:{value}</p>
</> )};
export default MyHeading2;