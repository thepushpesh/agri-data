import React from 'react'

export default function Navbar() {
    return (
        <nav >
            <h3>Agri-Input Master Maintenance</h3>
            <div className='navbar'>
                <div className="top-nav">
                    <ul>
                        <li><span className='red'>1</span><p>PENDING</p></li>
                        <li><span className='yellow'>2</span><p>EXECUTING</p></li>
                        <li><span className='orange'>3</span><p>EXECUTED</p></li>
                        <li><span className='green'>4</span><p>COMPLETED</p></li>
                    </ul>
                </div>
                <div className="bottom-nav">
                    <ul>
                        <li><p>Undo Batch</p></li>
                        <li><p>Assign Suppliers</p></li>
                        <li><p>Generate PO</p></li>
                    </ul>
                    <div className="bottom-detail">
                        <p>Executing Agri-Input Orders</p>
                        <p>Batched By</p>
                    </div>
                </div>
            </div>
        </nav>
        )
}
