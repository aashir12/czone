import React from 'react';


export default function Footer() {
  return (
    <footer className=" text-light text-center text-lg-start ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4" style={{background:'#002C4E'}}>
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="" style={{background:'#064F88'}}>
        <div className="container text-center text-md-start pt-5">
          <div className="row ">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">
                <img src='https://www.czone.com.pk/images/logo/computerzone-logo-1540160816084000.png'></img>
              </h4>
              <p>
              Welcome to Computer Zone. Online Computer store in Pakistan. Buy Dell, Lenovo, HP, Acer laptops at the best prices in Pakistan.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">Products</h4>
              <p>
                <a href="#" className="text-reset">Laptops</a>
              </p>
              <p>
                <a href="#" className="text-reset">Printers</a>
              </p>
              <p>
                <a href="#" className="text-reset">Hard drives</a>
              </p>
              <p>
                <a href="#" className="text-reset">Network Products</a>
              </p>
              <p>
                <a href="#" className="text-reset">Monitors</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">Account</h4>
              <p>
                <a href="#" className="text-reset">Sign Up</a>
              </p>
              <p>
                <a href="#" className="text-reset">My Account</a>
              </p>
              <p>
                <a href="#" className="text-reset">Shoppping Cart</a>
              </p>
              <p>
                <a href="#" className="text-reset">Order History</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h4 className="text-uppercase fw-bold mb-4">Contact</h4>
              <p>
                <i className="fas fa-home me-2 text-warning"></i>
                FL 4/20, Main Rashid Minhas Road, Gulshan-e-Iqbal Block-5, Karachi, Pakistan.
              </p>
              <p>
                <i className="fas fa-envelope me-3 text-warning"></i>
                info@czone.com.pk
              </p>
              <p>
                <i className="fas fa-phone me-3 text-warning"></i>+923202754553 | +923366842938 | +922134960583 | +922134817355 | +922134155030
              </p>
              <p>
                <i className="fas fa-print me-3 text-warning"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' ,background:'#0E5D9A'}} >
        © 2021 Copyright: <strong>CZONE</strong>
      </div>
    </footer>
  );
}
