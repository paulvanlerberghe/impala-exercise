import "./DoneButton.css";

const DoneButton = ({label, completed, onToggle}) => {

  return(
    <button className={`done-button ${completed ? "completed" : ""}`} onClick={onToggle}>{label}</button>
  )
};

export default DoneButton;