import React from "react";
import Container from "../../Components/Container";
import { BiCalendar, BiMap, BiUser } from "react-icons/bi";
import { TbGenderBigender } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Comp_Image from "./Comp_Image";
import Comp_Profile from "./Comp_Profile";
import Comp_Message from "./Comp_Message";
import { Comp_List, Comp_Menu } from "./Comp_List";
import Comp_Education from "./Comp_Education";
import Comp_Experience from "./Comp_Experience";
import Comp_Skills from "./Comp_Skills";

const Page_About = () => {
  const profileCollection = [
    { icon: BiUser, detail: "Kurniawan Pratama" },
    { icon: TbGenderBigender, detail: "Laki-laki" },
    { icon: BiCalendar, detail: "Nganjuk, 07 Januari 1999" },
    { icon: BiMap, detail: "Kebayoran Lama, Jakarta Selatan" },
  ];

  return (
    <Container className="px-[10%] text-gray-300 gap-10">
      <div className="grid grid-cols-[.3fr_auto] justify-center items-center gap-20">
        <Comp_Image />
        <div className="flex flex-col gap-4">
          {profileCollection.map((collect) => (
            <Comp_Profile ReactIcon={collect.icon} detail={collect.detail} />
          ))}
        </div>
      </div>
      <Comp_Message message="( Still Looking For a Job )" />
      {/* 
      <div className="w-full flex gap-5">
        <div className="row-card basis-full flex flex-col gap-5">
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-center w-full text-3xl gap-2 py-2 bg-gray-600">
              <HiAcademicCap />
              <h2>Education</h2>
            </div>
            <Comp_Menu>
              <Comp_List>
                <div>
                  <h3>Universitas Pamulang | IPK 3.42</h3>
                  <p>S1 Manajemen (2016 -- 2020)</p>
                </div>
                <Comp_Menu list="disc">
                  <li>
                    Meneliti keuangan PT Ace Hardware Indonesia berdasarkan
                    nilai Debt to Equity Ratio dan Price Earning Ratio.
                  </li>
                  <li>Selalu aktif dalam kegiatan presentasi.</li>
                  <li>Tidak aktif dalam kegiatan berorganinasi.</li>
                </Comp_Menu>
              </Comp_List>
              <Comp_List>
                <div>
                  <h3 className="relative">SMKN 59 | Nilai 7.3</h3>
                  <p>Pemasaran (2013 -- 2016)</p>
                </div>
                <ul className="list-disc ml-4">
                  <li>Menjadi ketua dalam kegiatan Bazar Sekolah.</li>
                  <li>Mempelajari dasar dasar ekonomi dan pemasaran.</li>
                  <li>Mempelajari sedikit tentang akuntansi.</li>
                </ul>
              </Comp_List>
            </Comp_Menu>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex items-center justify-center w-full text-3xl gap-2 py-2 bg-gray-600">
              <FaRunning />
              <h2>Daily Acivities</h2>
            </div>
            <ul className="list-decimal">
              <li className="mt-2 ml-10">Sholat Subuh (05:00).</li>
              <li className="mt-2 ml-10">Persiapan ngojek (05:30).</li>
              <li className="mt-2 ml-10">Berangkat ngojek (06:30).</li>
              <li className="mt-2 ml-10">ISOMA (12:00).</li>
              <li className="mt-2 ml-10">Lanjut ngojek (13:00).</li>
              <li className="mt-2 ml-10">sholat Ashar (16:00).</li>
              <li className="mt-2 ml-10">Pulang (17:30).</li>
              <li className="mt-2 ml-10">Ngoding (18:00).</li>
              <li className="mt-2 ml-10">Sholat Magrib (18:30).</li>
              <li className="mt-2 ml-10">Selesai ngoding (23:30).</li>
              <li className="mt-2 ml-10">Sholat Isya (23:40).</li>
              <li className="mt-2 ml-10">Tidur (00:00).</li>
            </ul>
          </div>
        </div>

        <div className="row-card basis-full flex flex-col gap-5">
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-center w-full text-3xl gap-2 py-2 bg-gray-600">
              <BsPeopleFill />
              <h2>Experience</h2>
            </div>
            <ul className="list-decimal">
              <li className="min-h-10 mt-2 ml-10">
                <div>
                  <h3 className="">Astro Delivery | Cab. Kebayoran</h3>
                  <p>Driver (2021 -- 2022)</p>
                </div>
                <ul className="list-disc ml-4">
                  <li>
                    Bertanggung jawab sebagai driver mengantar barang dengan
                    cepat dan selamat.
                  </li>
                  <li>
                    Membantu karyawan gudang dalam kegiatan bongkar muat barang.
                  </li>
                  <li>Menjaga kebersihan area hub.</li>
                  <li>Memberikan pelayanan ekstra untuk semua pelanggan.</li>
                  <li>Memberikan solusi terhadap pelanggan yang komplain.</li>
                </ul>
              </li>
              <li className="min-h-10 mt-2 ml-10">
                <div>
                  <h3 className="relative">SDIT Al-Hikmah | Cilandak</h3>
                  <p>Operator Sekolah (2019 -- 2020)</p>
                </div>
                <ul className="list-disc ml-4">
                  <li>
                    Meng-input data sekolah seperti jumlah peralatan dan
                    perlengkapan sekolah, siswa, dan guru
                  </li>
                  <li>Meng-input data pribadi sekolah, siswa, dan guru.</li>
                  <li>Memperbaharui data warga sekolah.</li>
                  <li>Membuat aplikasi penggajian berbasis excel.</li>
                  <li>Menjadi Proktor dan Teknisi dikegiatan ANBK.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-center w-full text-3xl gap-2 py-2 bg-gray-600">
              <MdWork />
              <h2>Skills</h2>
            </div>
            <ul className="list-decimal">
              <li className="min-h-10 mt-2 ml-10">
                <h3 className="">Soft Skills</h3>
                <ul>
                  <li>+ Public speaking.</li>
                  <li>+ Sosialisasi.</li>
                  <li>+ Kerjasama tim.</li>
                  <li>+ Jujur, Adil, dan Bertanggung Jawab.</li>
                  <li>+ Berpikir kritis.</li>
                  <li>- Penampilan</li>
                  <li>- Mengambil keputusan</li>
                  <li>- Perencanaan</li>
                </ul>
              </li>
              <li className="min-h-10 mt-2 ml-10">
                <h3 className="">Hard Skills</h3>
                <ul className="list-disc ml-4">
                  <li>Javascript.</li>
                  <li>React Javascript.</li>
                  <li>SQL Query.</li>
                  <li>Database MySQL.</li>
                  <li>HTML.</li>
                  <li>CSS, Tailwind.</li>
                  <li>Rumus-rumus Microsoft Excel.</li>
                  <li>VBA Micorosoft Excel.</li>
                </ul>
              </li>
              <li className="min-h-10 mt-2 ml-10">
                <h3 className="">Knowledge</h3>
                <ul className="list-disc ml-4">
                  <li>10% Ekonomi Mikro</li>
                  <li>25% Pemasaran</li>
                  <li>20% Mengajar</li>
                  <li>10% Kepribadian Manusia</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <Comp_Education />
      <Comp_Experience />
      <Comp_Skills />
    </Container>
  );
};

export default Page_About;
