import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-[#f4f7f0]
        px-6 py-24
        text-[#172019]
        transition-colors duration-500

        dark:bg-[#0b0d10]
        dark:text-white
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          absolute right-[-150px] top-1/2
          h-[400px] w-[400px]
          -translate-y-1/2
          rounded-full
          bg-green-400/10
          blur-[120px]

          dark:bg-lime-400/5
        "
      />

      <div className="mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}

        <div className="mb-16">

          <p
            className="
              mb-3 text-sm font-medium
              text-green-600

              dark:text-lime-400
            "
          >
            Get In Touch
          </p>

          <h2
            className="
              max-w-3xl
              text-4xl font-bold
              tracking-tight
              text-[#172019]
              sm:text-5xl
              lg:text-6xl

              dark:text-white
            "
          >
            Let's build something{" "}

            <span
              className="
                text-green-600

                dark:text-lime-400
              "
            >
              amazing
            </span>{" "}

            together.
          </h2>

        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-16 lg:grid-cols-2">

          {/* ================= LEFT ================= */}

          <div className="flex flex-col justify-between">

            <div>

              <p
                className="
                  mb-5
                  text-gray-600

                  dark:text-gray-400
                "
              >
                Have an idea, opportunity, feedback or just
                want to say hello?
              </p>

              <h3
                className="
                  max-w-xl
                  text-4xl font-bold
                  leading-tight
                  text-[#172019]
                  sm:text-5xl

                  dark:text-white
                "
              >
                Do you have an idea,
                <br />

                <span
                  className="
                    text-gray-500

                    dark:text-gray-400
                  "
                >
                  offer or doubt
                </span>

                <br />

                in your mind?
              </h3>

            </div>

            {/* ================= CONTACT INFORMATION ================= */}

            <div className="mt-16 space-y-7">

              {/* Email */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    bg-green-500/10
                    text-green-600

                    dark:bg-lime-400/10
                    dark:text-lime-400
                  "
                >
                  <Mail size={20} />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      text-gray-500
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      text-sm
                      text-gray-700
                      sm:text-base

                      dark:text-gray-300
                    "
                  >
                    dharamveersahu18@gmail.com
                  </p>

                </div>

              </div>

              {/* Phone */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    bg-green-500/10
                    text-green-600

                    dark:bg-lime-400/10
                    dark:text-lime-400
                  "
                >
                  <Phone size={20} />
                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    Phone
                  </p>

                  <p
                    className="
                      text-sm
                      text-gray-700
                      sm:text-base

                      dark:text-gray-300
                    "
                  >
                    Available on request
                  </p>

                </div>

              </div>

              {/* Location */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    bg-green-500/10
                    text-green-600

                    dark:bg-lime-400/10
                    dark:text-lime-400
                  "
                >
                  <MapPin size={20} />
                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    Location
                  </p>

                  <p
                    className="
                      text-sm
                      text-gray-700
                      sm:text-base

                      dark:text-gray-300
                    "
                  >
                    India
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}

          <div
            className="
              rounded-3xl
              border
              border-gray-200
              bg-white/70
              p-6
              shadow-xl
              backdrop-blur-md

              sm:p-8

              dark:border-white/10
              dark:bg-[#111418]
              dark:shadow-none
            "
          >

            <form className="space-y-6">

              {/* ================= NAME + EMAIL ================= */}

              <div className="grid gap-5 sm:grid-cols-2">

                {/* Name */}

                <div>

                  <label
                    htmlFor="name"
                    className="
                      mb-2 block
                      text-sm font-medium
                      text-gray-700

                      dark:text-gray-300
                    "
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-[#f8faf5]
                      px-4 py-3
                      text-gray-900
                      outline-none

                      placeholder:text-gray-400

                      transition

                      focus:border-green-500
                      focus:ring-1
                      focus:ring-green-500

                      dark:border-white/15
                      dark:bg-[#0b0d10]
                      dark:text-white
                      dark:placeholder:text-gray-600

                      dark:focus:border-lime-400
                      dark:focus:ring-lime-400
                    "
                  />

                </div>

                {/* Email */}

                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-2 block
                      text-sm font-medium
                      text-gray-700

                      dark:text-gray-300
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-[#f8faf5]
                      px-4 py-3
                      text-gray-900
                      outline-none

                      placeholder:text-gray-400

                      transition

                      focus:border-green-500
                      focus:ring-1
                      focus:ring-green-500

                      dark:border-white/15
                      dark:bg-[#0b0d10]
                      dark:text-white
                      dark:placeholder:text-gray-600

                      dark:focus:border-lime-400
                      dark:focus:ring-lime-400
                    "
                  />

                </div>

              </div>

              {/* ================= TYPE + MOBILE ================= */}

              <div className="grid gap-5 sm:grid-cols-2">

                {/* Type */}

                <div>

                  <label
                    htmlFor="type"
                    className="
                      mb-2 block
                      text-sm font-medium
                      text-gray-700

                      dark:text-gray-300
                    "
                  >
                    Type
                  </label>

                  <select
                    id="type"
                    defaultValue=""
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-[#f8faf5]
                      px-4 py-3
                      text-gray-700
                      outline-none
                      transition

                      focus:border-green-500
                      focus:ring-1
                      focus:ring-green-500

                      dark:border-white/15
                      dark:bg-[#0b0d10]
                      dark:text-gray-300

                      dark:focus:border-lime-400
                      dark:focus:ring-lime-400
                    "
                  >
                    <option value="" disabled>
                      Select type
                    </option>

                    <option>Project</option>
                    <option>Job Opportunity</option>
                    <option>Collaboration</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>

                </div>

                {/* Mobile */}

                <div>

                  <label
                    htmlFor="mobile"
                    className="
                      mb-2 block
                      text-sm font-medium
                      text-gray-700

                      dark:text-gray-300
                    "
                  >
                    Mobile
                  </label>

                  <input
                    id="mobile"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-[#f8faf5]
                      px-4 py-3
                      text-gray-900
                      outline-none

                      placeholder:text-gray-400

                      transition

                      focus:border-green-500
                      focus:ring-1
                      focus:ring-green-500

                      dark:border-white/15
                      dark:bg-[#0b0d10]
                      dark:text-white
                      dark:placeholder:text-gray-600

                      dark:focus:border-lime-400
                      dark:focus:ring-lime-400
                    "
                  />

                </div>

              </div>

              {/* ================= MESSAGE ================= */}

              <div>

                <label
                  htmlFor="message"
                  className="
                    mb-2 block
                    text-sm font-medium
                    text-gray-700

                    dark:text-gray-300
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="7"
                  placeholder="Tell me about your idea..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-gray-200
                    bg-[#f8faf5]
                    px-4 py-3
                    text-gray-900
                    outline-none

                    placeholder:text-gray-400

                    transition

                    focus:border-green-500
                    focus:ring-1
                    focus:ring-green-500

                    dark:border-white/15
                    dark:bg-[#0b0d10]
                    dark:text-white
                    dark:placeholder:text-gray-600

                    dark:focus:border-lime-400
                    dark:focus:ring-lime-400
                  "
                />

              </div>

              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                className="
                  group
                  flex items-center gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-lime-400
                  to-green-500
                  px-7 py-3
                  font-semibold
                  text-black

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:shadow-lg
                  hover:shadow-green-500/20
                "
              >
                Send Message

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;