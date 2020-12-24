import React, { Component } from 'react';
import {getProducts} from '../api/apiCall';
import CheckoutModal from '../modals/checkoutModal';
import './ShoppingCart.css';

export default class ShoppingCart extends Component {
    constructor(){
        super();
        this.state= {
            products: [],
            countProduct:[],
            totalCount: 0,
            totalPrice: 0,
            ischeckout: false,
        };
        this.showProducts = this.showProducts.bind(this);
        this.setCountProduct = this.setCountProduct.bind(this);
    }

    componentDidMount(){
        getProducts().then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          this.setCountProduct(data);
          this.setState({products: data.products});
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    setCountProduct = (data) =>{
        let countProduct = data.products.map(item =>{
            return {
                id: item.id,
                count: 0,
                price: item.price
            }
        });
        console.log('count data',countProduct);
        this.setState({countProduct: countProduct});
    }

    updateCounts = (id, action) => {
        let countProductArr = [...this.state.countProduct];
        let totalCount = this.state.totalCount;
        let totalPrice = this.state.totalPrice;
        const index = countProductArr.findIndex(el => el.id === id);
        if(action == 'add'){
            countProductArr[index].count += 1;
            totalCount += 1;
            totalPrice += countProductArr[index].price;
        }else if (action=='remove' &&countProductArr[index].count > 0){
            countProductArr[index].count -= 1;
            totalCount -= 1;
            totalPrice -= countProductArr[index].price;
            console.log(this.state.countProduct);
        }else if( action =='addToCart' && countProductArr[index].count == 0){
            countProductArr[index].count += 1;
            totalCount += 1;
            totalPrice += countProductArr[index].price;
        }
        if(totalPrice >= 0 && totalCount >=0 && countProductArr[index].count>=0){
            console.log('state updated');
            this.setState({
                countProduct: countProductArr,
                totalCount : totalCount,
                totalPrice : totalPrice
            })
        }
        console.log(countProductArr, this.state.countProduct, countProductArr[index].count);
    }

    getProductCount = (id) => {
        const index = this.state.countProduct.findIndex(el => el.id === id);
        return this.state.countProduct[index].count;
    }
    updateCheckout=()=>{
        this.setState({ischeckout: !this.state.ischeckout})
    }

    showProducts = () =>{
        return this.state.products
        .map(item => {
            return (<div className="gridContainer">
                <div>
                    <img src={item.imageUrl} alt='Product'></img>
                    <p style={{'font-size':'larger', 'fontFamily':'sans-serif', 'fontStyle':'italic'}}>{item.offerText}</p>
                </div>
                <div>
                    <p className='Brand'>{item.brandName}</p>
                    <p style={{'fontStyle': 'italic'}}>{item.productName}</p>
                    <p>{item.quantity}</p>
                    <p>MRP ₹{item.mrp}</p>
                    <p style={{'font-weight':'bold'}}>₹{item.price}</p>
                    <div className='addCart'>
                        <button className='checkoutbtn' onClick={()=>{this.updateCounts(item.id,'addToCart')}}>Add To Cart</button>
                        <span onClick={()=>this.updateCounts(item.id,'add')} className='itemIcon'>+</span>
                        <span>{this.getProductCount(item.id)}</span>
                        <span onClick={()=>this.updateCounts(item.id,'remove')} className='itemIcon'>-</span> 
                    </div>
                </div>
                <hr />
            </div>)
        });
    }

    render() {
        return (
            <div>
                <div className='main'>
                    <h1>Shopping Cart</h1>
                    {this.showProducts()}
                </div>
                <div className='footer'>
                    <div className='align'>
                        <p>Qty: {this.state.totalCount}</p>
                        <p>Total: ₹ {this.state.totalPrice.toFixed(2)}</p>
                    </div>
                    <div className='buttonDiv'>
                        <button className='checkoutbtn' onClick={this.updateCheckout}>Checkout</button>
                    </div>
                </div>
                <CheckoutModal showModal={this.state.ischeckout}>
                    <p className='close' onClick={this.updateCheckout}>X</p>
                    <p className='infoText'>Transaction Successful !!!</p>
                    <p className='valueText'>Total Price: ₹{this.state.totalPrice}</p>

                </CheckoutModal>
            </div>
        )
    }
}
