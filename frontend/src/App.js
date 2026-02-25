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
  Activity,
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
              <Activity className="w-5 h-5" />
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
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/ymqrdroa_IMG_4743.HEIC",
      title: "Arte Mural",
      description: "Projeto personalizado"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/qgchuaw1_IMG_4833.HEIC",
      title: "Arte em Parede",
      description: "Design exclusivo"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/2put81ji_IMG_4364.HEIC",
      title: "Grafite Artístico",
      description: "Street art profissional"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/doxbkim9_IMG_1380.HEIC",
      title: "Arte Criativa",
      description: "Composição única"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/iyrih2jx_IMG_4173.HEIC",
      title: "Mural Decorativo",
      description: "Ambiente transformado"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/wd0tryl6_IMG_4235.HEIC",
      title: "Arte Personalizada",
      description: "Projeto exclusivo"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/tghsulk5_IMG_4367.HEIC",
      title: "Design em Parede",
      description: "Criação artística"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/c56bi08i_IMG_4833.HEIC",
      title: "Arte Contemporânea",
      description: "Estilo moderno"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/mnufcsai_IMG_1378.HEIC",
      title: "Mural Artístico",
      description: "Design inovador"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/8h7lk370_IMG_1525.HEIC",
      title: "Arte Urbana",
      description: "Street art moderna"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/9udgrcn3_IMG_2566.HEIC",
      title: "Pintura Criativa",
      description: "Obra exclusiva"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/y8ldxicl_IMG_4364.HEIC",
      title: "Arte Decorativa",
      description: "Ambiente único"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_vibrant-interactive/artifacts/b9xuclyp_IMG_4833.HEIC",
      title: "Design Personalizado",
      description: "Projeto sob medida"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

