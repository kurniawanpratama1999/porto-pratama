import { BsPeopleFill } from "react-icons/bs";

const Comp_Experience = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-5">
      <div className="col-span-2 flex items-center justify-center gap-2 text-3xl">
        <BsPeopleFill />
        <span>Experience</span>
        <BsPeopleFill />
      </div>
      <div className="p-3 bg-zinc-800 rounded-md">
        <p className="flex justify-between gap-10 text-xl font-bold">
          <span>Astro Shopping Delivery</span>
          <span>2021 s.d 2022</span>
        </p>
        <p className="flex justify-between gap-10 text-lg font-semibold border-b border-white/50 mb-1 pb-1">
          <span>Driver</span>
        </p>
        <ul className="list-disc ml-5">
          <li>
            Bertanggung jawab sebagai driver mengantar barang dengan cepat dan
            selamat.
          </li>
          <li>Membantu karyawan gudang dalam kegiatan bongkar muat barang.</li>
          <li>Menjaga kebersihan area hub.</li>
          <li>Memberikan pelayanan ekstra untuk semua pelanggan.</li>
          <li>Memberikan solusi terhadap pelanggan yang komplain.</li>
        </ul>
      </div>
      <div className="p-3 bg-zinc-800 rounded-md">
        <p className="flex justify-between gap-10 text-xl font-bold">
          <span>SDIT Al-Hikmah</span>
          <span>2019 s.d 2020</span>
        </p>
        <p className="flex justify-between gap-10 text-lg font-semibold border-b border-white/50 mb-1 pb-1">
          <span>Operator Sekolah</span>
        </p>
        <ul className="list-disc ml-5">
          <li>
            Meng-input data sekolah seperti jumlah peralatan dan perlengkapan
            sekolah, siswa, dan guru
          </li>
          <li>Meng-input data pribadi sekolah, siswa, dan guru.</li>
          <li>Memperbaharui data warga sekolah.</li>
          <li>Membuat aplikasi penggajian berbasis excel.</li>
          <li>Menjadi Proktor dan Teknisi dikegiatan ANBK.</li>
        </ul>
      </div>
    </div>
  );
};

export default Comp_Experience;
