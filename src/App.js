import React from "react";
import MultiButton from './components/cgi_multiButton';
import HelloCGU from './components/cgi_hello';

//const numButtons = 10;

const App = () => {
  // A set containing ids of selected items
  const [selectedItems, setSelectedItems] = React.useState(new Set());
  const handleClick = (event) => {
    const id = event.target.id;
    setSelectedItems((prevState) => new Set([...prevState, id]));
  };
  //const ids = [...Array(numButtons).keys()].map((n) => n.toString());
  const ids = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // Add id to selectedItems
  

  return (   
    <div className="app">
      <div>
        {HelloCGU()}
      </div>
      <div className="container" onClick={handleClick}>
        {ids.map((id) => ( 
          <MultiButton
            key={id}
            id={id}
            label={id}
            isSelected={selectedItems.has(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;