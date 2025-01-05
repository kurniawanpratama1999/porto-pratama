import Container from "../../Components/Container";
import Input from "../../Components/Input";
import Textarea from "../../Components/Textarea";

const Page_Contact = () => {
  return (
    <Container className="px-[10%]">
      <h2 className="mb-5 text-center text-2xl text-gray-300">
        Beri Saya Pesan
      </h2>
      <form className="grid grid-cols-2 gap-4">
        <Input htmlFor="display-name" label="Your Name" type="text" cLabel="max-sm:col-span-2"/>
        <Input htmlFor="email" label="Email" type="email" cLabel="max-sm:col-span-2"/>
        <Input
          htmlFor="purpose"
          label="purpose"
          type="text"
          cLabel="col-span-2"
        />
        <Textarea htmlFor="message" label="Message" cLabel="col-span-2" />
        <div className="flex gap-3 justify-center col-span-2">
          <button className="px-2 py-1 bg-gray-400 rounded-md">
            Mulai Ulang
          </button>
          <button className="px-2 py-1 bg-emerald-400 rounded-md">
            Kirim Pesan
          </button>
        </div>
      </form>
      <div className="text-gray-300 text-sm">
        <p>Note :</p>
        <ul className="list-disc list-inside">
          <li>Pesan ini akan dikirim ke Whatsapp Author.</li>
          <li>
            Pastikan anda memiliki Aplikasi Whatsapp atau sudah Masuk ke Web
            Whatsapp.
          </li>
          <li>
            Untuk mengirim pesan secara email, anda dapat mengirim pada email
            berikut: kurama.career@gmail.com
          </li>
          <li>Saya akan membalasnya melalui Whatsapp atau Email yang anda cantumkan.</li>
        </ul>
      </div>
    </Container>
  );
};

export default Page_Contact;
