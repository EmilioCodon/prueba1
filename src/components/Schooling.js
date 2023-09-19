import React from "react";


const Schooling = () => {
  return (
    <section id="timeline">
      <div className="tl-item">
        <div
          className="tl-bg"
          style={{
            backgroundImage: "url(https://www.dicyt.com/data/69/10869.jpg)"
          }}
        ></div>

        <div className="tl-year">
          <p className="f2 heading--sanSerif">2011</p>
        </div>

        <div className="tl-content">
          <h1>University of Salamanca</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </p>
        </div>
      </div>

      <div className="tl-item">
        <div
          className="tl-bg"
          style={{
            backgroundImage: "url(https://keystoneacademic-res.cloudinary.com/image/upload/element/18/180863_Jubileeatnight.jpg)"
          }}
        ></div>

        <div className="tl-year">
          <p className="f2 heading--sanSerif">2013</p>
        </div>

        <div className="tl-content">
          <h1 className="f3 text--accent ttu">University of Sussex</h1>
          <p>
            Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan
            risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas.
            Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis.
            Morbi sed nisl et arcu.
          </p>
        </div>
      </div>

      <div className="tl-item">
        <div
          className="tl-bg"
          style={{
            backgroundImage: "url(https://image.ondacero.es/clipping/cmsimages01/2021/08/27/6B9E3B85-AA3D-467F-A8F2-1E4D3D701BF0/104.jpg?crop=1485,1485,x251,y0&width=1200&height=1200&optimize=low&format=webply)"
          }}
        ></div>

        <div className="tl-year">
          <p className="f2 heading--sanSerif">2022</p>
        </div>

        <div className="tl-content">
          <h1 className="f3 text--accent ttu">UPV / EHU</h1>
          <p>
            Mauris cursus magna at libero lobortis tempor. Suspendisse potenti.
            Aliquam interdum vulputate neque sit amet varius. Maecenas ac
            pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at,
            porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque
            non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium
            sed.
          </p>
        </div>
      </div>

      <div className="tl-item">
        <div
          className="tl-bg"
          style={{
            backgroundImage: "url(https://www.orona-group.com/sites/default/files/styles/1920x1080/public/2021-03/orona_ideo-min.png?itok=53gS-BR1)"
          }}
        ></div>

        <div className="tl-year">
          <p className="f2 heading--sanSerif">2023</p>
        </div>

        <div className="tl-content">
          <h1 className="f3 text--accent ttu">orona coorp.</h1>
          <p>
            Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare
            purus non euismod. Donec vestibulum efficitur tortor, eget efficitur
            enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius
            metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus
            nec, pulvinar porttitor lorem. Pellentesque dolor elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schooling;
