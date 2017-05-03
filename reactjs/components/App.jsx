import React from 'react';

class App extends React.Component {

   render() {

        console.log(this.props);

      return (
         <div>   
            { this.props.data }      
         </div>
      )
   }
};

export default App;