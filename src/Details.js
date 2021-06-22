import React from 'react'
import {Data} from './Data';
import {useState} from 'react';
import {AiOutlineDownload} from 'react-icons/ai';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import { CSVLink } from 'react-csv';

export default function Details() {
  const [agri, setAgri] = useState(Data);
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showProduct = (id) => {
        const newproduct = agri.filter((item) => item.id === id)
        setAgri(newproduct);
  }

  const headers = [
      {label: 'No.', key:'id' },
      {label: 'Name', key:'name' },
      {label: 'Description', key:'description' },
      {label: 'Quantity', key:'quantity' },
  ]

  const csvReport = {
      filename: 'AgriReport.csv',
      headers: headers,
      data: Data,
    };

    return (
        <main>
            <div className="options">
                <button className="cart" onClick={() => {setShow(!show)}}>AGBUY13042020_1042
                    <span> {show ? <IoIosArrowUp /> : <IoIosArrowDown />} </span>
                </button>
                <div className="customer">
                    <img src="./image/alex.jpg" alt="" />
                    <div className="customer-info">
                        <p>Alex LEE</p>
                        <p>Mon, 22 June, 11:40 AM</p>
                    </div>
                </div>
               <button> <img src="./image/excel.png" alt="" /> <CSVLink {...csvReport}>RFQList 13042020_1042 <AiOutlineDownload/></CSVLink></button>
            </div>
            {show && 
            <div className="product-desc">
                <div className="head">
                    <h3 className='id'>Sr.no</h3>
                    <h3 className='name'>Agri-Input Category</h3>
                    <h3 className='pro-img'>Product Image</h3>
                    <h3 className='description'>Product Description</h3>
                    <h3 className='quantity'>Order Quantity</h3>
                </div>
                <div className="product">
                    {agri.map((item) => {
                        const {id, name, description, image, icons, quantity} = item;
                        return (
                    <div className='info'>
                        <p className='id'>{id}</p>
                        <p className='name'>{name}</p>
                        <img className='pro-img' src={image} alt="product" />
                        <p className='description'>{description}</p>
                        <p className='quantity'>{quantity}</p>
                        <div className="modal-container">
                            {isModalOpen && 
                            <h3>{agri}</h3>
                        }
                        <button onClick={() => {showProduct(id)}}>{icons}</button>
                        </div>
                    </div>
                    )
                    })}
                </div>
            </div>
            }
        </main>
        )
}
