import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import imageBG from "../images/bg-main-desktop.png";
import imageFront from "../images/bg-card-front.png";
import imageBack from "../images/bg-card-back.png";

export const Context = createContext({});


const ContextProvider = (props) => {

    const [print, setPrint] = useState(false)
    const [data, setData] = useState(null)
    const [cardNumber, setCardNumber] = useState(null)
    const [mm, setMm] = useState(null)
    const [yy, setYy] = useState(null)
    const [cvc, setCvc] = useState(null)

    function getData(val) {
        setData(val.target.value)
        console.log(data)
    }

    function getCardNumber(val) {
        setCardNumber(val.target.value)
    }

    function getMM(val) {
        setMm(val.target.value)
    }

    function getYY(val) {
        setYy(val.target.value)

    }

    function getCvc(val) {
        setCvc(val.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(data, cardNumber, mm, yy, cvc)

    }

    const stoppedTyping = () => {

        if (this.value.length > 0) {
            document.getElementById("btn").disabled = false
        } else {
            document.getElementById("btn").disabled = true

        }
    }




    // const navigate = useNavigate();


    // const getDatas = (data, cardNumber, mm, yy, cvc) => {
    //     setData(data)
    //     setCardNumber(cardNumber)
    //     setMm(mm)
    //     setYy(yy)
    //     setCvc(cvc)
    // }

    // const test = document.getElementById("test").value.length
    //
    // if (test > 0) {
    //     console.log("yes")
    // }


    const isInputNumber = (e) => {
        const char = String.fromCharCode(e.which)

        if (!(/[0-9]/.test(char))) {
            e.preventDefault()
        }
    }


    return(
        <Context.Provider value={{data, cardNumber}}>
            {props.children}

            <section>

                {
                    print ?
                        <div className="images">
                            <img className="bg" src={imageBG} alt="bg"/>
                            <div className="absoluteBGFront">
                                <div className="relativeFront">
                                    <img className="bgFront" src={imageFront} alt="bg"/>

                                    <div className="circle"></div>
                                    <div className="little-circle"></div>
                                    <div className="absoluteFront">
                                        <h3>{cardNumber}</h3>
                                    </div>

                                    <div className="nameClient">
                                        <h3>{data}</h3>
                                    </div>

                                    <div className="numbers">
                                        <h3>{mm}/{yy}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="absoluteBGBack">
                                <img className="bgBack" src={imageBack} alt="bg"/>
                                <div className="cvc">
                                    <h3>{cvc}</h3>
                                </div>
                            </div>
                        </div>

                        :

                        <div className="images">
                            <img className="bg" src={imageBG} alt="bg"/>
                            <div className="absoluteBGFront">
                                <div className="relativeFront">
                                    <img className="bgFront" src={imageFront} alt="bg"/>

                                    <div className="circle"></div>
                                    <div className="little-circle"></div>
                                    <div className="absoluteFront">
                                        <h3>0000 0000 0000 0000</h3>
                                    </div>

                                    <div className="nameClient">
                                        <h3>JANE APPLESEED</h3>
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

                }


                <div className="form-container">
                    <form action="" id="form" className="form" onSubmit={handleSubmit}>
                        <div className="fullWidth">
                            <h4>CARDHOLDER NAME</h4>
                            <input required id="test" onChange={getData} type="text" placeholder="e.g. Jane Appleseed"/>
                        </div>
                        <div className="fullWidth">
                            <h4>CARD NUMBER</h4>
                            <input onKeyPress={isInputNumber} required onChange={getCardNumber} maxLength="16" type="text" placeholder="e.g. 1234 5678 9123 0000"/>
                        </div>

                        <div className="flex-form">
                            <div className="left">
                                <h4>EXP. DATE (MM/YY)</h4>
                                <div className="little-width">
                                    <input onKeyPress={isInputNumber} required onChange={getMM} maxLength="2" type="text" placeholder="MM" />
                                    <input onKeyPress={isInputNumber} required onChange={getYY} type="text" maxLength="2" placeholder="YY" />
                                </div>
                            </div>

                            <div>
                                <h4>CVC</h4>
                                <input onKeyPress={isInputNumber} required onChange={getCvc} maxLength="3" type="text" placeholder="e.g 123"/>
                            </div>
                        </div>

                        <div>
                            <button onClick={() => setPrint(true)} className="btn" id="btn" type="submit">Confirm</button>
                        </div>
                    </form>
                </div>

            </section>

        </Context.Provider>
    )



}

export default ContextProvider
