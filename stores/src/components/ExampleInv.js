import React from 'react';
import ReactToPrint from 'react-to-print';
import InvReport from './InvReport';

export default class ExampleInv extends React.Component {

  render() {

    return (

      <div>

        <ReactToPrint

          trigger={() => {

           

            return <a className='exam' href="#">Download PDF !</a>;

          }}

          content={() => this.componentRef}

        />

        <InvReport ref={el => (this.componentRef = el)} />

      </div>

    );

  }

}