import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_m0rzmgz",
        "template_twbjm6j",   
        {
          nom:     form.nom,
          prenom:  form.prenom,
          email:   form.email,
          message: form.message,
        },
        "mhWmPl_Ew5p5e9cLe"    
      );
      setStatus("success");
      setForm({ nom: "", prenom: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <h2 className="mb-4 text-white">Contact</h2>

        <form onSubmit={handleSubmit}>  {/* ← form avec onSubmit */}
          <div className="mb-3">
            <label htmlFor="inputNom" className="form-label text-white">Nom</label>
            <input
              type="text"
              className="form-control"
              id="inputNom"
              name="nom"                 
              value={form.nom}           
              onChange={handleChange}     
              placeholder="Doe"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputPrenom" className="form-label text-white">Prénom</label>
            <input
              type="text"
              className="form-control"
              id="inputPrenom"
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              placeholder="John"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label text-white">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputMessage" className="form-label text-white">Message</label>
            <textarea
              className="form-control"
              id="inputMessage"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          {/* Feedback utilisateur */}
          {status === "success" && (
            <p className="text-success mb-3"> Message envoyé avec succès !</p>
          )}
          {status === "error" && (
            <p className="text-danger mb-3"> Erreur lors de l'envoi. Réessaie.</p>
          )}

          <button
            type="submit"
            className="btn btn-danger w-100"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  );
}