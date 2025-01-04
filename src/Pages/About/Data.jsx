import { HiAcademicCap } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
import { BiCalendar, BiMap, BiUser } from "react-icons/bi";
import { TbGenderBigender } from "react-icons/tb";

export const dataAboutMe = {
  education: {
    headType: "double",
    logoIcon: HiAcademicCap,
    logoTitle: "Education",
    headAndList: [
      {
        headData: {
          company: "Universitas Pamulang",
          year: "2016 s.d 2020",
          workAs: "S1 Manajemen",
          etc: "IPK 3.42",
        },
        listData: [
          "Meneliti keuangan PT Ace Hardware Indonesia berdasarkan nilai Debt to Equity Ratio dan Price Earning Ratio.",
          "Selalu aktif dalam kegiatan presentasi.",
          "Tidak aktif dalam kegiatan berorganinasi.",
        ],
      },
      {
        headData: {
          company: "SMKN 59 Jakarta",
          year: "2013 s.d 2016",
          workAs: "Pemasaran",
          etc: "NA 7.42",
        },
        listData: [
          "Menjadi ketua dalam kegiatan Bazar Sekolah.",
          "Mempelajari dasar dasar ekonomi dan pemasaran.",
          "Mempelajari sedikit tentang akuntansi.",
        ],
      },
    ],
  },
  experience: {
    headType: "double",
    logoIcon: BsPeopleFill,
    logoTitle: "Experience",
    headAndList: [
      {
        headData: {
          company: "Astro Shopping Delivery",
          year: "2021 s.d 2022",
          workAs: "Driver",
          etc: false,
        },
        listData: [
          "Bertanggung jawab sebagai driver mengantar barang dengan cepat dan selamat.",
          "Membantu karyawan gudang dalam kegiatan bongkar muat barang.",
          "Menjaga kebersihan area hub.",
          "Memberikan pelayanan ekstra untuk semua pelanggan.",
          "Memberikan solusi terhadap pelanggan yang komplain.",
        ],
      },
      {
        headData: {
          company: "SDIT Al-Hikmah",
          year: "2019 s.d 2020",
          workAs: "Operator Sekolah",
          etc: false,
        },
        listData: [
          "Meng-input data sekolah seperti jumlah peralatan dan perlengkapan sekolah, siswa, dan guru",
          "Meng-input data pribadi sekolah, siswa, dan guru.",
          "Memperbaharui data warga sekolah.",
          "Membuat aplikasi penggajian berbasis excel.",
          "Menjadi Proktor dan Teknisi dikegiatan ANBK.",
        ],
      },
    ],
  },
  skills: {
    headType: "single",
    logoIcon: FaRunning,
    logoTitle: "Skills",
    headAndList: [
      {
        headData: {
          company: "Soft Skill",
        },
        listData: [
          "Public speaking.",
          "Sosialisasi.",
          "Kerjasama tim.",
          "Jujur, Adil, dan Bertanggung Jawab.",
          "Berpikir kritis.",
        ],
      },
      {
        headData: {
          company: "Hard Skill",
        },
        listData: [
          "Javascript.",
          "React Javascript.",
          "SQL Query.",
          "Database MySQL.",
          "HTML.",
          "CSS, Tailwind.",
          "Rumus-rumus Microsoft Excel.",
          "VBA Micorosoft Excel.",
        ],
      },
    ],
  },
};

export const profileCollection = [
  { icon: BiUser, detail: "Kurniawan Pratama" },
  { icon: TbGenderBigender, detail: "Laki-laki" },
  { icon: BiCalendar, detail: "Nganjuk, 07 Januari 1999" },
  { icon: BiMap, detail: "Kebayoran Lama, Jakarta Selatan" },
];
