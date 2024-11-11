
const infoCards = [
  {
    title: "Subsidi Pupuk untuk Petani",
    description: "Sangat diperlukan untuk menopang hasil panen serta keberlangsungan ekonomi para petani.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Ilustrasi petani dengan pupuk"
  },
  {
    title: "Debat Perdana Pilkada Serambi Nusantara",
    description: "Program unggulan: 'Satu Rumah Satu Sarjana' dan Aplikasi Terintegrasi 'Lapor Bupati' untuk peningkatan pelayanan publik.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Ilustrasi debat pilkada"
  },
  {
    title: "Membangun Serambi Nusantara",
    description: "Fokus pada kesejahteraan petani Penajam melalui inovasi pupuk organik dan peningkatan kualitas hasil pertanian.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Ilustrasi pembangunan daerah"
  },
  {
    title: "Pengelolaan Keuangan Daerah",
    description: "Terbukti mampu mendaratkan daerah dengan baik setelah diterpa hutang yang cukup besar.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Ilustrasi pengelolaan keuangan"
  },
  {
    title: "Sinergi dengan Pengusaha Muda",
    description: "Mendukung Musyawarah Cabang ke-IV BPC HIPMI Kabupaten Penajam Paser Utara untuk membangun Serambi Nusantara.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Ilustrasi pengusaha muda"
  },
  {
    title: "Inovasi Pertanian Terpadu",
    description: "Mendorong sinergi budidaya ikan dengan tanaman dalam satu wilayah untuk efisiensi dan nilai ekonomi.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Ilustrasi pertanian terpadu"
  },
  {
    title: "Rumah Singgah AHB",
    description: "Kegiatan sosial jangka panjang yang diinisiasi oleh Ahmad Basir, calon wakil bupati dan pegiat sosial.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Ilustrasi rumah singgah"
  },
  {
    title: "Keunggulan Pasangan Hamdam Basir",
    description: "Terbukti mampu menyelesaikan permasalahan PPU, termasuk utang hampir 500M dalam waktu kurang dari 1 tahun.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Ilustrasi Hamdam Basir"
  },
  {
    title: "Peringatan Hari Santri Nasional",
    description: "Santri bukan hanya soal kitab, tapi juga tekad kuat membangun bangsa dengan iman dan kebijaksanaan. Mari wujudkan Indonesia yang lebih sejahtera, berkeadilan, dan penuh berkah.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Ilustrasi santri nasional"
  },
  {
    title: "Program Desa dan Kelurahan Berdaya",
    description: "Komitmen 1 Miliar per Tahun untuk pembangunan infrastruktur, peningkatan ekonomi lokal, dan pemberdayaan masyarakat di setiap desa dan kelurahan.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Ilustrasi pemberdayaan desa"
  },
  {
    title: "Dana RT untuk Pembangunan",
    description: "Setiap RT akan menerima Rp 100-300 JT per tahun untuk pembangunan fasilitas publik, kegiatan sosial, dan peningkatan kesejahteraan warga.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Ilustrasi pembangunan RT"
  },
  {
    title: "Kegiatan Keagamaan di Babulu",
    description: "Menghadiri Ta'dhimi Maulid Nabi Muhammad SAW & Haflah Tasyakur Khotmil Qur'an 30 jus Binnadzor Dan Wisuda Bittuqo di Desa Labangka Barat, memperkuat hubungan ulama dan pemerintah daerah.",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Ilustrasi kegiatan keagamaan"
  }
]

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Informasi Penting Serambi Nusantara</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {infoCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={card.image}
              alt={card.alt}
              width={300}
              height={200}
              className="w-full object-cover h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}