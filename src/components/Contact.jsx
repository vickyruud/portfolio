import React from "react";
import { useState } from "react";
import axios from "axios";
import ErrorAlert from "./ErrorAlert";
import SuccessAlert from "./SuccessAlert";
import Loading from "./Loading";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const closeError = () => {
    setErrorMessage(null);
  };

  const closeSuccess = () => {
    setSubmitSuccess(false);
  };

  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");

  const submitForm = (event) => {
    event.preventDefault();

    if (name.trim() && email.trim() && message.trim()) {
      setLoading(true);
      const newMessage = {
        name,
        email,
        message,
      };
      axios
        .post(
          "https://getform.io/f/e3cb366c-8254-40fa-826a-2e99c4d52697",
          newMessage
        )
        .then((res) => {
          console.log(res);
          setName("");
          setEmail("");
          setMessage("");

          nameInput.value = "";
          emailInput.value = "";
          messageInput.value = "";
          setSubmitSuccess(true);
          setErrorMessage(null);
          setLoading(false);
        });
    } else {
      setErrorMessage("Please complete the form before submitting!");
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#2c2e30] flex flex-col justify-center items-center p-4"
    >
      <form
        onSubmit={submitForm}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - aprajit.k@gmail.com
          </p>
          {loading ? <Loading /> : null}
          {submitSuccess ? <SuccessAlert handleClose={closeSuccess} /> : null}
          {errorMessage ? (
            <ErrorAlert handleClose={closeError} message={errorMessage} />
          ) : null}
        </div>
        <input
          id="nameInput"
          onChange={(e) => setName(e.target.value)}
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          id="emailInput"
          onChange={(e) => setEmail(e.target.value)}
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          id="messageInput"
          onChange={(e) => setMessage(e.target.value)}
          className="bg-[#ccd6f6] p-2 h-16 md:h-48"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          {loading ? <p>Submitting....</p> : <p>Let's Collaborate!</p>}
        </button>
      </form>
    </div>
  );
};

export default Contact;
