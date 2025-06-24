export const navItems = [
  { name: "Tentang", link: "#about" },
  { name: "Projek", link: "#projects" },
  { name: "Keahlian", link: "#skills" },
  { name: "Pengalaman", link: "#experiences" },
  { name: "Kontak", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Fokus pada pengembangan web modern dan responsif.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Selalu belajar teknologi baru dan mengikuti tren.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Saya terus berusaha meningkatkannya.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Antusias menciptakan solusi digital yang bermanfaat.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Menulis kode bersih, rapi, dan mudah dipelihara.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  // {
  //   id: 6,
  //   title: "Do you want to start a project together?",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  //   img: "",
  //   spareImg: "",
  // },
];

export const projects = [
  {
    id: 1,
    title: "Clone Disnep Website",
    des: "Aplikasi berbasis React yang menggunakan Vite untuk kecepatan build dan HMR Aplikasi ini menampilkan data dari The Movie Database (TMDB) menggunakan API publik mereka.",
    img: "/cdw.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/three.svg", "/vite.svg"],
    link: "https://clone-disnepweb.vercel.app/",
  },
  {
    id: 2,
    title: "iClone Apple Web",
    des: "Tiruan situs web iPhone 15 Pro Apple yang menggunakan React.js dan TailwindCSS. Situs ini menyoroti penggunaan GSAP (Greensock Animations) dan Three.js yang efektif untuk menampilkan model iPhone 15 Pro dalam berbagai warna dan bentuk.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/three.svg", "/vite.svg"],
    link: "https://apple-app-khaki.vercel.app/",
  },
  {
    id: 3,
    title: "SIGMATOP",
    des: "e-commerce untuk penjualan pakaian menggunakan Next.js dan Golang. Proyek ini bertujuan untuk menyediakan platform yang user-friendly bagi pelanggan untuk menjelajahi dan membeli berbagai produk pakaian dengan mudah.",
    img: "/sigma.png",
    iconLists: ["/next.svg", "/tail.svg", "/go.svg", "/mysql.svg", "/fire.svg"],
    link: "https://sigma.sabar.my.id/",
  },
  {
    id: 4,
    title: "Sistem Informasi Administrasi Keuangan",
    des: "sistem pengelolaan administrasi keuangan menggunakan Next.js dan Golang yang membantu sekolah dalam mengelola data keuangan secara real-time, tepat, dan akurat.",
    img: "/simak.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/go.svg",
      "/postgres.svg",
      "/cloudinary.svg",
    ],
    link: "https://front-end-simak.vercel.app/login",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "Cloudinary",
    img: "/cloudinary.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Go",
    img: "/go.svg",
    nameImg: "/goName.svg",
  },
  {
    id: 3,
    name: "ReactJS",
    img: "/re.svg",
    nameImg: "/reactName.svg",
  },
  {
    id: 4,
    name: "NextJS",
    img: "/next.svg",
    nameImg: "/nextName.svg",
  },
  {
    id: 5,
    name: "Vue JS",
    img: "/vue.svg",
    nameImg: "/vueName.svg",
  },
  {
    id: 6,
    name: "Laravel",
    img: "/larav.svg",
    nameImg: "/nextName.svg",
  },
  {
    id: 7,
    name: "MySQL",
    img: "/mysql.svg",
    nameImg: "/mySQLName.svg",
  },
  {
    id: 8,
    name: "PostgreSQL",
    img: "/postgres.svg",
    nameImg: "/postgresName.svg",
  },
  {
    id: 9,
    name: "Github.",
    img: "/git.svg",
    nameImg: "/githubName.svg",
  },
  {
    id: 10,
    name: "Firebase.",
    img: "/fire.svg",
    nameImg: "/firebaseName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer (Magang - WIT.ID)",
    desc: "Mengembangkan sistem inventaris dengan teknologi Next.js dan Java Springboot di WIT Indonesia.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Fullstack Developer - Sanbercode",
    desc: "Mengikuti pelatihan Fullstack Developer dan mengembangkan website e-commerce SIGMATOP untuk penjualan pakaian dengan teknologi Golang dan Next.js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Backend Engineering - Ruang Guru",
    desc: "Memperdalam pengembangan backend dengan Golang, termasuk sistem terdistribusi, gRPC, JWT, dan enkripsi data dan berhasil mengembangkan website Task Tracker untuk mengelola tugas mahasiswa.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/denzalamsyah",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rizwan-alamsyah/",
  },
  {
    id: 3,
    img: "/twit.svg",
  },
  {
    id: 4,
    img: "/insta.svg",
  },
];
