import React, { useRef, useState } from "react";
import speectBubble from "../assets/images/speech-bubble.png";
import Page from "../components/Page";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/Button";
import { TranslationContext } from "../App";

const Contact = () => {
  const t = React.useContext(TranslationContext);
  const styles = {
    errormessage: {
      color: "#FF6969",
      fontSize: "13px",
    },
  };

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    from_fName: "",
    from_lName: "",
    from_email: "",
    from_phone: "",
    from_timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const form = useRef();
  const notifySuccess = () => {
    toast.success("Succesfully Sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    {
      setFormData({
        from_fName: "",
        from_lName: "",
        from_email: "",
        from_phone: "",
        from_timeline: "",
        message: "",
      });
    }
  };

  const notifyError = () => {
    toast.error("Something is wrong!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.from_fName.trim()) {
      validationErrors.from_fName = "First Name is required";
    }

    if (!formData.from_lName.trim()) {
      validationErrors.from_lName = "Last Name is required";
    }

    if (!formData.from_email.trim()) {
      validationErrors.from_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      validationErrors.from_email = "email is not valid";
    }

    if (!formData.from_timeline.trim()) {
      validationErrors.from_timeline = "Please specify the timeline.";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required!";
    }

    setErrors(validationErrors);

    emailjs
      .sendForm("service_enfi15m", "template_n6l6t3h", form.current, {
        publicKey: "sdUH7SNu2KnjDZ7j6",
      })
      .then(() => {
        {
          Object.keys(validationErrors).length === 0 && notifySuccess();
        }
      })
      .catch(() => notifyError());
  };

  return (
    <>
      <Page title={t("contact-nav")} />
      <ToastContainer />

      <div className="flex flex-col md:flex-row max-w-[80%] mx-auto absolute inset-0 justify-between items-center">
        <div className="mt-[7em] space-y-5">
          <div className="w-[70px] h-[70px] rounded-full bg-white mx-auto translate-y-1/2 flex justify-center items-center">
            <div className="w-[60px] h-[60px] rounded-full bg-[#00211B] opacity-50 flex justify-center items-center">
              <img src={speectBubble} className="w-[24px] h-auto text-white" />
            </div>
          </div>
          <div className="text-center">
            <h1
              className="leading-tight druk font-bold whitespace-nowrap"
              style={{ fontSize: "clamp(2.8em, 6vw, 7em)" }}
            >
              {t("letstalk")}
            </h1>
          </div>
        </div>
        <div
          className="max-h-screen mt-[10%] md:mt-[40%] lg:mt-[30%]"
          id="brown"
        >
          <div className="max-w-[95%] md:max-w-[80%] mx-auto   md:mx-0 md:ml-auto space-y-20  pb-10">
            <form ref={form} onSubmit={sendEmail}>
              <section className="space-y-6">
                <p className="text-[1.2em] text-start">{t("letme")}</p>
                <div className="md:flex relative gap-6 space-y-4 md:space-y-0">
                  <div className="flex-grow">
                    <label
                      htmlFor="fname"
                      className="text-[14px] text-[#B0A47F] capitalize"
                    >
                      {t("fname")}
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="from_fName"
                      value={formData.from_fName}
                      className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:shadow-b-md text-[#120e0e] font-[400]"
                      placeholder={t("fname")}
                      onChange={handleChange}
                    />
                    {errors.from_fName && (
                      <span style={styles.errormessage}>
                        {errors.from_fName}
                      </span>
                    )}
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="lname"
                      className="text-[14px] text-[#B0A47F] capitalize"
                    >
                      {t("lname")}
                    </label>
                    <input
                      id="lname"
                      type="text"
                      name="from_lName"
                      value={formData.from_lName}
                      className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:shadow-b-md text-[#120e0e] font-[400]"
                      placeholder={t("lname")}
                      onChange={handleChange}
                    />
                    {errors.from_lName && (
                      <span style={styles.errormessage}>
                        {errors.from_lName}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-[14px] text-[#B0A47F] capitalize"
                  >
                    {t("email")}
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="from_email"
                    value={formData.from_email}
                    className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:shadow-b-md text-[#120e0e] font-[400]"
                    placeholder={t("email")}
                    onChange={handleChange}
                  />
                  {errors.from_email && (
                    <span style={styles.errormessage}>{errors.from_email}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="text-[14px] text-[#B0A47F] capitalize"
                  >
                    {t("phone")}
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="from_phone"
                    value={formData.from_phone}
                    className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:shadow-b-md text-[#120e0e] font-[400]"
                    placeholder={t("phone")}
                    onChange={handleChange}
                  />
                </div>
                <section className="space-y-6">
                  <p className="text-[1.2em]  text-start">{t("tellmemore")}</p>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="text-[14px] text-[#B0A47F] capitalize"
                    >
                      {t("timeline")}
                    </label>
                    <input
                      id="timeline"
                      type="text"
                      name="from_timeline"
                      value={formData.from_timeline}
                      className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:shadow-b-md text-[#120e0e] font-[400]"
                      placeholder={t("timeline")}
                      onChange={handleChange}
                    />
                    {errors.from_timeline && (
                      <span style={styles.errormessage}>
                        {errors.from_timeline}
                      </span>
                    )}{" "}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-[14px] text-[#B0A47F] capitalize"
                    >
                      {t("message")}
                    </label>
                    <textarea
                      id="message"
                      type="text"
                      name="message"
                      value={formData.message}
                      className="w-full h-[10em] px-4 py-4 border border-gray-300 focus:outline-none focus:shadow-b-md text-[#120e0e] font-[400]"
                      placeholder={t("hey")}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <span style={styles.errormessage}>{errors.message}</span>
                    )}{" "}
                  </div>
                </section>
                <div className="mt-6 space-y-5">
                  <p className="">{t("promise")}</p>
                  <div className="mt-6">
                    <Button text={t("send")} path="" />
                  </div>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
