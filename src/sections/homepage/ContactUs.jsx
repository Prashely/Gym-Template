import React from "react";
import Form from "../../assets/components/ui/Form";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center my-6">
      <h2 className="text-4xl font-bold text-center mb-4">CONTACTS</h2>
      <div className="bg-gray-900 p-4 rounded-2xl">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <SlLocationPin className="w-6 h-6" />
                  <div className="ml-4 text-md tracking-wide font-semibold ">
                    Acme Inc, Street, State, Postal Code
                  </div>
                </div>
                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <FiPhone className="w-6 h-6" />
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +44 1234567890
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <MdOutlineEmail className="w-6 h-6" />
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    info@acme.org
                  </div>
                </div>
              </div>
              <div>
                <Form className="p-6 flex flex-col justify-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
