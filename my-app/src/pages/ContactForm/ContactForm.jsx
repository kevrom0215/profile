import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="form">
      <div className="gridly">
      <h2 className="description"> Message Me</h2>
          <form
            action="https://formspree.io/f/myzeyjea"
            method="POST"
          >
            <div>
              <label className="flex mb-4">
                <div>
                  <span className="form-label">Email:</span>
                </div>
                <input
                  type="email"
                  name="email"
                  className="inputEmail"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block mb-4">
                <div>
                  <span className="form-label">Message:</span>
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
              Submit&nbsp;&nbsp;<i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </form>
        
      </div>
    </div>
  );
}
