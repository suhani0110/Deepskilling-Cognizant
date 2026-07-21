
import './App.css';

const offices=[
{name:'Tech Park',rent:55000,address:'Noida',image:'https://via.placeholder.com/250'},
{name:'Business Hub',rent:75000,address:'Bengaluru',image:'https://via.placeholder.com/250'},
{name:'Corporate Plaza',rent:62000,address:'Hyderabad',image:'https://via.placeholder.com/250'}
];

function App(){
 return(
  <div style={{padding:'20px'}}>
   <h1>Office Space Rental App</h1>
   {offices.map((o,i)=>(
    <div key={i} style={{border:'1px solid #ccc',padding:'15px',marginBottom:'15px',width:'300px'}}>
      <img src={o.image} alt={o.name} width="250"/>
      <h3>{o.name}</h3>
      <p><b>Address:</b> {o.address}</p>
      <p><b>Rent:</b> <span style={{color:o.rent<60000?'red':'green'}}>{o.rent}</span></p>
    </div>
   ))}
  </div>
 );
}
export default App;
