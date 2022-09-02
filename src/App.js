import Redrose from "./Assets/Redrose 1920-1080 background.png";
import "./App.css";
import Murat from "./Assets/Murat Basyurt.jpeg";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsApp from "@mui/icons-material/WhatsApp";

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-front">
          <div className="upper">
            <img src={Redrose} className="img-fluid" alt="/#" />
          </div>

          <div className="user text-center">
            <div className="profile col-12 col-lg-12">
              <img src={Murat} className="rounded-circle" width="80" alt="/#" />
            </div>
          </div>

          <div className="mt-5 text-center Card-Content">
            <h4 class="mb-0 h44">Murat Başyurt</h4>
            <span class="text-muted d-block mb-2">Redrose</span>

            <button class="btn btn-primary btn-sm follow">
              {" "}
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/murat-basyurt-509a0920/"
              >
                Linkedin
              </a>
            </button>

            <div class="d-flex justify-content-between align-items-center mt-4 px-4 stats1">
              <div class="stats">
                <h6 class="mb-0">Phone No</h6>
                <span>
                  <button className="btn btn-dark btn-sm">
                    <a href="tel:505-119-9227">
                      <LocalPhoneIcon
                        style={{ color: "white" }}
                      ></LocalPhoneIcon>
                    </a>
                  </button>
                </span>
              </div>

              <div className="stats">
                <h6 className="mb-0">WhatsApp Link</h6>
                <span>
                  <button className="btn btn-success btn-sm">
                    <a href="https://wa.me/05051199227">
                      <WhatsAppIcon style={{ color: "white" }}></WhatsAppIcon>
                    </a>
                  </button>
                </span>
              </div>

              <div className="stats">
                <h6 className="mb-0">G-Mail</h6>
                <span>
                  <button className="btn btn-danger btn-sm">
                    <a
                      style={{ textDecoration: "none" }}
                      href="mailto:murat@redrosecps.com"
                    >
                      <EmailIcon style={{ color: "white" }}></EmailIcon>
                    </a>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="Card-back"></div>
      </div>
    </div>
  );
}

export default App;
