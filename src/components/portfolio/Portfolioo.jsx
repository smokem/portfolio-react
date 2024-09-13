import "../../app.scss";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Kallel Mobili Instagram Poster",
    img: "/1_Plan de travail 1.jpg",
    desc: "Transform your wardrobe with our modern closet designs. This stylish poster features a sleek, contemporary closet that combines aesthetics with functionality. Our expert team crafts custom dressing spaces that optimize storage and reflect your unique style.",
    type: "image",
    tech: ["/AI_Application_Icon.ico"], // Example logos
  },
  {
    id: 2,
    title: "Card Design",
    img: "/Card Design.jpg",
    desc: "Need to Travel: Your passport to paradise. Our stylish card design embodies the spirit of effortless travel. We specialize in crafting personalized itineraries that exceed your expectations. Let us curate your dream vacation today.Description for Card Design",
    type: "image",
    tech: ["/AI_Application_Icon.ico"],
  },
  {
    id: 3,
    title: "NEED TO TRAVEL POSTER",
    img: "/AFFICHE GENERALE.png",
    desc: "This vibrant poster invites you to embark on a journey of discovery. With stunning destinations like Lake Bled and the Na Pali Coast, the world is your oyster. Book your dream vacation today!",
    type: "image",
    tech: ["/photoshop.png","/AI_Application_Icon.ico"],
  },
  {
    id: 4,
    title: "'KALLEL MOBILI' Poster ",
    img: "/furniture_social_media_2.jpg",
    desc: "Elevate your home with Kallel Mobili's modern furniture. Our stylish kitchen designs combine functionality and aesthetics. Experience the perfect blend of form and function. Order now!",
    type: "image",
    tech: ["/AI_Application_Icon.ico"],
  },
  {
    id: 5,
    title: "GRID DESIGN",
    img: "/grid.png",
    desc: "This visually stunning grid showcases our diverse range of stylish and functional pieces, from sleek kitchens to elegant closets. Discover the perfect furniture to transform your space.Description for Grid Design",
    type: "image",
    tech: ["/AI_Application_Icon.ico"],
  },
  {
    id: 6,
    title: "SYMZ: Where Imagination Meets RealityLogo Symz",
    img: "/logo symz-01.png",
    desc: "This dynamic logo represents a creative agency that brings innovative ideas to life. The intertwining arrows symbolize collaboration, progress, and the fusion of imagination and execution.",
    type: "image",
    tech: ["/photoshop.png","/AI_Application_Icon.ico"],
  },
  {
    id: 7,
    title: "GOOGLE ISGIS",
    img: "/LOGO.jpg",
    desc: "The Google ISGIS Students Club logo represents a vibrant community of tech enthusiasts dedicated to innovation and creativity. We foster a collaborative learning environment where diverse skills and passions come together to shape the future of technology. Our commitment to developing the next generation of innovators and leaders is reflected in our logo's symbolism of limitless possibilities.",
    type: "image",
    tech: ["/photoshop.png","/AI_Application_Icon.ico"],
  },
  {
    id: 8,
    title: "Kallel Mobili: Timeless Design.",
    img: "/mobili_Plan de travail 1.png",
    desc: "The Kallel Mobili logo, featuring a bold red 'K' and a sleek, modern font, represents our commitment to quality craftsmanship and innovative design. The gray square symbolizes stability and reliability, while the red 'K' signifies passion and energy. This logo reflects our brand's dedication to creating functional and stylish furniture that enhances your living space.",
    type: "image",
    tech: ["/AI_Application_Icon.ico"],
  },
  {
    id: 9,
    title: "New Localisation Agency Poster",
    img: "/new localisation.jpg",
    desc: "This vibrant poster announces the new location of Need to Travel, a local travel agency in Thyna, Sfax Governorate, Tunisia. The design features a map with a pin marking the agency's exact address: Rue Hbib Thameur, Immeuble Elissa, N9, next to Krichen Optique. The tagline 'L'agence est ici, vraiment!'emphasizes the agency's accessibility and convenience for local travelers.",
    type: "image",
    tech: ["/photoshop.png","/AI_Application_Icon.ico"],
  },
  {
    id: 10,
    title: "SHOES SHOP website",
    img: "/shoes.png",
    desc: "The Shoes_ landing page showcases a stylish Nike running shoe against a vibrant background. A brief description of the product encourages visitors to explore further, and a prominent 'SHOP NOW' button invites them to make a purchase. The page's clean design and clear call to action effectively guide users toward the desired action.",
    type: "image",
    tech: ["/web.png",],
    className: "sh"
  },
  {
    id: 12,
    title: "Sms SOS TUNISIE",
    video: "/Sms sos.mp4",
    desc: "Edit your Instagram Reel to showcase the impactful work of SOS Tunisie. Add engaging visuals and text that encourages viewers to send an SMS with the keyword SOS to donate. Highlight how their support can make a real difference, making the message clear and inspiring.",
    type: "video",
    tech: ["/PPRO_prproj.png", "/AEFT_aep.png"],
  },
  {
    id: 13,
    title: "'TIMO' App",
    video: "/timo.mp4",
    desc: "The app is a toolkit designed to help autistic children develop key skills through fun, educational games. It supports multiple languages, including Tunisian and English, making it accessible to a wide range of users. The app focuses on improving communication, social skills, and cognitive development, offering customizable games with simple navigation. Parents and educators can track the child’s progress, making it a valuable tool for personalized learning.",
    type: "video",
    tech: ["/react native.png"],
    className: "react"

  },
  {
    id: 14,
    title: "E-COMMERCE Instagram Reel",
    video: "/my first reel.mp4",
    desc: "In this Instagram reel, we showcase a powerful transformation from 'Before Editing' to 'After Editing' to captivate potential customers. The reel begins with raw, unedited footage of a product, showing it in a natural, unpolished state. As the reel transitions, vibrant colors, sharp details, and professional lighting effects are introduced, highlighting the product's best features in the 'After Editing' scene. Subtle text overlays point out key improvements like color correction, enhanced clarity, and dynamic backgrounds. The reel ends with a call-to-action, inviting viewers to imagine how their own products could be elevated with high-quality editing services.",
    type: "video",
    tech: ["/PPRO_prproj.png", "/AEFT_aep.png"],
    className: "com"
  },
  {
    id: 15,
    title: "Interacti Logo Animation",
    video: "/interacti logo animation.mp4",
    desc: "Logo animation for a interacti marketing agency",
    type: "video",
    tech: ["/PPRO_prproj.png", "/AEFT_aep.png"],
  },
  {
    id: 16,
    title: "Interacti Aid Mubarak Reel",
    video: "/interacti aid_1.mp4",
    desc: "A vibrant, animated reel celebrating Eid al-Fitr. Features festive colors, traditional Islamic symbols, and a positive message of joy and community. Includes a call to action for viewers to share or donate.Description for Interacti Aid 1",
    type: "video",
    tech: ["/PPRO_prproj.png", "/AEFT_aep.png"],
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 100]);

  return (
    <section>
      <div className="container">
      <div className={`wrapper ${item.className ? item.className : ""}`}>
        <div className={`wrapper ${item.id === 2 ? "specialHeight" : ""}`}>
          <div className="mediaContainer" ref={ref}>
            {item.type === "image" ? (
              <img src={item.img} alt={item.title} />
            ) : (
              <video autoPlay loop muted>
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="techLogos">
              {item.tech.map((logo, index) => (
                <img src={logo} alt="Technology logo" key={index} />
              ))}
            </div>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};

const Portfolioo = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolioo;
