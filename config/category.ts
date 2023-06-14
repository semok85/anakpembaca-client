interface Category {
  category: string
  description: string
}
interface CategoryCheckList {
  id: string
  label: string
}

const bookCategories: {
  [char: string]: Category[]
} = {
  "Kategory umur": [
    {
      category: "0 - 1 tahun",
      description:
        "Buku kartun sederhana dengan gambar berwarna-warni dan bentuk yang menarik, serta buku dengan tekstur yang berbeda-beda, seperti buku tebal atau dengan permukaan yang halus. Jumlah kata:10-20 kata",
    },
    {
      category: "1 - 3 tahun",
      description:
        "Buku dengan gambar-gambar yang lebih detail, dengan huruf dan angka yang mudah dibaca dan diingat, serta cerita yang sederhana dan singkat. Jumlah kata:20-50 kata",
    },
    {
      category: "4 - 6 tahun",
      description:
        "Buku dengan cerita yang lebih panjang, gambar-gambar yang lebih kompleks, serta cerita yang mengajarkan moral dan nilai-nilai positif. Jumlah kata:50-200 kata",
    },
    {
      category: "7 - 9 tahun",
      description:
        "Buku-buku cerita pendek dengan karakter yang menarik dan kisah yang menyenangkan, serta buku-buku fakta yang mengajarkan tentang dunia, lingkungan, dan hal-hal baru. Jumlah kata:500-1000",
    },
    {
      category: "10 - 12 tahun",
      description:
        "Buku-buku fiksi dan nonfiksi dengan tema yang lebih kompleks, serta buku-buku yang mengajarkan tentang sejarah, budaya, dan sains. Jumlah kata: 1.000-10.000 kata",
    },
    {
      category: "13 - 15 tahun",
      description:
        "Buku-buku yang membahas topik-topik remaja seperti persahabatan, cinta, dan kehidupan sosial, serta buku-buku yang memberikan informasi tentang karir dan masa depan. Jumlah kata:10.000-50.000 kata",
    },
  ],
  "Kategori genre": [
    {
      category: "Cerita bergambar",
      description:
        "Buku-buku dengan gambar-gambar cerita yang cerah dan menarik, umumnya ditujukan untuk anak-anak pra-sekolah dan usia dini.",
    },
    {
      category: "Fiksi",
      description:
        "Buku-buku cerita untuk anak-anak dengan karakter yang menarik dan cerita yang menyenangkan, yang mengajarkan moral atau pesan positif.",
    },
    {
      category: "Aktivitas",
      description:
        "Buku-buku yang mencakup teka-teki, gambar untuk diwarnai, dan latihan yang dirancang untuk membantu anak-anak belajar dan mengasah keterampilan.",
    },
    {
      category: "Fiksi ilmiah",
      description:
        "Buku-buku cerita anak-anak yang mengeksplorasi ilmu pengetahuan dan teknologi, seringkali dengan alur cerita yang sederhana dan mudah dimengerti.",
    },
    {
      category: "Hewan",
      description:
        "Buku-buku tentang hewan yang mengajarkan anak-anak tentang spesies hewan, lingkungan tempat tinggal, perilaku, dan habitat.",
    },
    {
      category: "Sejarah",
      description:
        "Buku-buku tentang peristiwa sejarah, tokoh terkenal, dan budaya dari masa lalu, yang ditulis untuk membantu anak-anak belajar tentang dunia dan masyarakat.",
    },
    {
      category: "Musik",
      description:
        "Buku-buku tentang musik dan instrument yang ditujukan untuk membantu anak-anak belajar dan mengembangkan kreativitas mereka dalam musik.",
    },
    {
      category: "Seni",
      description:
        "Buku-buku yang membahas tentang seni rupa, tari, atau teater, dengan ilustrasi dan gambar yang menarik, dan latihan sederhana untuk mengasah kreativitas anak.",
    },
    {
      category: "Puisi anak",
      description:
        "Buku-buku puisi yang ditulis untuk anak-anak, dengan kata-kata dan nada yang mudah dimengerti, serta gambar yang menarik untuk membantu memvisualisasikan puisi tersebut.",
    },
    {
      category: "Buku interaktif",
      description:
        "Buku-buku yang mencakup fitur interaktif seperti kertas lipat, flap, atau roda yang berputar, yang memungkinkan anak-anak untuk berpartisipasi secara aktif dalam cerita dan menambah pengalaman membaca mereka.",
    },
    {
      category: "Sains dan teknologi",
      description:
        "Buku-buku yang membahas topik-topik sains dan teknologi, yang membantu anak-anak memahami dunia di sekitar mereka dan menumbuhkan minat mereka terhadap ilmu pengetahuan.",
    },
    {
      category: "Bahasa",
      description:
        "Buku-buku yang membantu anak-anak mempelajari bahasa baru atau meningkatkan kemampuan bahasa mereka dalam bahasa yang sudah dikuasai.",
    },
    {
      category: "Petualangan",
      description:
        "Buku-buku yang mengandung cerita petualangan dan fantasi yang memikat imajinasi anak-anak dan membantu mereka melihat dunia dari perspektif yang berbeda.",
    },
    {
      category: "Seni dan kerajinan",
      description:
        "Buku-buku yang membantu anak-anak dalam mengembangkan kreativitas mereka dan memberikan ide-ide proyek seni dan kerajinan tangan yang dapat dilakukan dengan mudah.",
    },
    {
      category: "Cerita rakyat",
      description:
        "Buku-buku yang mengandung cerita-cerita rakyat dari berbagai negara atau budaya, yang dapat memberikan anak-anak pemahaman yang lebih baik tentang dunia di sekitar mereka.",
    },
    {
      category: "Lingkungan",
      description:
        "Buku-buku yang membahas isu-isu lingkungan dan kelestarian alam, yang memberikan anak-anak pemahaman tentang pentingnya menjaga lingkungan hidup.",
    },
    {
      category: "Kesehatan, kebugaran",
      description:
        "Buku-buku yang mengajarkan anak-anak tentang kebugaran dan menjaga kesehatan tubuh mereka, termasuk latihan, nutrisi, dan kebiasaan sehari-hari yang sehat",
    },
    {
      category: "Motivasi",
      description:
        "Buku-buku yang memberikan inspirasi dan motivasi kepada anak-anak untuk mencapai tujuan mereka dan mengatasi tantangan dalam hidup.",
    },
  ],
  "Kategori Material Buku": [
    {
      category: "Buku karton",
      description:
        "Buku-buku dengan halaman dari karton tebal, yang cocok untuk anak-anak pra-sekolah dan anak-anak kecil yang belum terampil membaca.",
    },
    {
      category: "Buku kain",
      description:
        "Buku-buku yang terbuat dari kain dan seringkali memiliki detail tiga dimensi, cocok untuk anak-anak kecil yang sedang belajar mengenal berbagai tekstur.",
    },
    {
      category: "Buku pop-up",
      description:
        "Buku-buku dengan gambar-gambar tiga dimensi yang muncul ketika halaman dibuka, cocok untuk anak-anak yang lebih tua yang tertarik pada detail visual yang menarik.",
    },
    {
      category: "Buku puzzle",
      description:
        "Buku-buku yang terdiri dari beberapa potongan teka-teki, yang harus dirangkai oleh anak-anak untuk membentuk gambar yang utuh.",
    },
    {
      category: "Buku board game",
      description:
        "Buku-buku yang menggabungkan unsur permainan papan dengan cerita atau teka-teki, cocok untuk anak-anak yang menyukai tantangan dan permainan.",
    },
    {
      category: "Buku flip",
      description:
        "buku-buku dengan halaman yang dapat dibalik ke atas atau ke bawah, cocok untuk anak-anak yang menyukai interaksi fisik dengan buku.",
    },
    {
      category: "Buku magnet",
      description:
        "Buku-buku yang memiliki magnet di bagian belakang halaman, yang memungkinkan anak-anak untuk membuat gambar dan cerita sendiri.",
    },
    {
      category: "Buku audio",
      description:
        "Buku-buku yang memiliki rekaman audio untuk membacakan cerita atau mengikuti instruksi dalam buku, cocok untuk anak-anak yang sedang belajar membaca atau yang lebih suka mendengarkan cerita daripada membacanya.",
    },
    {
      category: "Buku terstruktur",
      description:
        "buku-buku yang memiliki struktur atau format khusus untuk membantu anak-anak belajar, seperti buku-buku yang membahas tentang angka, abjad, atau tata bahasa.",
    },
    {
      category: "Buku teka-teki",
      description:
        "Buku-buku yang mencakup teka-teki, puzzle, dan permainan cerdas lainnya, cocok untuk anak-anak yang menyukai tantangan dan pemecahan masalah.",
    },
  ],
}

type Menu = Category[]

export const categoriesList = Object.keys(bookCategories)

export const listMenu = (category: string): Menu => {
  const optionsMenu: Menu = []
  bookCategories[category].map((category) =>
    optionsMenu.push({
      category: category.category,
      description: category.description,
    })
  )
  return optionsMenu
}

export const categoriesCheckList = (category: string): CategoryCheckList[] => {
  const checkListCategory: CategoryCheckList[] = []
  bookCategories[category].map((category) =>
    checkListCategory.push({
      id: category.category.split(" ").join().toLocaleLowerCase(),
      label: category.category,
    })
  )
  return checkListCategory
}
