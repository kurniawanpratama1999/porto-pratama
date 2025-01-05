import React from "react";

const Comp_Note = () => {
  return (
    <div className="text-gray-300 text-sm">
      <p>Note :</p>
      <ul className="list-disc ml-5">
        <li>Pesan ini akan dikirim ke Whatsapp Author.</li>
        <li>
          Pastikan anda memiliki Aplikasi Whatsapp atau sudah Masuk ke Web
          Whatsapp.
        </li>
        <li>
          Untuk mengirim pesan secara email, anda dapat mengirim pada email
          berikut: kurama.career@gmail.com
        </li>
        <li>
          Saya akan membalasnya melalui Whatsapp atau Email yang anda cantumkan.
        </li>
      </ul>
    </div>
  );
};

export default Comp_Note;
