import MyHeading2 ,{MyHeading1,MyHeading3} from "./components/MyHeading"; 
const Age=18;
function App(){
  return (
    <>
     <div>
      <h1>Hellow Ayush khan your age is {Age}</h1>
      <MyHeading1/>
      <MyHeading2 fname="Ayush" lname="khan" age="19y" gender="male"/>
      <MyHeading3/>
      
     </div>

    </>
  );
}
export default App;