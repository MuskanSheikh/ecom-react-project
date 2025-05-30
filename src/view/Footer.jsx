import React from 'react';
import AnchorTag from '../Component/AnchorTag';

function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#45526e' }}>
                <div className="container p-4 pb-0">
                    <section>
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p><a className="text-white" href="#">MDBootstrap</a></p>
                                <p><a className="text-white" href="#">MDWordPress</a></p>
                                <p><a className="text-white" href="#">BrandFlow</a></p>
                                <p><a className="text-white" href="#">Bootstrap Angular</a></p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                                <p><a className="text-white" href="#">Your Account</a></p>
                                <p><a className="text-white" href="#">Become an Affiliate</a></p>
                                <p><a className="text-white" href="#">Shipping Rates</a></p>
                                <p><a className="text-white" href="#">Help</a></p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />

                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2020 Copyright:
                                    <a className="text-white" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                                </div>
                            </div>

                            <div className="col-md-5 col-lg-4 text-center text-md-end">
                                <AnchorTag className="btn btn-outline-light btn-floating m-1" role="button" icon="fa-facebook-f" />
                                <AnchorTag className="btn btn-outline-light btn-floating m-1" role="button" icon="fa-twitter" />
                                <AnchorTag className="btn btn-outline-light btn-floating m-1" role="button" icon="fa-google" />
                                <AnchorTag className="btn btn-outline-light btn-floating m-1" role="button" icon="fa-instagram" />
                            </div>
                        </div>
                    </section>
                </div>
            </footer>

        </>
    )
}

export default Footer;