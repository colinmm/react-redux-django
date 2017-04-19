import React from 'react';

class Header extends React.Component {

   render() {

      const headerStyle = {
         color: '#ffffff',
         fontSize: 25
      };

      return (
         <nav className='navbar navbar-inverse navbar-fixed-top'>
            <div className='container-fluid'>
               <a href='/all' className='navbar-brand' style={ headerStyle }>{ this.props.title }</a>
            </div>
         </nav>
      )
   }
}

export default Header;