import { useEffect, useState } from "react";
import Container from "../../Components/Container";
import Input from "../../Components/Input";
import Textarea from "../../Components/Textarea";
import Comp_Note from "./Comp_Note";
import Comp_Action from "./Comp_Action";

const Page_Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendMessage = encodeURIComponent(
      `nama: ${name}\nemail: ${email}\ntujuan: ${purpose}\npesan: ${message}`
    );

    window.location.href = `https://wa.me/6283827221096?text=${sendMessage}`;
  };

  return (
    <Container className="px-[10%]">
      <h2 className="mb-5 text-center text-2xl text-gray-300">
        Beri Saya Pesan
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <Input
          htmlFor="display-name"
          label="Your Name"
          type="text"
          cLabel="max-sm:col-span-2"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
        <Input
          htmlFor="email"
          label="Email"
          type="email"
          cLabel="max-sm:col-span-2"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <Input
          htmlFor="purpose"
          label="purpose"
          type="text"
          cLabel="col-span-2"
          value={purpose}
          onChange={({ target }) => setPurpose(target.value)}
          required
        />
        <Textarea
          htmlFor="message"
          label="Message"
          cLabel="col-span-2"
          state={message}
          setState={setMessage}
          required
        />
        <Comp_Action handleSubmit={handleSubmit} />
      </form>
      <Comp_Note />
    </Container>
  );
};

export default Page_Contact;
