"use client";

import { FormEvent, useState } from "react";

export default function EnquiryForm({
  title = "Tell us about your child",
  showClass = true,
}: {
  title?: string;
  showClass?: boolean;
}) {
  const [success, setSuccess] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "Parent").trim();
    setSuccess(
      `Thank you, ${name}. Please call +91 81999 98813 or email megamindschooltosham@gmail.com to complete your enquiry.`
    );
    e.currentTarget.reset();
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <p className="section-label">Enquiry</p>
      <h2 className="section-title" style={{ maxWidth: "none", fontSize: "1.75rem" }}>
        {title}
      </h2>
      <div className="field">
        <label htmlFor="name">Parent / Guardian name</label>
        <input id="name" name="name" type="text" required placeholder="Your full name" />
      </div>
      <div className="field">
        <label htmlFor="phone">Mobile number</label>
        <input id="phone" name="phone" type="tel" required placeholder="10-digit mobile" />
      </div>
      {showClass && (
        <div className="field">
          <label htmlFor="class">Class seeking admission</label>
          <select id="class" name="class" required defaultValue="">
            <option value="" disabled>
              Select class
            </option>
            <option>Nursery / KG</option>
            <option>Class I – V</option>
            <option>Class VI – VIII</option>
            <option>Class IX – X</option>
            <option>Class XI – XII (Science)</option>
            <option>Class XI – XII (Commerce)</option>
          </select>
        </div>
      )}
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Any questions?" />
      </div>
      <button className="btn btn-red" type="submit" style={{ width: "100%" }}>
        Submit enquiry
      </button>
      {success && <p className="form-success">{success}</p>}
    </form>
  );
}
