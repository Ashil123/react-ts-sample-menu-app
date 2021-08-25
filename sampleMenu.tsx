import * as React from 'react';

export const MyMenu = (props) => {

  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <div>
      <button
       onClick={() => { setMenuVisible(!menuVisible)}}>
         Menu List
      </button>
        {menuVisible && (
          <nav>
          <ul style={{ listStyleType: "none" }}>
            <li>Electronics</li>
            <li>Vehicles</li>
            <li>Home Appliaces</li>
            <li>Grocessories</li>
          </ul>
          </nav>
        )}
    </div>
  );
};