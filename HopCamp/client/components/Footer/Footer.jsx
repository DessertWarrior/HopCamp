import React from 'react'
import hopcamplogo from "../../assets/hopcamp.svg"
import './Footer.css'
const Footer = () => {
  return (
    <div id='footer' className='pt-5 mt-5'>
    <div className="header-logo mb-5">
      <img src={hopcamplogo} alt='Hopcamp logo'/>
    </div>
    <div className='d-flex justify-content-between' >
      <div className="aboutUsContainer d-grid row-gap-3">
        <h5 className='fw-bold'>About us</h5>
        <a href='https://www.hipcamp.com/en-US/about#careers'>Careers</a>
        <a href='https://www.hipcamp.com/journal'>Journal</a>
        <a href='https://www.hipcamp.com/en-US/gift'>Gift Cards</a>
        <a href='https://www.hipcamp.com/en-US/about#contact'>Contact</a>
        <a href='https://support.hipcamp.com/hc/en-us/categories/360001303952-Hipcamper-FAQ'>Hopcamper FAQ</a>
      </div>
      <div className="hoistingContainer d-grid row-gap-3">
      <h5 className='fw-bold'>Hosting</h5>
        <a href='https://www.hipcamp.com/en-US/host'>Becoming a Host</a>
        <a href='https://support.hipcamp.com/hc/en-us/articles/360024823292-Is-my-property-right-for-Hipcamp-'>Is my land a fit</a>
        <a href='https://www.hipcamp.com/en-US/protection'>Insurance</a>
        <a href='https://www.hipcamp.com/en-US/hoststandards'>Standards</a>
        <a href='https://support.hipcamp.com/hc/en-us/categories/360001303912-Host-FAQ'>Hoisting FAQ</a>
      </div>
      <div className="informContainer d-grid row-gap-3">
      <h5 className='fw-bold'>Hipcamp is the most comprehensive resource for unique outdoor stays.</h5>
        <a>Discover and book tent camping, RV parks, cabins, treehouses, and glamping.</a>
        <a></a>
        <a></a>
        <a></a>
        <a></a>
      </div>
    </div>


      <h1 className="fw-semibold fs-5 pt-5">
        Download the Hipcamp App
    </h1>
        <div className="d-flex">
            <a href="https://apps.apple.com/us/app/hipcamp-camping-glamping/id1440066037" className="Link__Anchor-sc-86ab60-0 jwNJqH" target="_blank" color="#C2C2C2" rel="noreferrer">
              <svg id="badge-app-store_svg__artwork" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 140 45" xmlSpace="preserve" height={'50px'}><path d="M113.2 2.4H10.6c-.7 0-1.3.1-2 .2-.6.1-1.3.3-1.9.6-.6.3-1.1.7-1.6 1.2s-.9 1-1.2 1.6-.5 1.2-.6 1.9c-.1.7-.2 1.3-.2 2v24.9c0 .7.1 1.3.2 2s.3 1.3.6 1.9c.3.6.7 1.1 1.2 1.6s1 .9 1.6 1.2 1.2.5 1.9.6 1.3.2 2 .2h104.6c.7 0 1.3-.1 2-.2s1.3-.3 1.9-.6 1.1-.7 1.6-1.2.9-1 1.2-1.6c.3-.6.5-1.2.6-1.9s.2-1.3.2-2v-.9-22-1.1-.9c0-.7-.1-1.3-.2-2s-.3-1.3-.6-1.9c-.6-1.2-1.6-2.2-2.8-2.8-.6-.3-1.2-.5-1.9-.6-.7-.1-1.3-.2-2-.2h-2z" fill="#a6a6a6"></path><path d="M11.5 41.5h-.9c-.6 0-1.3-.1-1.9-.2-.5-.1-1.1-.2-1.6-.5s-1-.6-1.4-1-.8-.9-1-1.4c-.3-.5-.4-1.1-.5-1.7-.1-.6-.2-1.2-.2-1.9v-24-.9c0-.6.1-1.2.2-1.8.1-.6.3-1.1.5-1.7.3-.5.6-1 1-1.4s.9-.8 1.4-1c.5-.3 1.1-.4 1.7-.5.6-.1 1.2-.2 1.9-.2H115.3c.6 0 1.2.1 1.9.2.6.1 1.1.3 1.7.5 1 .5 1.9 1.4 2.4 2.4.3.5.4 1.1.5 1.6.1.6.2 1.3.2 1.9v24.9c0 .6-.1 1.2-.2 1.9-.1.6-.3 1.1-.5 1.7-.3.5-.6 1-1 1.4s-.9.8-1.4 1c-.5.3-1.1.5-1.7.5-.6.1-1.2.2-1.9.2H11.5z"></path><g id="badge-app-store_svg___Group_"><g id="badge-app-store_svg___Group_2"><g id="badge-app-store_svg___Group_3"><path id="badge-app-store_svg___Path_" className="badge-app-store_svg__st1" d="M27.9 22.8c0-1.7.9-3.3 2.4-4.2-.9-1.3-2.4-2.1-4-2.2-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-1c-1.9.1-3.6 1.1-4.5 2.7-1.9 3.3-.5 8.3 1.4 11 .9 1.3 2 2.8 3.4 2.8 1.4-.1 1.9-.9 3.6-.9s2.1.9 3.6.9 2.4-1.3 3.3-2.7c.7-.9 1.2-2 1.5-3.1-1.8-.7-2.9-2.5-2.9-4.3z"></path><path id="badge-app-store_svg___Path_2" className="badge-app-store_svg__st1" d="M25.1 14.6c.8-1 1.2-2.2 1.1-3.5-1.2.1-2.4.7-3.2 1.7-.8.9-1.2 2.1-1.1 3.4 1.3-.1 2.4-.6 3.2-1.6z"></path></g></g><path className="badge-app-store_svg__st1" d="M45.4 29.5h-4.7l-1.1 3.4h-2l4.5-12.4h2l4.5 12.4h-2l-1.2-3.4zM41.2 28H45l-1.9-5.5H43L41.2 28zM58.3 28.4c0 2.8-1.5 4.6-3.8 4.6-1.2.1-2.3-.6-2.8-1.6v4.5h-1.9v-12h1.8v1.5c.6-1 1.7-1.6 2.9-1.6 2.2 0 3.8 1.8 3.8 4.6zm-2 0c0-1.8-.9-3-2.4-3-1.4 0-2.4 1.2-2.4 3s1 3 2.4 3c1.5 0 2.4-1.2 2.4-3zM68.2 28.4c0 2.8-1.5 4.6-3.8 4.6-1.2.1-2.3-.6-2.8-1.6v4.5h-1.9v-12h1.8v1.5c.6-1 1.7-1.6 2.9-1.6 2.3 0 3.8 1.8 3.8 4.6zm-1.9 0c0-1.8-.9-3-2.4-3-1.4 0-2.4 1.2-2.4 3s1 3 2.4 3c1.5 0 2.4-1.2 2.4-3zM74.8 29.4c.1 1.2 1.3 2 3 2 1.6 0 2.7-.8 2.7-1.9 0-1-.7-1.5-2.3-1.9l-1.6-.4c-2.3-.6-3.3-1.6-3.3-3.3 0-2.1 1.9-3.6 4.5-3.6s4.4 1.5 4.5 3.6h-1.9c-.1-1.2-1.1-2-2.6-2s-2.5.8-2.5 1.9c0 .9.7 1.4 2.3 1.8l1.4.3c2.5.6 3.6 1.6 3.6 3.4 0 2.3-1.9 3.8-4.8 3.8-2.8 0-4.6-1.4-4.7-3.7h1.7zM86.4 21.8v2.1h1.7v1.5h-1.7v5c0 .8.3 1.1 1.1 1.1h.6V33c-.3.1-.7.1-1 .1-1.8 0-2.5-.7-2.5-2.4v-5.2h-1.3V24h1.3v-2.1h1.8v-.1zM89.2 28.4c0-2.8 1.7-4.6 4.3-4.6 2.6 0 4.3 1.8 4.3 4.6 0 2.9-1.7 4.6-4.3 4.6-2.7 0-4.3-1.8-4.3-4.6zm6.7 0c0-2-.9-3.1-2.4-3.1s-2.4 1.1-2.4 3.1.9 3.1 2.4 3.1 2.4-1.1 2.4-3.1zM99.3 23.9h1.8v1.5c.2-1 1.2-1.7 2.2-1.6.2 0 .4 0 .6.1v1.7c-.3-.1-.6-.1-.8-.1-1 0-1.9.8-1.9 1.8V33h-1.9v-9.1zM112.5 30.2c-.2 1.6-1.9 2.8-3.9 2.8-2.6 0-4.3-1.8-4.3-4.6s1.6-4.7 4.2-4.7c2.5 0 4.1 1.7 4.1 4.5v.6h-6.4v.1c-.1 1.3.8 2.4 2.1 2.6h.3c.9.1 1.8-.4 2.1-1.3h1.8zm-6.3-2.7h4.5c.1-1.2-.9-2.2-2.1-2.3h-.2c-1.2 0-2.2 1-2.2 2.3z"></path></g><g id="badge-app-store_svg___Group_4"><path className="badge-app-store_svg__st1" d="M40.9 11.1c1.5-.1 2.7 1 2.8 2.4v.5c0 1.9-1 3-2.8 3h-2.2v-6h2.2v.1zm-1.2 5.1h1.1c1 .1 1.9-.7 2-1.8V14c.1-1-.6-2-1.6-2.1h-1.5v4.3zM44.8 14.8c-.1-1.2.7-2.2 1.9-2.3s2.2.7 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3s-2.2-.7-2.3-1.9v-.4zm3.3 0c0-1-.4-1.5-1.2-1.5s-1.2.6-1.2 1.5c0 1 .4 1.6 1.2 1.6s1.2-.6 1.2-1.6zM54.7 17.1h-.9l-.9-3.3h-.1l-1 3.3h-.9l-1.2-4.5h.9l.8 3.4h.1l.9-3.4h.9l.9 3.4h.1l.8-3.4h.9l-1.3 4.5zM57 12.6h.9v.7h.1c.2-.5.8-.8 1.3-.8.8-.1 1.5.5 1.6 1.4V17.1H60v-2.7c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1V17.1H57v-4.5zM62.2 10.8h.9v6.3h-.9v-6.3zM64.3 14.8c-.1-1.2.7-2.2 1.9-2.3s2.2.7 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3s-2.2-.7-2.3-1.9v-.4zm3.4 0c0-1-.4-1.5-1.2-1.5-.8 0-1.2.6-1.2 1.5 0 1 .4 1.6 1.2 1.6.7 0 1.2-.6 1.2-1.6zM69.5 15.8c0-.8.6-1.3 1.7-1.3l1.2-.1V14c0-.5-.3-.7-.9-.7-.5 0-.8.2-.9.5h-.9c.1-.8.8-1.3 1.8-1.3 1.1 0 1.8.6 1.8 1.5v3.1h-.9v-.6h-.1c-.3.5-.8.7-1.4.7-.7.1-1.4-.5-1.5-1.2.1-.1.1-.1.1-.2zm2.9-.4v-.3h-1.1c-.6 0-.9.3-.9.6 0 .4.4.6.8.6.6.2 1.1-.3 1.2-.9 0 .1 0 0 0 0zM74.4 14.8c0-1.4.7-2.3 1.9-2.3.6 0 1.1.3 1.4.8h.1v-2.5h.9v6.3h-.9v-.7h-.1c-.3.5-.8.8-1.4.8-1.1 0-1.9-.9-1.9-2.4zm1 0c0 1 .5 1.5 1.2 1.5s1.2-.6 1.2-1.5-.5-1.5-1.2-1.5c-.8 0-1.2.6-1.2 1.5zM82.3 14.8c-.1-1.2.7-2.2 1.9-2.3s2.2.7 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3-1.2.1-2.2-.7-2.3-1.9v-.4zm3.4 0c0-1-.4-1.5-1.2-1.5-.8 0-1.2.6-1.2 1.5 0 1 .4 1.6 1.2 1.6.7 0 1.2-.6 1.2-1.6zM87.8 12.6h.9v.7h.1c.2-.5.8-.8 1.3-.8.8-.1 1.5.5 1.6 1.4V17.1h-.9v-2.7c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1V17.1h-.9v-4.5zM96.6 11.5v1.1h1v.7h-1v2.3c0 .5.2.7.6.7h.3v.8H97c-1 0-1.4-.3-1.4-1.2v-2.5h-.7v-.7h.7v-1.1h1v-.1zM98.8 10.8h.9v2.5h.1c.2-.5.8-.9 1.4-.8.8 0 1.5.6 1.6 1.4V17.1h-.9v-2.7c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1V17.1h-.9l-.1-6.3zM107.9 15.9c-.2.8-1.1 1.4-2 1.3-1.1 0-2.1-.9-2.1-2v-.3c-.2-1.1.6-2.2 1.8-2.3h.3c1.3 0 2 .9 2 2.3v.2h-3.2c-.1.7.4 1.2 1.1 1.3h.1c.4.1.9-.2 1.1-.5h.9zm-3.2-1.5h2.3c0-.6-.4-1.1-1-1.2h-.1c-.6 0-1.2.6-1.2 1.2z"></path></g>
            </svg>
            </a>
          <a href="https://play.google.com/store/apps/details?id=com.hipcamp.pocketknife" className="Link__Anchor-sc-86ab60-0 jwNJqH" target="_blank" color="#C2C2C2" rel="noreferrer">
            <svg id="badge-google-play_svg__artwork" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 140 45" xmlSpace="preserve" height={'50px'}>
              <path d="M133 42.4H8c-2.8 0-5-2.2-5-5v-30c0-2.8 2.3-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.3 5-5 5z"></path><path d="M133 3.2c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H8c-2.3 0-4.2-1.9-4.2-4.2v-30c0-2.3 1.9-4.2 4.2-4.2h125m0-.8H8c-2.8 0-5 2.2-5 5v30c0 2.8 2.3 5 5 5h125c2.8 0 5-2.2 5-5v-30c0-2.7-2.3-5-5-5z" fill="#a6a6a6"></path>
              <path className="badge-google-play_svg__st1" d="M50.4 12.7c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9s-1.6-.3-2.2-.9c-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3s.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7 1 .7 1.6.7c.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.7h2.9v.3zM55 10.2h-2.7v1.9h2.5v.7h-2.5v1.9H55v.7h-3.5v-6H55v.8zM58.2 15.4h-.8v-5.2h-1.7v-.8h4.1v.7h-1.7v5.3h.1zM62.9 15.4v-6h.8v6h-.8zM67.1 15.4h-.8v-5.2h-1.7v-.8h4.1v.7H67l.1 5.3zM76.6 14.6c-.6.6-1.4.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9s.9 1.3.9 2.2-.3 1.6-.9 2.2zm-3.9-.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7s-1.2.2-1.6.7c-.4.4-.7 1-.7 1.7.1.7.3 1.3.7 1.7zM78.5 15.4v-6h.9l2.9 4.7V9.4h.8v6h-.8l-3-4.9v4.9h-.8z"></path>
              <path d="M71.1 24.2c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3-2-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.4 1 2.4 2.6c0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c-.1-2.5-2-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H55c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6s3.1 6.6 6.7 6.6c2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zM96 26.9c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zm-4.6 4.1h1.9V19.9h-1.9v12.5zm-3.1-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4v-7.6h-1.8v.7zM80.4 31c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.3 1.1 2.3 2.6-1 2.6-2.3 2.6zm24.4-11.1h-4.5v12.5h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2.1-3.9-4.1-3.9zm0 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1 0 1.1-.8 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.8-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.1 1.2-1.1 2-2.2 2zm10.6-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V19.9h-1.9v12.5z" fill="#fff"></path><g><linearGradient id="badge-google-play_svg__SVGID_1_" gradientUnits="userSpaceOnUse" x1="24.792" y1="527.158" x2="8.01" y2="543.94" gradientTransform="translate(0 -516)"><stop offset="0" stopColor="#00a0ff"></stop><stop offset="0.007" stopColor="#00a1ff"></stop><stop offset="0.26" stopColor="#00beff"></stop><stop offset="0.512" stopColor="#00d2ff"></stop><stop offset="0.76" stopColor="#00dfff"></stop><stop offset="1" stopColor="#00e3ff"></stop></linearGradient><path d="M13.4 10c-.3.3-.5.8-.5 1.4v22.1c0 .6.2 1.1.5 1.4l.1.1 12.4-12.4v-.2L13.4 10z" fill="url(#badge-google-play_svg__SVGID_1_)"></path><linearGradient id="badge-google-play_svg__SVGID_2_" gradientUnits="userSpaceOnUse" x1="36.792" y1="538.5" x2="12.596" y2="538.5" gradientTransform="translate(0 -516)"><stop offset="0" stopColor="#ffe000"></stop><stop offset="0.409" stopColor="#ffbd00"></stop><stop offset="0.775" stopColor="orange"></stop><stop offset="1" stopColor="#ff9c00"></stop></linearGradient><path d="M30 26.7l-4.1-4.1v-.2l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.6z" fill="url(#badge-google-play_svg__SVGID_2_)"></path><linearGradient id="badge-google-play_svg__SVGID_3_" gradientUnits="userSpaceOnUse" x1="27.788" y1="540.712" x2="5.029" y2="563.471" gradientTransform="translate(0 -516)"><stop offset="0" stopColor="#ff3a44"></stop><stop offset="1" stopColor="#c31162"></stop></linearGradient><path d="M30.1 26.6l-4.2-4.2-12.5 12.5c.5.5 1.2.5 2.1.1l14.6-8.4" fill="url(#badge-google-play_svg__SVGID_3_)"></path><linearGradient id="badge-google-play_svg__SVGID_4_" gradientUnits="userSpaceOnUse" x1="10.248" y1="518.597" x2="20.41" y2="528.76" gradientTransform="translate(0 -516)"><stop offset="0" stopColor="#32a071"></stop><stop offset="0.069" stopColor="#2da771"></stop><stop offset="0.476" stopColor="#15cf74"></stop><stop offset="0.801" stopColor="#06e775"></stop><stop offset="1" stopColor="#00f076"></stop></linearGradient><path d="M30.1 18.2L15.5 9.9c-.9-.5-1.6-.4-2.1.1l12.5 12.5 4.2-4.3z" fill="url(#badge-google-play_svg__SVGID_4_)"></path><path d="M30 26.5l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L30 26.5z" opacity="0.2"></path><path className="badge-google-play_svg__st8" d="M13.4 34.7c-.3-.3-.5-.8-.5-1.4v.2c0 .6.2 1.1.5 1.4v-.2zM35 23.7l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4 1-1 1.3z"></path><path d="M15.5 10L35 21.1c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L15.5 9.9c-1.4-.8-2.5-.1-2.5 1.5v.1c-.1-1.6 1.1-2.3 2.5-1.5z" opacity="0.25" fill="#fff"></path></g>
            </svg>
            </a>
        </div>
    </div>
  )
}

export default Footer