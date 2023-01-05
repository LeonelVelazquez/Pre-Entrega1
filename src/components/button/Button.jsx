import "./button.css"
export default function Button(props){
console.log(props);

return <button className="boton">{props.text}</button>
}