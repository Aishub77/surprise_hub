import React from 'react'
import { useCart } from 'react-use-cart'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Cartpage = () => {

    const sendbuy = useNavigate();
    const handlesend = (i) => {
        sendbuy('/details', { state: i })
    }
    const { items, isEmpty, totalUniqueItems, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart, } = useCart();
    if (isEmpty) {
        return (<h2 className='mt-5'>Cart is Empty</h2>)
    }

    return (
        <div>
            <section className='container position-sticky' style={{marginTop: '100px' }}>
                <div className="row justify-content-center">
                    <div className='col-12'>
                        <h1>Cart : {totalUniqueItems}     Total Items : {totalItems}</h1>
                        <table className='table table-light table-hover m-0'>
                            <tbody>
                                {items.map((i, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><img src={i.img} style={{ height: '6rem', width: '6rem' }}></img></td>
                                            <td>{i.title}</td>
                                            <td>{i.price}</td>
                                            <td>Quantity:{i.quantity}</td>
                                            <td><button className='btn btn-info ms-2' onClick={() => updateItemQuantity(i.id, i.quantity + 1)}>+</button></td>
                                            <td><button className='btn btn-info ms-2' onClick={() => updateItemQuantity(i.id, i.quantity - 1)}>-</button></td>
                                            <td><button className='btn btn-info ms-2' onClick={() => removeItem(i.id)}>Remove</button></td>
                                            <td><button className='btn btn-info ' onClick={() => handlesend(i)}>Buy Now</button></td>
                                        </tr>
                                    )
                                }
                                )}

                            </tbody>
                        </table>
                    </div>

                    <div className='col-auto ms-auto py-5' style={{ fontFamily: 'Poppins' }}>
                        <h1>Total Price: Rs.{cartTotal}</h1>
                    </div>
                    <div className='col-auto'>
                        <button className='btn btn-warning m-2' onClick={() => emptyCart()}>Clear Cart</button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Cartpage