// Budget Calculator Section
const BudgetCalculator = () => {
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

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Cliente Residencial",
      text: "Transformou minha sala em uma obra de arte! O Murilety é muito profissional e atencioso. Recomendo demais! 🎨",
      rating: 5,
      emoji: "😍"
    },
    {
      name: "Marina Santos",
      role: "Empresária",
      text: "Contratei para fazer o mural do meu restaurante. Ficou incrível e meus clientes adoram tirar fotos! 📸",
      rating: 5,
      emoji: "🤩"
    },
    {
      name: "João Pedro",
      role: "Fã do Corinthians",
      text: "Realizou meu sonho de ter a arte do Corinthians na parede! Detalhes perfeitos, valeu cada centavo! ⚽",
      rating: 5,
      emoji: "⚡"
    },
    {
      name: "Ana Paula",
      role: "Mãe",
      text: "Fez o quarto do meu filho com tema de super-heróis. Ele não para de mostrar para os amigos! 🦸",
      rating: 5,
      emoji: "💙"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Depoimentos ⭐
          </h2>
          <p className="text-xl text-slate-400">O que meus clientes dizem</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl card-hover"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="text-3xl emoji-3d">{testimonial.emoji}</div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quanto tempo leva para fazer uma arte?",
      answer: "O tempo varia de acordo com o tamanho e complexidade. Geralmente, projetos pequenos levam 1-2 dias, médios 3-5 dias e grandes podem levar 1-2 semanas. Farei uma estimativa precisa após avaliar seu projeto!",
      emoji: "⏰"
    },
    {
      question: "Vocês atendem em quais regiões?",
      answer: "Atendemos principalmente na Grande São Paulo e interior. Para outras regiões, entre em contato pelo WhatsApp que verificamos a viabilidade e possível taxa de deslocamento.",
      emoji: "📍"
    },
    {
      question: "Qual a diferença entre os pacotes?",
      answer: "PLATINUM: 100% executado por mim. GOLD: Eu faço a base e detalhes principais, alunos finalizam sob minha supervisão. SILVER: Executado pela equipe certificada. Todos com qualidade garantida!",
      emoji: "📦"
    },
    {
      question: "Posso escolher qualquer desenho?",
      answer: "Sim! Você pode trazer referências, personagens, logos, fotos ou ideias. Faremos uma adaptação criativa para o espaço disponível. Quanto mais detalhes você fornecer, melhor!",
      emoji: "🎨"
    },
    {
      question: "A tinta é segura e durável?",
      answer: "Sim! Usamos tintas de alta qualidade, próprias para arte mural, resistentes a água e UV. Com os cuidados adequados, sua arte pode durar muitos anos mantendo as cores vibrantes!",
      emoji: "✅"
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Geralmente trabalhamos com 50% de entrada para reservar a data e comprar materiais, e 50% após a conclusão. Aceitamos PIX, transferência e cartão. Tudo combinado antes de começar!",
      emoji: "💳"
    },
    {
      question: "E se eu não gostar do resultado?",
      answer: "Isso nunca aconteceu! Sempre mostramos o esboço antes de começar e você acompanha todo o processo. Fazemos ajustes até você ficar 100% satisfeito. Sua felicidade é minha prioridade!",
      emoji: "😊"
    },
    {
      question: "Vocês fazem arte em teto também?",
      answer: "Sim! Fazemos arte em paredes, tetos, pisos e até mobília. Se você tem uma superfície, eu tenho a arte perfeita para ela! Entre em contato para falarmos sobre seu projeto.",
      emoji: "🏠"
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Perguntas Frequentes 💬
          </h2>
          <p className="text-xl text-slate-400">Tire suas dúvidas</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-3xl emoji-3d">{faq.emoji}</span>
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-ocean-cyan" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-20 text-slate-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Course Section
const Course = () => {
  const courseFeatures = [
    { icon: "🎓", title: "Técnicas Profissionais", desc: "Aprenda os segredos da arte mural" },
    { icon: "🎨", title: "Do Básico ao Avançado", desc: "Curso completo para todos os níveis" },
    { icon: "📹", title: "Aulas em Vídeo", desc: "Conteúdo prático e teórico" },
    { icon: "💼", title: "Suporte Direto", desc: "Tire dúvidas comigo" },
    { icon: "⚡", title: "Acesso Vitalício", desc: "Aprenda no seu ritmo" },
    { icon: "🏆", title: "Certificado", desc: "Comprove sua qualificação" }
  ];

  return (
    <section id="curso" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative glass rounded-3xl p-12 md:p-16 neon-glow"
        >
          {/* Floating Emojis */}
          <motion.div
            className="absolute top-10 left-10 text-6xl emoji-3d"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎨
          </motion.div>
          <motion.div
            className="absolute top-10 right-10 text-6xl emoji-3d"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-20 text-6xl emoji-3d"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            🖌️
          </motion.div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="text-7xl mb-4">🎓</div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Aprenda Minha Técnica!
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Transforme sua paixão em <span className="text-ocean-cyan font-bold">profissão</span> com o meu curso completo de arte em paredes
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {courseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-xl card-hover"
                >
                  <div className="text-4xl mb-3 emoji-3d">{feature.icon}</div>
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <motion.a
                href={COURSE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 px-12 py-5 rounded-full text-white font-bold text-xl shadow-2xl hover:shadow-pink-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GraduationCap className="w-7 h-7" />
                QUERO ME INSCREVER AGORA
                <Sparkles className="w-7 h-7" />
              </motion.a>
              
              <p className="text-sm text-slate-400">
                🔥 Vagas limitadas • Comece hoje mesmo
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-slate-400">Alunos Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">20+</div>
                <div className="text-sm text-slate-400">Horas de Conteúdo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-slate-400">Satisfação</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-12 relative border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-4">MURILETY</h3>
            <p className="text-slate-400 mb-4">
              Transformando paredes em arte desde 2023 🎨
            </p>
            <div className="flex gap-4">
              <motion.a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-ocean-cyan/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Instagram className="w-5 h-5 text-ocean-cyan" />
              </motion.a>
              <motion.a
                href={TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-ocean-green/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <TikTok className="w-5 h-5 text-ocean-green" />
              </motion.a>
              <motion.a
                href={`https://wa.me/${PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-ocean-blue/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <MessageCircle className="w-5 h-5 text-ocean-blue" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-ocean-cyan" />
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-slate-400">
              {["sobre", "portfolio", "orcamento", "depoimentos", "faq", "curso"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link)?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-ocean-cyan transition-colors capitalize"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-ocean-cyan" />
              Contato
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ocean-green" />
                <a href={`https://wa.me/${PHONE}`} className="hover:text-ocean-cyan transition-colors">
                  (11) 97020-9743
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-ocean-cyan" />
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-ocean-cyan transition-colors">
                  @muriletyofi
                </a>
              </li>
              <li className="flex items-center gap-2">
                <TikTok className="w-4 h-4 text-ocean-green" />
                <a href={TIKTOK} target="_blank" rel="noopener noreferrer" className="hover:text-ocean-cyan transition-colors">
                  @murilety06
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>por Murilety</span>
            <span>•</span>
            <span>{new Date().getFullYear()}</span>
            <span>•</span>
            <span>Todos os direitos reservados</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <BudgetCalculator />
      <Testimonials />
      <FAQ />
      <Course />
      <Footer />
    </div>
  );
}

export default App;
