import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Pop1 from "./pop-1.jpg"
import Pop2 from "./pop-2.jpg"
import Pop3 from "./pop-3.jpg"
import Pop4 from "./pop-4.jpg"
import "./style.css"

function Choose() {
    return (
        <div className="choose">
            <div className="container row">
                <div className="col-lg-6 col-md-12">
                    <div className="box mt-4">
                        <h5 style={{backgroundColor: '#772727', padding: '10px', borderRadius: '4px', color: '#fff', marginBottom: '18px', textTransform: 'uppercase'}}>why choose us?</h5>
                        <ul className="p-0 m-0">
                            <li className="d-flex mt-4">
                                <FontAwesomeIcon
                                    className="mt-1 me-3"
                                    style={{border: '1px solid #000', padding: '2px', borderRadius: '4px'}}
                                    icon={faCheck} />
                                <div className="info">
                                    <h4 style={{fontSize: "16px", color: '#772727'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
                                    <p className="opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatibus sequi totam harum minus et deserunt voluptate dolore? Voluptatibus, aspernatur?</p>
                                </div>
                            </li>
                            <li className="d-flex mt-4">
                                <FontAwesomeIcon
                                    className="mt-1 me-3"
                                    style={{border: '1px solid #000', padding: '2px', borderRadius: '4px'}}
                                    icon={faCheck} />
                                <div className="info">
                                    <h4 style={{fontSize: "16px", color: '#772727'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
                                    <p className="opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatibus sequi totam harum minus et deserunt voluptate dolore? Voluptatibus, aspernatur?</p>
                                </div>
                            </li>
                            <li className="d-flex mt-4">
                                <FontAwesomeIcon
                                    className="mt-1 me-3"
                                    style={{border: '1px solid #000', padding: '2px', borderRadius: '4px'}}
                                    icon={faCheck} />
                                <div className="info">
                                    <h4 style={{fontSize: "16px", color: '#772727'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
                                    <p className="opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatibus sequi totam harum minus et deserunt voluptate dolore? Voluptatibus, aspernatur?</p>
                                </div>
                            </li>
                            <li className="d-flex mt-4">
                                <FontAwesomeIcon
                                    className="mt-1 me-3"
                                    style={{border: '1px solid #000', padding: '2px', borderRadius: '4px'}}
                                    icon={faCheck} />
                                <div className="info">
                                    <h4 style={{fontSize: "16px", color: '#772727'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
                                    <p className="opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatibus sequi totam harum minus et deserunt voluptate dolore? Voluptatibus, aspernatur?</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-mg-12">
                    <div className="box mt-4">
                        <h5 style={{ backgroundColor: '#772727', padding: '10px', borderRadius: '4px', color: '#fff', marginBottom: '18px', textTransform: 'uppercase' }}>Most popular</h5>
                        <ul className="m-0 p-0">
                            <li className="d-flex justify-content-center mt-4">
                                <img
                                    className="w-25 me-2"
                                    src={Pop1}
                                    alt="" />
                                <p className="opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatibus sequi totam harum minus et deserunt voluptate dolore? Voluptatibus, aspernatur?</p>
                            </li>
                            <li className="d-flex justify-content-center mt-4">
                                <img
                                    className="w-25 me-2"
                                    src={Pop2}
                                    alt="" />
                                <p className="opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatibus sequi totam harum minus et deserunt voluptate dolore? Voluptatibus, aspernatur?</p>
                            </li>
                            <li className="d-flex justify-content-center mt-4">
                                <img
                                    className="w-25 me-2"
                                    src={Pop3}
                                    alt="" />
                                <p className="opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatibus sequi totam harum minus et deserunt voluptate dolore? Voluptatibus, aspernatur?</p>
                            </li>
                            <li className="d-flex justify-content-center mt-4">
                                <img
                                    className="w-25 me-2"
                                    src={Pop4}
                                    alt="" />
                                <p className="opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatibus sequi totam harum minus et deserunt voluptate dolore? Voluptatibus, aspernatur?</p>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Choose;