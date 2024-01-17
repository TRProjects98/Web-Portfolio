import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faTriangleExclamation,
  faXmark,
  faCircleCheck,
  faCircleXmark
} from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  
  const EmailRef = useRef();

  const EmailLabelRef = useRef();

  const FormRef = useRef();

  const EmailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  let IsEmailValid = false;

  let [FormValid, setFormValid] = useState()

  const EmailVerification = () => {
    const email = EmailRef.current.value;

    if (email != "") {
      IsEmailValid = EmailRegex.test(email);
    }
  };

  function FormAnalis(e) {
    e.preventDefault();
    let InputsFill = false;

    document.querySelectorAll("input").forEach((element) => {
      if (element.value === "") {
        InputsFill = true;
      }
    });

    document.querySelector('.FormMessagePop').style.color= 'rgb(185, 12, 12)'
    document.querySelector('.FormMessagePop').style.top= '10px'

    setTimeout(() => {
      document.querySelector('.FormMessagePop').style.top= '-100px'
    }, 3000);

    if (InputsFill === false) {
      if (document.querySelectorAll("textarea")[0].value != "") {

        if (IsEmailValid) {

          document.querySelector('#form_message').innerHTML = 'Message sent successfully'
          document.querySelector('.FormMessagePop').style.color = 'var(--secundary-text-color)'
          setFormValid(FormValid= true)
          FormSubmition()
          FormRef.current.reset()

        } else {

          document.querySelector('#form_message').innerHTML = 'E-mail not valid'
          setFormValid(FormValid= false)

        }
      } else {

        document.querySelector('#form_message').innerHTML = 'Add a message'
        setFormValid(FormValid= false)

      }
    } else {

      document.querySelector('#form_message').innerHTML = 'Fill all inputs'
      setFormValid(FormValid= false)

    }
  }

  function FormSubmition() {

    emailjs
      .sendForm(
        "service_ibwaqkm",
        "template_ibpei0r",
        FormRef.current,
        "YOUR_PUBLIC_KEY'"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log("error " + error.text);
        }
      );
  }

  useEffect(() => {
    FormRef.current.addEventListener("click", () => {
      if (EmailRef.current.value != "") {
        if (!IsEmailValid) {
          document.querySelector(".InvalidEmail").style.opacity = "1";
        }
      }
    });
  });

  return (
    <section>
      <div className="w-full flex justify-center">
        <div className="FormMessagePop">
        {FormValid
          ?<FontAwesomeIcon icon={faCircleCheck} />
          :<FontAwesomeIcon icon={faCircleXmark} />
        }
            <p id="form_message"></p>
        </div>
      </div>
      
      <section className="px-10 md:pr-0 mb-36">
      <h1 id='Contacts' className="mb-16 text-5xl md:text-7xl text-center md:text-start">
        <span className="secundaryColor">My</span> Contacts
      </h1>
      <section className="costumeSec_Tablet flex w-full">
        <section className="costumeSec2_Tablet flex gap-36 lg:w-full xl:justify-center">
          <div className="w-full lg:w-2/4 xl:w-2/6">
            <form
              ref={FormRef}
              className="flex flex-col relative gap-14"
              onSubmit={FormAnalis}
            >
              <div className=" flex flex-col md:flex-row gap-11 justify-between">
                <div className=" flex inputbox">
                  <input className='w-full' type="text" id="fname" name="fname" required></input>
                  <label htmlFor="fname">First name</label>
                </div>
                <div className=" flex inputbox">
                  <input className='w-full' type="text" id="lname" name="lname" required></input>
                  <label htmlFor="lname">Last name</label>
                </div>
              </div>
              <div className=" flex w-full">
                <div id="emailDiv" className="inputbox w-full ">
                  <input
                    className="w-full "
                    type="text"
                    id="email"
                    name="email"
                    ref={EmailRef}
                    onChange={EmailVerification}
                    required
                  ></input>
                  <label htmlFor="email" ref={EmailLabelRef}>
                    E-mail
                  </label>
                  <div className="InvalidEmail">
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    <p className="inline px-2">This Email is not valid</p>
                    <span
                      onClick={() => {
                        document.querySelector(".InvalidEmail").style.opacity =
                          "0";
                      }}
                      className="text-xs absolute top-1 hover:cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  rows="6"
                  cols="45"
                  name="message"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <input
                className="SubmitInput"
                type="submit"
                value="Submit"
              ></input>
            </form>
          </div>
          <div className="IconsWrapper w-full xl:w-2/4 h-96 md:h-auto">
            <div className="flex flex-col justify-between items-start h-full">
              <h2>Info</h2>
              <a href="tel:+351910520888">
                <FontAwesomeIcon icon={faPhone} size="lg" />
                <p>910 520 888</p>
              </a>
              <a href="mailto:reistiago64@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <p>reistiago64@gmail.com</p>
              </a>
              <a
                href="https://www.linkedin.com/in/tiago-reis-profile/?locale=en_US"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                <p>/tiago-reis-profile</p>
              </a>
              <a
                href="https://github.com/TRProjects98"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
                <p>/TRProjects98</p>
              </a>
              <a
                href="https://codepen.io/tiagoreisProjects"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCodepen} size="lg" />
                <p>/tiagoreisProjects</p>
              </a>
            </div>
          </div>
        </section>
      </section>
    </section>
    </section>
  );
}

export default Contacts;
