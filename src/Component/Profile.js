import React, { useEffect, useState } from "react"
import Navbar from "./navbar"
import '../css/Profile.css'
import { profile } from '../services/user-services';

function Profile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [about, setAbout] = useState('');

    useEffect(() => {
    })

  return (
    <>
    <Navbar />
      <section className="vh-100 container-root" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3 card-3">
                <div className="row g-0">
                  <div
                    className="col-md-4  text-center text-white gradient-custom">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5 avatar-img"
                    />
                    <h5>Marie Horwitz</h5>
                    <p>Web Designer</p>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6 className="header-lines">Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">info@example.com</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">123 456 789</p>
                        </div>
                      </div>
                      <h6 className="header-lines">About</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                      <p className="text-muted header-lines">Dolor sit amet</p>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="/">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="/">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="/">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Profile;
