import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Youtube as TikTok, 
  MessageCircle, 
  Palette, 
  Award, 
  Users, 
  Star, 
  ChevronDown,
  ChevronRight,
  Sparkles,
  Zap,
  Heart,
  CheckCircle2,
  X,
  Menu,
  ArrowRight,
  Calculator,
  GraduationCap,
  Phone,
  Mail
} from "lucide-react";
import "@/App.css";

const PHONE = "5511970209743";
const INSTAGRAM = "https://instagram.com/muriletyofi";
const TIKTOK = "https://www.tiktok.com/@murilety06";
const COURSE_LINK = "https://pay.kiwify.com.br/TRMlV04";

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950"></div>
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-ocean-blue/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-ocean-green/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-ocean-cyan/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-50, 50, -50],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl md:text-3xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          MURILETY
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["sobre", "portfolio", "orcamento", "depoimentos", "faq", "curso"].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-slate-300 hover:text-ocean-cyan transition-colors capitalize"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
          <motion.a
            href={`https://wa.me/${PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-ocean-green to-ocean-cyan px-6 py-2 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-ocean-cyan/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-4 h-4" />
            Contato
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {["sobre", "portfolio", "orcamento", "depoimentos", "faq", "curso"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-300 hover:text-ocean-cyan transition-colors capitalize text-left"
                >
                  {item}
                </button>
              ))}
              <a
                href={`https://wa.me/${PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-ocean-green to-ocean-cyan px-6 py-2 rounded-full text-white font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            className="text-6xl md:text-8xl emoji-3d inline-block"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            🎨
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">Transformando</span>
            <br />
            <span className="text-white">Paredes em Arte</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Arte mural profissional que transforma ambientes. 
            <span className="text-ocean-cyan font-semibold"> +530K no Instagram</span> e 
            <span className="text-ocean-green font-semibold"> +175K no TikTok</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <motion.button
              onClick={() => document.getElementById("orcamento").scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 bg-gradient-to-r from-ocean-blue to-ocean-cyan px-8 py-4 rounded-full text-white font-bold text-lg neon-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calculator className="w-5 h-5" />
              Fazer Orçamento
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 glass px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Palette className="w-5 h-5" />
              Ver Portfólio
            </motion.button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8">
            <motion.a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-ocean-cyan transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Instagram className="w-6 h-6" />
              <span className="font-semibold">530K+</span>
            </motion.a>
            <motion.a
              href={TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-ocean-green transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <TikTok className="w-6 h-6" />
              <span className="font-semibold">175K+</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-ocean-cyan" />
      </motion.div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="sobre" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Sobre o Murilety
          </h2>
          <p className="text-xl text-slate-400">Conheça a história por trás da arte</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden neon-glow">
              <img
                src="https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/5li655lo_eu%20perfi%20scadsfcvl.jpg"
                alt="Murilety"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 text-8xl emoji-3d"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🖌️
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Da paixão à profissão 🎨
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              Tenho <span className="text-ocean-cyan font-semibold">28 anos</span> e há 
              <span className="text-ocean-green font-semibold"> dois anos vivo da minha arte</span>. 
              Comecei tudo no meu quarto e hoje transformo paredes de clientes em obras incríveis.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Sou feliz espalhando minha arte para clientes, alunos e fãs. 
              Cada projeto é único e feito com <span className="text-ocean-cyan">dedicação total</span>.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="glass p-6 rounded-xl text-center card-hover">
                <div className="text-3xl emoji-3d mb-2">🏆</div>
                <div className="text-2xl font-bold text-ocean-cyan">100+</div>
                <div className="text-sm text-slate-400">Projetos</div>
              </div>
              <div className="glass p-6 rounded-xl text-center card-hover">
                <div className="text-3xl emoji-3d mb-2">⭐</div>
                <div className="text-2xl font-bold text-ocean-green">700K+</div>
                <div className="text-sm text-slate-400">Seguidores</div>
              </div>
              <div className="glass p-6 rounded-xl text-center card-hover">
                <div className="text-3xl emoji-3d mb-2">🎓</div>
                <div className="text-2xl font-bold text-ocean-blue">50+</div>
                <div className="text-sm text-slate-400">Alunos</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioImages = [
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/qzm9ve5e_7dc50e2f-686a-4948-83fd-68fc47baf6b0.jpg",
      title: "Arte Corinthians",
      description: "Lettering personalizado para fã do timão"
    },
    {
      url: "https://i.ibb.co/933nM2Tr/image.png",
      title: "Realismo",
      description: "Arte em estilo realista"
    },
    {
      url: "https://i.ibb.co/JDP85Zw/image.png",
      title: "Personagem",
      description: "Arte de personagem"
    },
    {
      url: "https://i.ibb.co/vxt9bbw8/image.png",
      title: "Arte Colorida",
      description: "Composição vibrante"
    },
    {
      url: "https://i.ibb.co/cWVsxbn/image.png",
      title: "Mural",
      description: "Grande formato"
    },
    {
      url: "https://i.ibb.co/Y7BvXwyb/image.png",
      title: "Grafite",
      description: "Estilo street art"
    },
    {
      url: "https://i.ibb.co/ZR7cWXRw/image.png",
      title: "Arte Moderna",
      description: "Design contemporâneo"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Portfólio 🎨
          </h2>
          <p className="text-xl text-slate-400">Confira alguns dos meus trabalhos</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer card-hover"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-slate-300">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all"
          >
            <Instagram className="w-5 h-5" />
            Ver mais no Instagram
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-ocean-cyan transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-slate-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Calculator Section (Part 1 - will continue in next file)
const Calculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    altura: "",
    largura: "",
    pacote: "",
    estilo: "",
    personagem: "nao",
    descricao: ""
  });

  const calculatePrice = () => {
    const altura = parseFloat(formData.altura) || 0;
    const largura = parseFloat(formData.largura) || 0;
    const area = altura * largura;

    let basePrice = 0;
    let minPrice = 0;

    switch (formData.pacote) {
      case "premium":
        basePrice = area * 700;
        minPrice = 2000;
        break;
      case "intermediario":
        basePrice = area * 500;
        minPrice = 1500;
        break;
      case "profissional":
        basePrice = area * 300;
        minPrice = 800;
        break;
      default:
        return 0;
    }

    let finalPrice = Math.max(basePrice, minPrice);

    if (formData.personagem === "sim") {
      finalPrice += 600;
    }

    return finalPrice;
  };

  const sendWhatsApp = () => {
    const price = calculatePrice();
    const message = `Olá! Gostaria de fazer um orçamento:
    
📏 Dimensões: ${formData.altura}m x ${formData.largura}m
📦 Pacote: ${formData.pacote}
🎨 Estilo: ${formData.estilo}
👤 Personagem/Logo: ${formData.personagem}
${formData.descricao ? `📝 Descrição: ${formData.descricao}` : ""}

💰 Valor aproximado: R$ ${price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}

Aguardo retorno!`;

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.altura && formData.largura && parseFloat(formData.altura) >= 0.5 && parseFloat(formData.largura) >= 0.5;
      case 2:
        return formData.pacote !== "";
      case 3:
        return formData.estilo !== "";
      case 4:
        return true;
      default:
        return true;
    }
  };

  return (
    <section id="orcamento" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Calculadora de Orçamento 💰
          </h2>
          <p className="text-xl text-slate-400">Faça seu orçamento em 5 passos simples</p>
        </motion.div>

        <div className="glass rounded-3xl p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${
                    s <= step
                      ? "bg-gradient-to-r from-ocean-blue to-ocean-cyan text-white"
                      : "bg-slate-800 text-slate-500"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-ocean-blue to-ocean-cyan"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / 5) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Step 1: Dimensions */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                📏 Passo 1: Dimensões da Parede
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Altura (metros)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.5"
                    value={formData.altura}
                    onChange={(e) => setFormData({ ...formData, altura: e.target.value })}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-ocean-cyan focus:outline-none transition-colors"
                    placeholder="Ex: 2.5"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Largura (metros)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.5"
                    value={formData.largura}
                    onChange={(e) => setFormData({ ...formData, largura: e.target.value })}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-ocean-cyan focus:outline-none transition-colors"
                    placeholder="Ex: 4.0"
                  />
                </div>
              </div>
              {formData.altura && formData.largura && (
                <div className="glass p-4 rounded-xl">
                  <p className="text-slate-300">
                    Área total: <span className="text-ocean-cyan font-bold">
                      {(parseFloat(formData.altura) * parseFloat(formData.largura)).toFixed(2)}m²
                    </span>
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Step 2: Package */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                📦 Passo 2: Escolha o Pacote
              </h3>
              <div className="grid gap-4">
                {[
                  { 
                    id: "premium", 
                    name: "PLATINUM", 
                    desc: "Feito 100% por Murilety", 
                    icon: "👑",
                    color: "from-yellow-500 to-orange-500"
                  },
                  { 
                    id: "intermediario", 
                    name: "GOLD", 
                    desc: "Murilety + Alunos Profissionais", 
                    icon: "⭐",
                    color: "from-ocean-blue to-ocean-cyan"
                  },
                  { 
                    id: "profissional", 
                    name: "SILVER", 
                    desc: "Equipe Murilety Certificada", 
                    icon: "✨",
                    color: "from-ocean-green to-ocean-cyan"
                  }
                ].map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    onClick={() => setFormData({ ...formData, pacote: pkg.id })}
                    className={`p-6 rounded-xl cursor-pointer transition-all border-2 ${
                      formData.pacote === pkg.id
                        ? "border-ocean-cyan bg-ocean-cyan/10"
                        : "border-slate-700 hover:border-slate-600"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{pkg.icon}</div>
                      <div className="flex-1">
                        <h4 className={`text-xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                          {pkg.name}
                        </h4>
                        <p className="text-slate-400">{pkg.desc}</p>
                      </div>
                      {formData.pacote === pkg.id && (
                        <CheckCircle2 className="w-6 h-6 text-ocean-cyan" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Style */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                🎨 Passo 3: Estilo da Arte
              </h3>
              <div className="grid gap-4">
                {[
                  { id: "realismo-complexo", name: "Realismo com Sombras Complexas", icon: "🖼️", difficulty: "Difícil" },
                  { id: "realismo-simples", name: "Realismo com Sombras Simples", icon: "🎭", difficulty: "Médio" },
                  { id: "animes", name: "Animes", icon: "⚡", difficulty: "Médio" },
                  { id: "desenhos", name: "Desenhos Animados", icon: "🎬", difficulty: "Simples" },
                  { id: "grafite", name: "Grafite Abstrato", icon: "🌈", difficulty: "Médio" },
                  { id: "letras", name: "Lettering & Typography", icon: "✍️", difficulty: "Simples" }
                ].map((style) => (
                  <motion.div
                    key={style.id}
                    onClick={() => setFormData({ ...formData, estilo: style.id })}
                    className={`p-6 rounded-xl cursor-pointer transition-all border-2 ${
                      formData.estilo === style.id
                        ? "border-ocean-cyan bg-ocean-cyan/10"
                        : "border-slate-700 hover:border-slate-600"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{style.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white">{style.name}</h4>
                        <p className="text-slate-400">Dificuldade: {style.difficulty}</p>
                      </div>
                      {formData.estilo === style.id && (
                        <CheckCircle2 className="w-6 h-6 text-ocean-cyan" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 4: Character */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                👤 Passo 4: Personalização
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-4 font-semibold">
                    Terá personagem central ou logo?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: "nao", label: "Não", icon: "❌" },
                      { id: "sim", label: "Sim (+ R$ 600)", icon: "✅" }
                    ].map((opt) => (
                      <motion.div
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, personagem: opt.id })}
                        className={`p-6 rounded-xl cursor-pointer transition-all border-2 text-center ${
                          formData.personagem === opt.id
                            ? "border-ocean-cyan bg-ocean-cyan/10"
                            : "border-slate-700 hover:border-slate-600"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-4xl mb-2">{opt.icon}</div>
                        <p className="text-white font-semibold">{opt.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {formData.personagem === "sim" && (
                  <div>
                    <label className="block text-slate-300 mb-2 font-semibold">
                      Descreva o personagem ou logo
                    </label>
                    <textarea
                      value={formData.descricao}
                      onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-ocean-cyan focus:outline-none transition-colors h-32 resize-none"
                      placeholder="Ex: Logo do Corinthians com mascote..."
                    />
                  </div>
                )}

                <div className="glass p-4 rounded-xl">
                  <p className="text-sm text-slate-400">
                    ⚠️ O valor pode mudar dependendo da complexidade do personagem/logo
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 5: Summary */}
          {step === 5 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                ✅ Passo 5: Resumo do Orçamento
              </h3>
              <div className="space-y-4">
                <div className="glass p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-ocean-cyan mb-4">Detalhes do Projeto</h4>
                  <div className="space-y-2 text-slate-300">
                    <p>📏 Dimensões: {formData.altura}m x {formData.largura}m ({(parseFloat(formData.altura) * parseFloat(formData.largura)).toFixed(2)}m²)</p>
                    <p>📦 Pacote: {formData.pacote === "premium" ? "PLATINUM" : formData.pacote === "intermediario" ? "GOLD" : "SILVER"}</p>
                    <p>🎨 Estilo: {formData.estilo}</p>
                    <p>👤 Personagem/Logo: {formData.personagem === "sim" ? "Sim" : "Não"}</p>
                    {formData.descricao && <p>📝 Descrição: {formData.descricao}</p>}
                  </div>
                </div>

                <div className="glass p-8 rounded-xl text-center neon-glow">
                  <p className="text-slate-400 mb-2">Valor Aproximado</p>
                  <p className="text-5xl font-bold gradient-text mb-4">
                    R$ {calculatePrice().toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                  <p className="text-sm text-slate-400">
                    ⚠️ O valor poderá variar de acordo com a dificuldade do projeto
                  </p>
                </div>

                <motion.button
                  onClick={sendWhatsApp}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-ocean-green to-ocean-cyan px-8 py-4 rounded-full text-white font-bold text-lg neon-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  Enviar Orçamento via WhatsApp
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            {step > 1 && (
              <motion.button
                onClick={prevStep}
                className="flex items-center gap-2 glass px-6 py-3 rounded-full text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronDown className="w-5 h-5 rotate-90" />
                Voltar
              </motion.button>
            )}
            {step < 5 && (
              <motion.button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`ml-auto flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all ${
                  canProceed()
                    ? "bg-gradient-to-r from-ocean-blue to-ocean-cyan hover:shadow-lg"
                    : "bg-slate-700 cursor-not-allowed opacity-50"
                }`}
                whileHover={canProceed() ? { scale: 1.05 } : {}}
                whileTap={canProceed() ? { scale: 0.95 } : {}}
              >
                Próximo
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
