import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="form">
      <div className="gridly">

      <h2 className="description"> Contact Me</h2>
          <form
            action="https://formspree.io/f/myzeyjea"
            method="POST"
          >
            <div>
              <label className="flex mb-4">
                <div>
                  <span className="text-gray-600">Email:</span>
                </div>
                <input
                  type="email"
                  name="email"
                  className="inputArea"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block mb-4">
                <div>
                  <span className="text-gray-600">Message:</span>
                </div>
                <textarea
                  name="message"
                  className="inputArea"
                  required
                ></textarea>
              </label>
            </div>
            <button
              type="submit"
              className="sendButton color-cycle"
            >
              Send
            </button>
          </form>
        
      </div>
    </div>
  );
}
