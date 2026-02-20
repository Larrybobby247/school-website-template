import { faFacebook, faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-8 lg:my-16">
      <h2 className='text-3xl font-bold '>Get In Touch</h2>
      <div className="mx-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl bg-navy p-2 text-white rounded-full" />
            <div>
                <h3 className="text-lg font-medium">Email</h3>
                <span>methodistschool001@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faPhone} className="text-xl bg-navy p-2 text-white rounded-full" />
            <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <span>+234 9025504256</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faLocationDot} className="text-xl bg-navy p-2 text-white rounded-full" />
            <div>
                <h3 className="text-lg font-medium">Address</h3>
                <span>
              12 Morewa Estate, <br />
              Ibadan, Oyo state Nigeria
            </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 mx-4 my-4">
        <FontAwesomeIcon icon={faFacebook} className="text-4xl text-navy transition duration-300 hover:translate-y-[-4px] cursor-pointer hover:scale-[1.05]"/>
        <FontAwesomeIcon icon={faInstagram} className="text-4xl text-navy transition duration-300 hover:translate-y-[-4px] cursor-pointer hover:scale-[1.05]"/>
        <FontAwesomeIcon icon={faYoutube} className="text-4xl text-navy transition duration-300 hover:translate-y-[-4px] cursor-pointer hover:scale-[1.05]"/>
        <FontAwesomeIcon icon={faWhatsapp} className="text-4xl text-navy transition duration-300 hover:translate-y-[-4px] cursor-pointer hover:scale-[1.05]"/>
      </div>
    </div>
  );
};

export default ContactDetails;
