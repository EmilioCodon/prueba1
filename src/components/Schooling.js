import React from "react";

const Schooling = () => {
  return (
    <section id="timeline">
      <div className="tl-item">
        <div
          className="tl-bg"
          style={{
            backgroundImage: "url(https://www.dicyt.com/data/69/10869.jpg)",
          }}
        ></div>

        <div className="tl-year">
          <p className="f2 heading--sanSerif">2011</p>
        </div>

        <div className="tl-content">
          <h1>University of Salamanca</h1>
          <p>Double Degree in Business Sciences & Labor Relations.</p>
        </div>
      </div>

      <div className="tl-item">
        <div
          className="tl-bg"
          style={{
            backgroundImage:
              "url(https://keystoneacademic-res.cloudinary.com/image/upload/element/18/180863_Jubileeatnight.jpg)",
          }}
        ></div>

        <div className="tl-year">
          <p className="f2 heading--sanSerif">2013</p>
        </div>

        <div className="tl-content">
          <h1 className="f3 text--accent ttu">University of Sussex</h1>
          <p>One year under the Erasmus program.</p>
        </div>
      </div>

      <div className="tl-item">
        <div
          className="tl-bg"
          style={{
            backgroundImage:
              "url(https://image.ondacero.es/clipping/cmsimages01/2021/08/27/6B9E3B85-AA3D-467F-A8F2-1E4D3D701BF0/104.jpg?crop=1485,1485,x251,y0&width=1200&height=1200&optimize=low&format=webply)",
          }}
        ></div>

        <div className="tl-year">
          <p className="f2 heading--sanSerif">2022</p>
        </div>

        <div className="tl-content">
          <h1 className="f3 text--accent ttu">UPV / EHU</h1>
          <p>
          Degree in Electronic and Automatic Industrial Engineering.
          </p>
        </div>
      </div>

      <div className="tl-item">
        <div
          className="tl-bg"
          style={{
            backgroundImage:
              "url(https://www.orona-group.com/sites/default/files/styles/1920x1080/public/2021-03/orona_ideo-min.png?itok=53gS-BR1)",
          }}
        ></div>

        <div className="tl-year">
          <p className="f2 heading--sanSerif">2023</p>
        </div>

        <div className="tl-content">
          <h1 className="f3 text--accent ttu">Orona Coorp.</h1>
          <p>
          Honors Degree in Bachelor's Thesis, Private Company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schooling;
