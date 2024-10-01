import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
     {/* Footer Block Start */}
<footer id="site-footer">
  <div className="bg-success bg-opacity-25 py-5">
    <div className="container py-3">
      <div className="row">
        <div className="col-xl-3 col-md-6 col-sm-12">
          <h5 className="pb-3"><i className="fa-solid fa-user-group pe-1" /> About us</h5>
          <span className="text-secondary">This is a wider card with supporting text below as a natural lead-in to additional content.</span>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12">
          <h5 className="pb-3"><i className="fa-solid fa-link pe-1" /> Important links</h5>
          <ul>
            <li><a href="#" className="text-decoration-none link-secondary">About us</a></li>
            <li><a href="#" className="text-decoration-none link-secondary">Privacy policy</a></li>
            <li><a href="#" className="text-decoration-none link-secondary">Terms of services</a></li>
          </ul>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12">
          <h5 className="pb-3"><i className="fa-solid fa-location-dot pe-1" /> Our location</h5>
          <span className="text-secondary">
            Milannagar bazar<br />
            Tamluk, East Medinipore, West Bengal<br />
            721627, India<br />
          </span>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12">
          <h5 className="pb-3"><i className="fa-solid fa-paper-plane pe-1" /> Stay updated</h5>
          <form>
            <input type="text" className="w-100 mb-2 form-control" name placeholder="Email ID" />
            <button className="w-100 btn btn-dark">Subscribe now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-dark py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <ul className="list-inline mb-0">
            <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><i className="fa-brands fa-facebook-f" /></a></li>
            <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><i className="fa-brands fa-youtube" /></a></li>
            <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><i className="fa-brands fa-twitter" /></a></li>
            <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
            <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><i className="fa-brands fa-github" /></a></li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-12"><span className="text-secondary pt-1 float-md-end float-sm-start">Copyright © 2023</span></div>
      </div>
    </div>
  </div>
</footer>
{/* Footer Block Start */}

    </Fragment>
  )
}

export default Footer
