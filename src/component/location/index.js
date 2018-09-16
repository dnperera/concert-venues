import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.63958479817!2d-122.20273984906696!3d37.75159882116623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f85c31b8063f1%3A0x7057c9bec0f06fd5!2sOakland-Alameda+County+Coliseum!5e0!3m2!1sen!2sus!4v1537074732903"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};
export default Location;
