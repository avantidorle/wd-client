import React, {useState} from 'react';
import "../css/team.css";


const Team = () => {
    return(
        <>
            <div className="bg-gradient">
                <h1 className=" text-center">Team</h1><br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card">
                                <img src="/images/avanti.png"  className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Avanti</h5>
                                    <p className="card-text">MS CS student at Northeastern University</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div className="card">
                                <img src="/images/rishita.png"  className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Rishita</h5>
                                    <p className="card-text">MS CS student at Northeastern University</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div className="card">
                                <img src="/images/sid.png"  className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Siddhant</h5>
                                    <p className="card-text">MS CS student at Northeastern University</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div className="card">
                                <img src="/images/Shambhavi.jpg"  className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Shambhavi</h5>
                                    <p className="card-text">MS CS student at Northeastern University</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}

export default Team;