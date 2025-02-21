import { useForm } from "../hooks/useForm";
import { getEnvironments } from "../helpers/getEnvironments";
import { motion } from "framer-motion";
import { HiEnvelope } from "react-icons/hi2";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const {
  VITE_EMAIL_SERVICE_ID,
  VITE_EMAIL_TEMPLATE_ID,
  VITE_EMAIL_PUBLIC_KEY,
  VITE_GOOGLE_MAPS_API_KEY,
} = getEnvironments();

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const { name, email, message, onInputChange } = useForm(initialForm);
  const { t } = useTranslation();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValues = {
      from_email: email,
      from_name: name,
      to_name: "Leonardo",
      message: message,
      reply_to: email,
    };

    try {
      await emailjs.send(
        VITE_EMAIL_SERVICE_ID,
        VITE_EMAIL_TEMPLATE_ID,
        formValues,
        VITE_EMAIL_PUBLIC_KEY
      );
      Swal.fire({
        title: "Email sent!",
        text: "Your email has been sent successfully",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while trying to send the email",
        icon: "error",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <HiEnvelope className="w-12 h-12 text-green-500" />
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("Contact.Title")}
          </h2>
          <p className="text-xl text-gray-300">{t("Contact.Description")}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all"
          >
            <div className="relative h-[400px]">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                style={{ filter: "opacity(0.7)" }}
                src={`https://www.google.com/maps/embed/v1/place?q=Pueblo+Libre&key=${VITE_GOOGLE_MAPS_API_KEY}`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">
                      {t("Contact.Information.Direction")}
                    </h3>
                    <p className="text-gray-300">
                      Av. colombia 930 <br />
                      Pueblo Libre, Lima, Perú 15084
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">
                      {t("Contact.Information.Email")}
                    </h3>
                    <a
                      href="mailto:lferreyrac04@hotmail.com"
                      className="text-gray-300 hover:text-green-400 transition-colors"
                    >
                      lferreyrac04@hotmail.com
                    </a>
                    <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mt-4 mb-2">
                      {t("Contact.Information.Mobile")}
                    </h3>
                    <p className="text-gray-300">+51 934169751</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <form
              onSubmit={onSubmit}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-green-400 mb-2"
                  >
                    {t("Contact.Form.Name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    className="w-full bg-gray-900/50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 text-gray-100 px-4 py-2.5 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-green-400 mb-2"
                  >
                    {t("Contact.Form.Email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    className="w-full bg-gray-900/50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 text-gray-100 px-4 py-2.5 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-green-400 mb-2"
                  >
                    {t("Contact.Form.Message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={onInputChange}
                    rows={4}
                    className="w-full bg-gray-900/50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 text-gray-100 px-4 py-2.5 transition-colors duration-200 resize-none"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                >
                  {t("Contact.Form.Send")}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
