import React, {useContext} from "react"
import imageBG from "./images/bg-main-desktop.png";
import imageFront from "./images/bg-card-front.png";
import imageBack from "./images/bg-card-back.png";
import {useState} from "react";
import {Context} from "./Context/Context";

export function Submit() {

    // const {cardNumber} = useContext(Context)


    return(
        <>
            <section>
                <div className="images">
                    <img className="bg" src={imageBG} alt="bg"/>
                    <div className="absoluteBGFront">
                        <div className="relativeFront">
                            <img className="bgFront" src={imageFront} alt="bg"/>

                            <div className="circle"></div>
                            <div className="little-circle"></div>
                            <div className="absoluteFront">
                                <h3></h3>
                            </div>

                            <div className="nameClient">
                                <h3></h3>
                            </div>

                            <div className="numbers">
                                <h3>00/00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="absoluteBGBack">
                        <img className="bgBack" src={imageBack} alt="bg"/>
                        <div className="cvc">
                            <h3>000</h3>
                        </div>
                    </div>
                </div>


                <div className="form-container">

                </div>

            </section>

        </>
    )
}

