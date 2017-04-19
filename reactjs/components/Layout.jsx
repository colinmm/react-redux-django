import React from 'react'

import Header from '../components/Header';

class Layout extends React.Component {
   render() {
      return (
         <div>
            <Header title={ 'webRUSH' }/>
            <main>
               { this.props.children }
            </main>
         </div>
      )
   }
}

export default Layout;