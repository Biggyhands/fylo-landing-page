import React from "react";
import landingPageLogo from "../assets/logo.svg";

export default function FooterContainer() {
  return (
    <footer>
      <section className="footer-card">
        <img src={landingPageLogo} alt="Fylo Logo" />
        <p>
          <svg
            className="footer-location-icon"
            width="25"
            height="25"
            fill="#ffffff"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-94.97 -94.97 585.65 585.65"
            xmlSpace="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />{" "}
              </g>{" "}
            </g>
          </svg>
          location
        </p>
        <div className="footer-contact">
          <p>
            <svg
              className="footer-location-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            +1-111-111-1111
          </p>
          <p>
            <svg
              className="footer-location-icon"
              width="20"
              height="20"
              fill="#ffffff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 237.832 237.832"
              xmlSpace="preserve"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path d="M228.977,33.916H8.854C3.969,33.916,0,37.881,0,42.771V195.06c0,4.891,3.969,8.856,8.854,8.856h220.123 c4.887,0,8.855-3.965,8.855-8.856V42.771C237.832,37.881,233.864,33.916,228.977,33.916z M221.026,182.184 c0,4.063-3.364,7.356-7.512,7.356h-12.339V73.379l-76.693,49.79c-1.687,1.096-3.627,1.641-5.566,1.641s-3.88-0.545-5.566-1.641 l-76.692-49.79V189.54h-12.34c-4.147,0-7.512-3.293-7.512-7.356V55.647c0-4.063,3.364-7.356,7.512,7.356h10.176l84.423,54.808 l84.423-54.808h10.176c4.147,0,7.512,3.293,7.512,7.356V182.184z" />
              </g>
            </svg>
            example@fylo.com
          </p>
        </div>
        <div className="footer-details">
          <ul>
            <li>
              <p href="#">About Us</p>
            </li>
            <li>
              <p href="#">Jobs</p>
            </li>
            <li>
              <p href="#">Press</p>
            </li>
            <li>
              <p href="#">Blog</p>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <p>Contact Us</p>
            </li>
            <li>
              <p>Terms</p>
            </li>
            <li>
              <p>Privacy</p>
            </li>
          </ul>
        </div>
        <div className="social-icons">
          <ul>
            <li>
              <svg
                width="50"
                height="50"
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    stroke="#fcfcfc"
                    strokeLinecap="round"
                    strokeWidth="12"
                    d="M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Zm0 0v-62m30-48h-10c-11.046 0-20 8.954-20 20v28m0 0H74m22 0h22"
                  />
                </g>
              </svg>
            </li>
            <li>
              <svg
                width="50"
                height="50"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                enableBackground="new 0 0 32 32"
                xmlSpace="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      fill="#ffffff"
                      d="M16-0.035C7.159-0.035-0.035,7.159-0.035,16S7.159,32.035,16,32.035S32.035,24.841,32.035,16 S24.841-0.035,16-0.035z M16,30.965C7.748,30.965,1.035,24.252,1.035,16S7.748,1.035,16,1.035S30.965,7.748,30.965,16 S24.252,30.965,16,30.965z"
                    />
                    <path
                      fill="#ffffff"
                      d="M24.797,11.082c-0.027,0.012-0.055,0.024-0.083,0.036c0.131-0.228,0.238-0.471,0.319-0.725 c0.063-0.198-0.002-0.414-0.165-0.543c-0.163-0.129-0.388-0.145-0.566-0.039c-0.522,0.31-1.083,0.538-1.673,0.681 c-0.693-0.632-1.608-0.99-2.553-0.99c-2.086,0-3.783,1.696-3.783,3.781c0,0.066,0.001,0.131,0.005,0.197 c-2.259-0.271-4.346-1.415-5.797-3.195c-0.104-0.127-0.262-0.201-0.427-0.183c-0.164,0.013-0.31,0.105-0.393,0.247 c-0.334,0.574-0.512,1.232-0.512,1.902c0,0.667,0.15,1.29,0.432,1.832c-0.147-0.03-0.295,0.025-0.412,0.116 C9.071,14.292,9,14.458,9,14.611c0,1.157,0.547,2.218,1.422,2.921c-0.007,0.007-0.014,0.014-0.021,0.022 c-0.117,0.132-0.155,0.316-0.102,0.484c0.356,1.11,1.194,1.968,2.242,2.373c-1.063,0.542-2.3,0.752-3.487,0.616 C8.83,21,8.605,21.137,8.526,21.356c-0.078,0.219,0.005,0.463,0.202,0.589c1.587,1.017,3.42,1.554,5.302,1.554 c6.159,0,9.839-5.002,9.839-9.839c0-0.06,0-0.12-0.001-0.18c0.601-0.466,1.12-1.025,1.547-1.664c0.124-0.185,0.11-0.429-0.033-0.6 C25.239,11.046,25.001,10.993,24.797,11.082z M23.068,12.829c-0.138,0.099-0.216,0.261-0.208,0.431 c0.006,0.133,0.009,0.267,0.009,0.4c0,4.345-3.306,8.839-8.839,8.839c-1.038,0-2.059-0.182-3.023-0.534 c1.145-0.198,2.218-0.674,3.152-1.406c0.167-0.13,0.233-0.352,0.166-0.552c-0.067-0.201-0.253-0.337-0.465-0.341 c-0.928-0.017-1.766-0.488-2.266-1.227c0.246-0.015,0.482-0.056,0.742-0.126c0.224-0.061,0.376-0.268,0.368-0.5 c-0.008-0.231-0.174-0.427-0.401-0.473c-1.079-0.217-1.94-1.047-2.212-2.076c0.045,0.016,0.086,0.03,0.125,0.044 c0.251,0.09,0.45,0.162,0.828,0.173c0.231,0.001,0.423-0.135,0.492-0.348s-0.013-0.444-0.198-0.568 c-0.741-0.495-1.166-1.339-1.166-2.316c0-0.247,0.033-0.491,0.096-0.726c1.729,1.795,4.088,2.879,6.588,3.005 c0.155,0.017,0.308-0.059,0.408-0.179c0.101-0.12,0.139-0.281,0.104-0.434c-0.048-0.207-0.072-0.42-0.072-0.635 c0-1.534,1.249-2.781,2.783-2.781c0.767,0,1.507,0.32,2.031,0.879c0.118,0.125,0.292,0.181,0.462,0.148 c0.221-0.044,0.439-0.098,0.654-0.162c-0.114,0.096-0.237,0.184-0.366,0.262c-0.203,0.121-0.292,0.367-0.216,0.59 c0.077,0.223,0.303,0.363,0.532,0.335c0.101-0.012,0.202-0.026,0.302-0.042C23.345,12.622,23.209,12.728,23.068,12.829z"
                    />
                  </g>
                </g>
              </svg>
            </li>

            <li>
              <svg
                width="50"
                height="50"
                fill="#ffffff"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-143 145 512 512"
                xmlSpace="preserve"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z" />
                    <path d="M191.6,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7 v-52.3C241,295.2,218.8,273,191.6,273z M205.8,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L205.8,302.5z M76.5,374.7 c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1C88,446.1,68,425.8,68,401 C68,391.2,71.2,382.1,76.5,374.7z M216.1,479.5c0,13.5-11,24.5-24.5,24.5h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2 c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3h38.2V479.5z" />
                  </g>
                </g>
              </svg>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
