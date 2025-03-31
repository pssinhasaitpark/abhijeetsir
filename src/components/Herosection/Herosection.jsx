import React from 'react'
import { image2 } from "../../assets/images/index"
import Button from "../Button/Button"
const Herosection = () => {
    return (
        <div>

            <div className="row my-3">
                <div className="col-sm-6 py-5">
                    <div className="text-white my-auto">
                        <p className="fs-1 fw-bold m-0">I'm  Abhijeet Kalamkar</p>
                        <p className="fs-2 fw-light">IT Admin</p>
                        <p> Hello! I'm Abhijeet Kalamkar, an experienced IT administrator currently working with Parkhya Solutions Pvt. Ltd. With a passion for technology and system optimization, I specialize in managing networks, servers, and IT infrastructures. My goal is to ensure seamless and efficient operations for businesses, while providing innovative solutions to meet their technology needs.</p>
                        <Button  link="/about" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="h-50">
                        <img className="w-100 h-auto   " src={image2} alt="Heroimage" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection
