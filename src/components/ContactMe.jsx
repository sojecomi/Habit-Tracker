
export const ContactMe = () => {

    return (
         <div className="text-center p-8">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p className="mt-4">Feel free to reach out for collaborations or just a friendly hello!</p>

      <form className="mt-8 max-w-md mx-auto text-left space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 "
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            rows="4"
            placeholder="Your message"
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 "
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
        >
          Send Message
        </button>
      </form>
    </div>
    );

}