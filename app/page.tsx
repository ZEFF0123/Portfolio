import { ChevronDown, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-semibold">Zefanya Mohaga Sanjaya</div>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="#about" className="text-sm font-medium hover:text-primary">
                  About me
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-sm font-medium hover:text-primary">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm font-medium hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm font-medium hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Button variant="outline" size="sm" asChild>
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 text-center md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4">
              <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full bg-muted">
                <div className="flex h-full w-full items-center justify-center text-4xl text-muted-foreground">ZMS</div>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Zefanya Mohaga Sanjaya</h1>
              <p className="max-w-[700px] text-xl text-muted-foreground md:text-2xl">3D Art dan Ilustrator</p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.instagram.com/zefanyams___" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/zefanya-mohaga-sanjaya-821870302"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:zefanyams62@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
              <Link href="#about" className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
                Scroll down
                <ChevronDown className="h-4 w-4 animate-bounce" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Perkenalkan, nama saya Zefanya Mohaga Sanjaya, biasa dipanggil Zefan. Saya merupakan lulusan SMK tahun
                2025. Saya memiliki minat yang besar terhadap berbagai jenis pekerjaan dan siap untuk belajar serta
                beradaptasi dalam bidang apa pun. Saya sangat antusias dalam mempelajari hal-hal baru dan unik, karena
                saya percaya setiap pengalaman dapat memperkaya kemampuan dan wawasan saya. Di waktu luang, saya
                menyukai permainan catur dan olahraga badminton. Saya lahir pada bulan Mei tahun 2007.
              </p>
              <p className="mb-4 text-lg text-muted-foreground">
                Saya memiliki keahlian dalam bidang desain 3D dan ilustrasi. Saya telah mempelajari berbagai software
                seperti Blender untuk pemodelan 3D dan animasi. Saya juga memiliki pengalaman dalam membuat konten
                visual untuk berbagai keperluan.
              </p>
              <p className="text-lg text-muted-foreground">
                Saat tidak sedang berkarya, saya senang mengeksplorasi teknik-teknik baru dalam dunia seni digital dan
                mengikuti perkembangan teknologi terbaru dalam industri kreatif.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SkillCard
                title="3D Modeling"
                items={["Blender", "Character Modeling", "Environment Design", "Texturing"]}
              />
              <SkillCard
                title="Illustration"
                items={["Digital Art", "Concept Art", "Character Design", "Storyboarding"]}
              />
              <SkillCard title="Animation" items={["3D Animation", "Motion Graphics", "Rigging", "Rendering"]} />
              <SkillCard
                title="Software"
                items={["Blender", "Adobe Photoshop", "Adobe Illustrator", "DaVinci Resolve"]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-muted/50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Character Design"
                description="Desain karakter 3D untuk proyek game indie dengan gaya visual yang unik."
                technologies={["Blender", "Character Modeling", "Texturing"]}
                image="Charakterilustrasi.png"
              />
              <ProjectCard
                title="CGI Intergration"
                description="Membuat CGI dengan menapilkan beberapa cerita atau shot dan sebuah product."
                technologies={["Blender", "Lighting", "Rendering"]}
              />
              <ProjectCard
                title="Short Animation"
                description="Animasi pendek bertemakan lingkungan dengan karakter dan latar yang dibuat secara keseluruhan dalam Blender."
                technologies={["Blender", "Animation", "Storyboarding"]}
              />
              <ProjectCard
                title="Product Visualization"
                description="Visualisasi produk 3D untuk keperluan pemasaran online dengan fokus pada detail dan presentasi."
                technologies={["Blender", "Product Modeling", "Rendering", "Davinchi"]}
              />
              <ProjectCard
                title="Poster Eli"
                description="Seri ilustrasi poster digital Cerita Eli episode 1."
                technologies={["Digital Art", "Illustration", "Cultural Design"]}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hubungi Saya</h2>
              <p className="mb-12 text-lg text-muted-foreground">
                Saya terbuka untuk diskusi proyek baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi
                Anda.
              </p>
              <div className="grid gap-6">
                <div className="flex items-center justify-center gap-4">
                  <Mail className="h-6 w-6 text-muted-foreground" />
                  <a href="mailto:zefanyams62@gmail.com" className="text-lg hover:text-primary">
                    zefanyams62@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Linkedin className="h-6 w-6 text-muted-foreground" />
                  <a
                    href="https://www.linkedin.com/in/zefanya-mohaga-sanjaya-821870302"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-primary"
                  >
                    linkedin.com/in/zefanya-mohaga-sanjaya
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Instagram className="h-6 w-6 text-muted-foreground" />
                  <a
                    href="https://www.instagram.com/zefanyams___"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-primary"
                  >
                    instagram.com/zefanyams___
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Phone className="h-6 w-6 text-muted-foreground" />
                  <span className="text-lg">082132404639</span>
                </div>
              </div>
              <div className="mt-12">
                <Button size="lg" asChild>
                  <a href="mailto:zefanyams62@gmail.com">Send Message</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zefanya Mohaga Sanjaya. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.instagram.com/zefanyams___" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/zefanya-mohaga-sanjaya-821870302"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:zefanyams62@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <ul className="grid gap-2">
          {items.map((item) => (
            <li key={item} className="text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
}: {
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <div className="flex h-full w-full items-center justify-center text-2xl text-muted-foreground">{title}</div>
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
