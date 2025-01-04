import { HiAcademicCap } from "react-icons/hi";

const Comp_Education = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-5">
      <div className="col-span-2 flex items-center justify-center gap-2 text-3xl">
        <HiAcademicCap />
        <span>Education</span>
        <HiAcademicCap />
      </div>
      <div className="p-3 bg-zinc-800 rounded-md">
        <p className="flex justify-between gap-10 text-xl font-bold">
          <span>Universitas Pamulang</span>
          <span>2016 s.d 2020</span>
        </p>
        <p className="flex justify-between gap-10 text-lg font-semibold border-b border-white/50 mb-1 pb-1">
          <span>S1 Manajemen</span>
          <span>IPK 3.42</span>
        </p>
        <ul className="list-disc ml-5">
          <li>
            Meneliti keuangan PT Ace Hardware Indonesia berdasarkan nilai Debt
            to Equity Ratio dan Price Earning Ratio.
          </li>
          <li>Selalu aktif dalam kegiatan presentasi.</li>
          <li>Tidak aktif dalam kegiatan berorganinasi.</li>
        </ul>
      </div>
      <div className="p-3 bg-zinc-800 rounded-md">
        <p className="flex justify-between gap-10 text-xl font-bold">
          <span>SMKN 59 Jakarta</span>
          <span>2013 s.d 2016</span>
        </p>
        <p className="flex justify-between gap-10 text-lg font-semibold border-b border-white/50 mb-1 pb-1">
          <span>Pemasaran</span>
          <span>NA 7.42</span>
        </p>
        <ul className="list-disc ml-5">
          <li>Menjadi ketua dalam kegiatan Bazar Sekolah.</li>
          <li>Mempelajari dasar dasar ekonomi dan pemasaran.</li>
          <li>Mempelajari sedikit tentang akuntansi.</li>
        </ul>
      </div>
    </div>
  );
};

export default Comp_Education;
