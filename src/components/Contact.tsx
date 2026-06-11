import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { getEnvironments } from "../helpers/getEnvironments";
import { motion } from "framer-motion";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_KEY } =
  getEnvironments();

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const swalTheme = {
  background: "#0f172a",
  color: "#e2e8f0",
  confirmButtonColor: "#10b981",
};

export const Contact = () => {
  const { name, email, message, onInputChange } = useForm(initialForm);
  const { t } = useTranslation();
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValues = {
      from_email: email,
      from_name: name,
      to_name: "Leonardo",
      message: message,
      reply_to: email,
    };

    setIsSending(true);
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
        ...swalTheme,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while trying to send the email",
        icon: "error",
        ...swalTheme,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <HiEnvelope className="w-12 h-12 text-emerald-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("Contact.Title")}
          </h2>
          <p className="text-xl text-slate-300">{t("Contact.Description")}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5 bg-slate-900/60 border border-slate-800 rounded-xl p-8 space-y-8"
          >
            <div>
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                {t("Contact.Info.Email")}
              </h3>
              <a
                href="mailto:lferreyrac04@hotmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <HiEnvelope className="w-5 h-5" aria-hidden="true" />
                lferreyrac04@hotmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                {t("Contact.Info.Phone")}
              </h3>
              <a
                href="tel:+51970874126"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <HiPhone className="w-5 h-5" aria-hidden="true" />
                +51 970 874 126
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                {t("Contact.Info.Location")}
              </h3>
              <p className="flex items-center gap-2 text-slate-300">
                <HiMapPin className="w-5 h-5" aria-hidden="true" />
                {t("Contact.Info.LocationValue")}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                {t("Contact.Info.Social")}
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ljferreyrac"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors duration-200 cursor-pointer"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/leonardo-ferreyra-ljfc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors duration-200 cursor-pointer"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <form
              onSubmit={onSubmit}
              className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-8 transition-colors duration-200"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-emerald-400 mb-2"
                  >
                    {t("Contact.Form.Name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    className="w-full bg-slate-950/50 rounded-lg border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-100 px-4 py-2.5 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-emerald-400 mb-2"
                  >
                    {t("Contact.Form.Email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    className="w-full bg-slate-950/50 rounded-lg border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-100 px-4 py-2.5 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-emerald-400 mb-2"
                  >
                    {t("Contact.Form.Message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={onInputChange}
                    rows={5}
                    className="w-full bg-slate-950/50 rounded-lg border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-100 px-4 py-2.5 transition-colors duration-200 resize-none"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: isSending ? 1 : 1.02 }}
                  whileTap={{ scale: isSending ? 1 : 0.98 }}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 disabled:cursor-not-allowed text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  {isSending
                    ? t("Contact.Form.Sending")
                    : t("Contact.Form.Send")}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
