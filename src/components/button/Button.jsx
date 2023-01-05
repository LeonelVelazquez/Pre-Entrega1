import "./button.css"
export default function Button(props){
console.log(props);

return <button className="btn">{props.text}</button>
}