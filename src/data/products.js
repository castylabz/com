const imgFile = (name) => {
  // Use PUBLIC_URL which will be empty in development and contain the path in production
  const basePath = process.env.PUBLIC_URL || '';
  return `${basePath}/images/${name}`;
};

export const products = [
  // Keychains Category
  {
    id: 1,
    name: "Hexagon fidget keychain",
    description: "Hexagon fidget keychain with nested steps for a soothing, tactile feel that keeps hands busy and minds calm.",
    category: "keychains",
    image: imgFile("Keychain Hexagon Fidget 0.png"),
    images: [imgFile("Keychain Hexagon Fidget 0.png"),
      imgFile("Keychain Hexagon Fidget 1.png"),
      imgFile("Keychain Hexagon Fidget 2.png")]
  },
  {
    id: 2,
    name: "Flexi Funny Octopus",
    description: "Adorable flexible octopus keychain with wiggling tentacles and googly eyes that brings instant smiles wherever it goes. Perfect for fidgeting, stress relief, or adding personality to keys and bags—a playful companion that's always ready for fun.",
    category: "keychains",
    image: imgFile("Flexi Funny Octopus 0.webp"),
    images: [imgFile("Flexi Funny Octopus 1.webp"),
      imgFile("Flexi Funny Octopus 0.webp"),
      imgFile("Flexi Funny Octopus 2.webp"),
    ]
  },

  {
    id: 57,
    name: "Pokeball Keychain",
    description: "Catch your favorites on the go with this Pokeball Keychain! Lightweight, durable, and perfect for adding a touch of adventure to your keys, bags, or backpacks. A must-have accessory for every fan and collector.",
    category: "keychains",
    image: imgFile("Pokeball Keychain 0.png"),
    images: [imgFile("Pokeball Keychain 0.png"),
      imgFile("Pokeball Keychain  1.png"),
      imgFile("Pokeball Keychain  2.png")]
  },

  // Lamps Category
  {
    id: 3,
    name: "Bunny LED Tealight Holder",
    description: "Brighten your space with our adorable Bunny Tealight Holder. Its charming design adds a touch of whimsical warmth to any room. Simply place a tealight inside to create a cozy, inviting glow. A perfect little accent for any shelf or table.",
    category: "lamps",
    image: imgFile("Bunny tealight holder 1.png"),
    images: [imgFile("Bunny tealight holder 1.png"),
    imgFile("Bunny tealight holder print 2.jpg"),
    imgFile("Bunny tealight holder 3.png")]
  },
  {
    id: 4,
    name: "Twist Lamp",
    description: "Illuminate your space with the fluid design of our Twist Table Lamp. Its sculptural form casts a warm, soft glow, creating an atmosphere of modern elegance. ",
    category: "lamps",
    image: imgFile("twist 2.png"),
    images: [imgFile("twist 2.png"),
      imgFile("twist 0.png"),
      imgFile("twist 1.png"),
    ]
  },
  {
    id: 14,
    name: "Japanese Kumiko Lamp",
    description: "Bring a touch of Japan to your home with this Japanese Kumiko Lamp. Its intricate, handcrafted lattice casts mesmerizing patterns of warm, ambient light—perfect for creating a peaceful, elegant atmosphere in any room. ",
    category: "lamps",
    image: imgFile("Japanese Kumiko Lamp 0.png"),
    images: [imgFile("Japanese Kumiko Lamp 1.png"),
      imgFile("Japanese Kumiko Lamp 2.png"),
      imgFile("Japanese Kumiko Lamp 3.png"),
    ]
  },
  {
    id: 15,
    name: "Honeycomb Lamp",
    description: "Illuminate your space with the Honeycomb Lamp—a modern cylindrical lamp featuring a geometric honeycomb pattern that casts warm, ambient light. Its eye-catching design adds a touch of contemporary elegance to any room, making it perfect for desks, bedside tables, or cozy corners.",
    category: "lamps",
    image: imgFile("Honeycomb lamp  0.png"),
    images: [imgFile("Honeycomb lamp  0.png"),
      imgFile("Honeycomb lamp  1.png"),
      imgFile("Honeycomb lamp  2.png"),
      imgFile("Honeycomb lamp  3.png"),
    ]
  },



  // Decor Category - Using your cat jewelry box images
  
  {
    id: 66,
    name: "Garage Key Holder",
    description: "This Garage Key Holder isn't just functional — it's a statement piece for every car lover. Add a touch of garage vibes to your wall & keep your keys safe in the coolest way!",
    category: "decor",
    image: imgFile("Hotwheels Garage Key Holder 0.png"),
    images: [imgFile("Hotwheels Garage Key Holder 0.png"),
      imgFile("Hotwheels Garage Key Holder 1.png"),
      imgFile("Hotwheels Garage Key Holder 2.png")]
  },
  {
    id: 5,
    name: "Cat Jewelry Box",
    description: "Beautiful and elegant cat-shaped jewelry box with intricate details",
    category: "decor",
    image: imgFile("Cat Jewelry Box 1.jpg"),
    images: [
      imgFile("Cat Jewelry Box 1.jpg"),
      imgFile("Cat Jewelry Box 2.jpg"),
      imgFile("Cat Jewelry Box 3.jpg"),
      imgFile("Cat Jewelry Box 4.jpg")
    ]
  },
  {
    id: 56,
    name: "Home Sweet Home Decoration",
    description: "A welcoming “Home Sweet Home” wall hanging in a cozy house silhouette, complete with flowing script and a heart accent—perfect for entryways, living rooms, or as a thoughtful housewarming gift.",
    category: "decor",
    image: imgFile("Home Sweet Home Decoration 3.png"),
    images: [imgFile("Home Sweet Home Decoration 0.png"),
      imgFile("Home Sweet Home Decoration 1.png"),
      imgFile("Home Sweet Home Decoration 2.png")
    ]
  },

  {
    id: 55,
    name: "Halloween Ghost decor",
    description: "Spooky-cute Ghost Lamp that casts a soft, cozy glow—perfect for Halloween vibes, kids’ rooms, or a playful accent on shelves and bedside tables.",
    category: "decor",
    image: imgFile("Halloween Ghost 1.png"),
    images: [
      imgFile("Halloween Ghost 1.png"),
      imgFile("Halloween Ghost 0.png"),
      imgFile("Halloween Ghost 2.png"),
    ]
  },
  {
    id: 7,
    name: "No Evil Trio",
    description: "See no evil, hear no evil, speak no evil—meet the No Evil Trio. Minimal art with maximum calm for shelves, desks, and mindful corners tap to add serenity to the space today.",
    category: "decor",
    image: imgFile("No Evil Trio 0.webp"),
    images: [
      imgFile("No Evil Trio 0.webp"),
      imgFile("No Evil Trio 1.webp"),
      imgFile("No Evil Trio 2.webp"),
    ]
  },
  {
    id: 8,
    name: "Hoodie Pen Holder ",
    description: "Keep your desk stylish and organized with this Hoodie Pen Holder. Its playful hoodie design adds personality to any workspace while neatly storing pens, pencils, and markers. A fun and functional accessory for students, creatives, or office setups.",
    category: "decor",
    image: imgFile("Hoodie Pen Holder 0.png"),
    images: [
      imgFile("Hoodie Pen Holder 0.png"),
      imgFile("Hoodie Pen Holder 1.png"),
      imgFile("Hoodie Pen Holder 2.png"),
    ]
  },
  {
    id: 9,
    name: "Tealight Star",
    description: "Light up your space with the Tealight Star—a modern star-shaped holder that creates a warm, cozy glow with any tealight. Its unique cutout design and textured pattern add a touch of charm to shelves, tables, or festive displays. Perfect for brightening up any moment.",
    category: "decor",
    image: imgFile("Tealight Star 0.png"),
    images: [imgFile("Tealight Star 0.png"),
      imgFile("Tealight Star 1.png"),
      imgFile("Tealight Star 2.png"),
    ]
  },

  {
    id: 58,
    name: "Batman LED Lightbox",
    description: "Illuminate your space with the iconic Batman LED Lightbox—a sleek, modern lightbox featuring the legendary Dark Knight logo that casts a dramatic, ambient glow. Perfect for Batman fans, gaming rooms, or adding superhero flair to any space. The LED technology ensures long-lasting, energy-efficient illumination.",
    category: "decor",
    image: imgFile("Batman LED Lightbox 0.png"),
    images: [imgFile("Batman LED Lightbox 1.png"),
      imgFile("Batman LED Lightbox 2.png"),
      imgFile("Batman LED Lightbox 3.png"),
    ]
  },

  {
    id: 59,
    name: " Graceful Antelope Sculpture",
    description: "Minimalist elegance meets modern design. Our 3D Printed Gazelle Sculpture is the perfect centerpiece for your home or office - bold, sleek, and timeless. Available in multiple colors to suit your style",
    category: "decor",
    image: imgFile("Graceful Antelope Sculpture 0.png"),
    images: [imgFile("Graceful Antelope Sculpture 0.png"),
      imgFile("Graceful Antelope Sculpture 1.png"),
      imgFile("Graceful Antelope Sculpture 2.png"),
    ]
  },

  {
    id: 60,
    name: "Jewelry box",
    description: "Organize in style! Our sleek Jewelry Box with multiple tray designs keeps your treasures safe & beautifully arranged. Perfect for rings, earrings, bracelets & more. ",
    category: "decor",
    image: imgFile("Jewelry box 0.png"),
    images: [imgFile("Jewelry box 0.png"),
      imgFile("Jewelry box 1.png"),
      imgFile("Jewelry box 2.png"),
    ]
  },

  {
    id: 61,
    name: "hexagon tree wall art",
    description: "Bring nature indoors This stunning Tree Hexagon Wall Art turns any wall into a piece of art!",
    category: "decor",
    image: imgFile("hexagon tree wall art 0.jpg"),
    images: [imgFile("hexagon tree wall art 0.jpg"),
      imgFile("hexagon tree wall art 1.jpg"),
    ]
  },

  
  {
    id: 62,
    name: "Eiffel Tower wall art",
    description: "Bring Paris to Your Walls! Transform your space with this stunning Eiffel Tower wall art – a perfect blend of elegance & modern decor.  Make your home feel like the City of Lights!",
    category: "decor",
    image: imgFile("Eiffel Tower wall art 0.png"),
    images: [imgFile("Eiffel Tower wall art 1.png"),
      imgFile("Eiffel Tower wall art 0.png"),
    ]
  },

  {
    id: 63,
    name: "Wall Planter With Hidden Drip Dray",
    description: "Elevate your greenery with this modern wall planter featuring a textured design and a cleverly concealed drip tray. The innovative drainage keeps roots healthy and surfaces dry, making plant care easy and mess-free—perfect for adding a fresh touch to any wall in your home or office.",
    category: "decor",
    image: imgFile("Diamond Design Wall Planter With Hidden Drip Dray 0.png"),
    images: [imgFile("Diamond Design Wall Planter With Hidden Drip Dray 0.png"),
      imgFile("Diamond Design Wall Planter With Hidden Drip Dray 1.png"),
      imgFile("Diamond Design Wall Planter With Hidden Drip Dray 2.png"),
    ]
  },

  {
    id: 64,
    name: "Christmas House Kit Card",
    description: "Build holiday magic with this easy-to-assemble Christmas House Kit Card. Create a charming miniature house that glows warmly, perfect for festive decor or gifting. Simple, fun, and memorable—add a little wonder to your celebrations!",
    category: "decor",
    image: imgFile("Christmas House Kit Card 0.png"),
    images: [imgFile("Christmas House Kit Card  2.png"),
      imgFile("Christmas House Kit Card 1.png"),
      imgFile("Christmas House Kit Card 3.png"),
    ]
  },

  {
    id: 68,
    name: "Romantic Couple Decorative",
    description: "Celebrate love with this elegant heart-shaped couple sculpture. Perfect for home décor or as a romantic gift, it symbolizes unity and connection with a sleek, modern design.",
    category: "decor",
    image: imgFile("Romantic Couple Decor 0.png"),
    images: [imgFile("Romantic Couple Decor 0.png"),
      imgFile("Romantic Couple Decor 1.png"),
      imgFile("Romantic Couple Decor 2.png"),
    ]
  },

  {
    id: 67,
    name: "Doberman Decor",
    description: "A sleek Doberman decor piece that captures the breed’s strength and poise in a clean, modern silhouette—perfect for shelves, desks, or entryways",
    category: "decor",
    image: imgFile("Doberman Decor 0.png"),
    images: [imgFile("Doberman Decor 0.png"),
      imgFile("Doberman Decor 1.png"),
      imgFile("Doberman Decor 2.png"),
    ]
  },



  // Gifts Category
  {
    id: 10,
    name: "Mother's Day Statue",
    description: "Celebrate love and gratitude with this elegant Mother's Day Statue. Featuring a minimalist figure holding a heart, it’s the perfect symbol of affection—an unforgettable gift to show Mom how much she means to you",
    category: "gifts",
    image: imgFile("Mother's Day Statue 0.png"),
    images: [imgFile("Mother's Day Statue 0.png"),
      imgFile("Mother's Day Statue 1.png"),
      imgFile("Mother's Day Statue 2.png")
    ]
  },
  {
    id: 11,
    name: "Hugging Couple Statue",
    description: "Romantic Couple Sculpture | Minimalist Love Statue | Anniversary Gift For Couples | Wedding Gifts | Modern Figurine | Desk Ornament Wall Art",
    category: "gifts",
    image: imgFile("Hugging Couple Statue 0.jpg"),
    images: [imgFile("Hugging Couple Statue 1.jpg"),
      imgFile("Hugging Couple Statue 0.jpg"),
      imgFile("Hugging Couple Statue 2.jpg  ")
    ]
  },
  {
    name: "customizable Infinity Name Stand",
    description: "Celebrate endless love with this personalized Infinity Wedding Gift. Customizable with names and a special date, it’s the perfect keepsake for weddings, anniversaries, or engagements—a symbol of forever for any couple.",
    category: "gifts",
    image: imgFile("Infinity 0.png"),
    images: [imgFile("Infinity 0.png"),
      imgFile("Infinity 1.png"),
      imgFile("Infinity 2.png")
    ]
  },


  // Fidget Category (renamed from Custom Orders)
  {
    id: 12,
    name: "Twisty Fidget Vase",
    description: "The Twisty Vase is a decorative fidget toy where several interlocking pieces slide along a spiral. Each member has a limit to hold them from sliding too far. It is fun to play and makes for a nice modern decoration!",
    category: "fidget",
    image: imgFile("Twisty Fidget Vase 1.jpg"),
    images: [
      imgFile("Twisty Fidget Vase 1.jpg"),
      imgFile("Twisty Fidget Vase 2.jpg"),
      imgFile("Twisty Fidget Vase 3.jpg")
    ]
  },
  {
    id: 13,
    name: "Fidget Click Flick Swoosh",
    description: "Fidget Click Flick Swoosh is the ultimate sensory toy for restless hands—spin, click, and flick for satisfying sounds and movements. Pocket-sized fun for stress relief, focus, or just a burst of playful energy anytime, anywhere.",
    category: "fidget",
    image: imgFile("Fidget Click Flick Swoosh 0.png"),
    images: [
      imgFile("Fidget Click Flick Swoosh 0.png"),
      imgFile("Fidget Click Flick Swoosh 1.png"),
      imgFile("Fidget Click Flick Swoosh 2.png")
    ]
  },
  {
    id: 65,
    name: "Pixel Heart Fidget",
    description: "A playful heart-shaped fidget toy with tactile pixel blocks that move and click for endless fidgeting fun. Great for stress relief, relaxation, or simply adding a little joy to your desk—perfect for hands that love to stay busy!",
    category: "fidget",
    image: imgFile("Pixel Heart Fidget 0.png"),
    images: [
      imgFile("Pixel Heart Fidget 1.png"),
      imgFile("Pixel Heart Fidget 2.png"),
      imgFile("Pixel Heart Fidget 3.png")
    ]
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "keychains", name: "Keychains" },
  { id: "lamps", name: "Lamps" },
  { id: "decor", name: "Decor" },
  { id: "gifts", name: "Gifts" },
  { id: "fidget", name: "Fidget" }
];
