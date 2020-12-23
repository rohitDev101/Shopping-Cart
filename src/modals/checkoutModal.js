import React, { Component, Fragment } from 'react';
import './checkoutModal.css';

class CheckoutModal extends Component{
    render(){
        return (
            <Fragment>
                {this.props.showModal && <div className='Backdrop'></div>}
                <div className='Modal'
                    style={{
                        transform: this.props.showModal ? 'translateY(0)' : 'translateY(100vh)',
                        opacity: this.props.showModal ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}


export default CheckoutModal;