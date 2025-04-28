import React from 'react';
import './BirthdaySurprise.css';
import { useCart } from "react-use-cart"
import { useLocation } from 'react-router-dom'

const BirthdaySurprise = () => {
    const location = useLocation();
    const carddata = location.state;
    console.log(carddata);
    const { addItem } = useCart();

    return (
        <div className="container py-5 mt-4">
            <div className="row align-items-start">
                {/* Image Section */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <img src={carddata.img} alt="Show It Off" className="img-fluid rounded shadow mt-4" />
                </div>

                {/* Details Section */}
                <div className="col-md-6">
                    <h2 className="title">{carddata.title}</h2>
                    <p className="price">Rs.{carddata.price} <span className="text-muted small">[Tax included.]</span></p>

                    <h5 className="fw-bold mb-2">PACKAGES</h5>
                    <span className="badge bg-dark mb-3">Basic</span>
                    <ul className="list-unstyled small mb-4">
                        {carddata.Items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <div className="row g-2 mb-3">
                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Event Date</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Event Time</label>
                            <select className="form-select">
                                <option>9:00 AM - 6:00 PM</option>
                                <option>6:00 PM - 10:00 PM</option>
                            </select>
                        </div>
                    </div>

                    <div className="accordion mb-3" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#descCollapse">
                                    DESCRIPTION
                                </button>
                            </h2>
                            <div id="descCollapse" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    A perfect birthday setup with surprise elements and a fun atmosphere, making memories for a lifetime!
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#reqCollapse">
                                    REQUIREMENTS
                                </button>
                            </h2>
                            <div id="reqCollapse" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    Provide location details, name for banner, and preferred setup timing at least 24 hours prior.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-outline-dark" onClick={() => addItem(carddata)}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BirthdaySurprise;
