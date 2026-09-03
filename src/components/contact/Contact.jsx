import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  MapPin,
  Check,
  Copy,
  Send,
  Loader2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Project Inquiry");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dharamveersahu18@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    }, 800);
  };
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#f4f7f0]
        px-5
        py-24
        text-[#172019]
        transition-colors
        duration-500
        sm:px-8
        lg:px-12
        lg:py-32
        dark:bg-[#0b0d10]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-lime-400/[0.07]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-green-400/[0.04]
          blur-[120px]
        "
      />

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            TOP LABEL
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-14
            flex
            items-center
            justify-between
          "
        >
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-green-600
              dark:text-lime-400
            "
          >
            Get In Touch
          </p>

          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-gray-400
            "
          >
            06 / 06
          </p>
        </motion.div>

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-12
            border-t
            border-gray-300/70
            pt-10
            dark:border-white/10
            lg:grid-cols-[1fr_1.1fr]
            lg:items-start
          "
        >
          {/* LEFT: BIG TITLE & DIRECT EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="
                mb-4
                max-w-md
                text-sm
                leading-6
                text-gray-500
                dark:text-gray-400
                sm:text-base
              "
            >
              Have a project, opportunity, collaboration, or just want to say hello?
            </p>

            <h2
              className="
                text-[13vw]
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.05em]
                sm:text-[10vw]
                lg:text-[6.5vw]
              "
            >
              Let's
              <br />
              <span className="text-green-600 dark:text-lime-400">
                Talk.
              </span>
            </h2>

            {/* DIRECT EMAIL & COPY BUTTON */}
            <div className="mt-8">
              <p
                className="
                  mb-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-gray-400
                "
              >
                Direct Email
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:dharamveersahu18@gmail.com"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-base
                    font-bold
                    text-gray-900
                    transition
                    hover:text-green-600
                    sm:text-xl
                    dark:text-white
                    dark:hover:text-lime-400
                  "
                >
                  dharamveersahu18@gmail.com
                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-gray-300
                    bg-white/60
                    px-3.5
                    py-1.5
                    text-xs
                    font-semibold
                    text-gray-700
                    shadow-sm
                    transition
                    hover:border-green-500
                    hover:text-green-600
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-gray-300
                    dark:hover:border-lime-400
                    dark:hover:text-lime-400
                  "
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-green-600 dark:text-lime-400" />
                      <span className="text-green-600 dark:text-lime-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: INTERACTIVE CONTACT FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="
              rounded-3xl
              border
              border-gray-200
              bg-white/80
              p-6
              shadow-xl
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-[#11151b]/95
              sm:p-8
            "
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
              Send a Direct Message
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-slate-400">
              Leave your details below and I'll get back to you promptly.
            </p>

            {submitted ? (
              <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center text-green-700 dark:border-lime-400/30 dark:bg-lime-400/10 dark:text-lime-400">
                <Check size={36} className="mb-2" />
                <h4 className="text-base font-bold">Message Sent Successfully!</h4>
                <p className="mt-1 text-xs opacity-90">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                {/* Topic Pills */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                    Topic
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Project Inquiry", "Internship / Role", "Collaboration", "Quick Hello"].map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
                          selectedTopic === topic
                            ? "bg-gradient-to-r from-lime-400 to-green-500 text-slate-950 font-bold shadow-sm"
                            : "border border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white dark:border-slate-800 dark:bg-slate-900/80 dark:text-white dark:focus:border-lime-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white dark:border-slate-800 dark:bg-slate-900/80 dark:text-white dark:focus:border-lime-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                    Message
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or opportunity..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:bg-white dark:border-slate-800 dark:bg-slate-900/80 dark:text-white dark:focus:border-lime-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-400 to-green-500 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-lime-500/10 transition-all hover:opacity-95 hover:shadow-xl active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* ===================================================
            INFORMATION + SOCIALS
        ==================================================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            gap-8
            border-t
            border-gray-300/70
            pt-8
            dark:border-white/10
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* LOCATION */}

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-green-500/10
                text-green-600
                dark:bg-lime-400/10
                dark:text-lime-400
              "
            >
              <MapPin size={16} />
            </div>

            <div>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-gray-400
                "
              >
                Based in
              </p>

              <p className="text-sm font-semibold">
                India
              </p>

            </div>

          </div>

          {/* STATUS */}

          <div className="flex items-center gap-2">

            <span
              className="
                relative
                flex
                h-2
                w-2
              "
            >

              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-lime-400
                  opacity-75
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-lime-400
                "
              />

            </span>

            <span
              className="
                text-xs
                font-medium
                text-gray-500
                dark:text-gray-400
              "
            >
              Open to opportunities
            </span>

          </div>

          {/* SOCIALS */}

          <div className="flex items-center gap-3">

            <a
              href="https://github.com/dharamveersahu18"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                text-gray-600
                transition
                duration-300
                hover:-translate-y-1
                hover:border-green-500
                hover:text-green-600
                dark:border-white/10
                dark:text-gray-400
                dark:hover:border-lime-400
                dark:hover:text-lime-400
              "
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/dharamveer-sahu/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                text-gray-600
                transition
                duration-300
                hover:-translate-y-1
                hover:border-green-500
                hover:text-green-600
                dark:border-white/10
                dark:text-gray-400
                dark:hover:border-lime-400
                dark:hover:text-lime-400
              "
            >
              <FaLinkedin size={17} />
            </a>

            <a
              href="mailto:dharamveersahu18@gmail.com"
              aria-label="Email"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                text-gray-600
                transition
                duration-300
                hover:-translate-y-1
                hover:border-green-500
                hover:text-green-600
                dark:border-white/10
                dark:text-gray-400
                dark:hover:border-lime-400
                dark:hover:text-lime-400
              "
            >
              <Mail size={17} />
            </a>

          </div>

        </div>

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <div
          className="
            mt-20
            flex
            flex-col
            gap-5
            border-t
            border-gray-300/70
            pt-6
            text-[10px]
            uppercase
            tracking-[0.15em]
            text-gray-400
            dark:border-white/10
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p>
            © 2026 Dharamveer Sahu
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              group
              flex
              items-center
              gap-2
              transition
              hover:text-green-600
              dark:hover:text-lime-400
            "
          >
            Back to top

            <ArrowUp
              size={13}
              className="
                transition
                group-hover:-translate-y-1
              "
            />
          </button>

        </div>

      </div>
    </section>
  );
}

export default Contact;