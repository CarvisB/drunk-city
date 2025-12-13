export interface Alchohol {
  id: number
  brand: string
  price: number
  proof: number
  image: string
  featured: boolean;
  title?: string;
  caption?: string;
  category: "whiskey" | "vodka" | "rum" | "tequila" | "gin" | "bourbon" | "wine" | "brandy" | "cognac" | "scotch"
}

export const alchoholData: Alchohol[] = [
  // WHISKEY
  { id: 1, brand: "Jack Daniel's", price: 29.99, proof: 40,image: "https://plus.unsplash.com/premium_photo-1694787017981-b50b773a2c1e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "whiskey", featured: false },
  { id: 2, brand: "Jameson", price: 32.99, proof: 40, image: "https://plus.unsplash.com/premium_photo-1694787017981-b50b773a2c1e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "whiskey", featured: false },
  { id: 3, brand: "Crown Royal", price: 36.99, proof: 40, image: "https://plus.unsplash.com/premium_photo-1694787017981-b50b773a2c1e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "whiskey", featured: false },

  // VODKA
  { id: 4, brand: "Smirnoff", price: 19.99, proof: 35, image: "https://images.unsplash.com/photo-1661200670371-ad6f0c048b63?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "vodka", featured: false },
  { id: 5, brand: "Grey Goose", price: 44.99, proof: 40, image: "https://images.unsplash.com/photo-1661200670371-ad6f0c048b63?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "vodka", featured: false },
  { id: 6, brand: "Tito's", price: 24.99, proof: 40, image: "https://images.unsplash.com/photo-1661200670371-ad6f0c048b63?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "vodka", featured: false },

  // RUM
  { id: 7, brand: "Captain Morgan", price: 22.49, proof: 35, image: "https://images.unsplash.com/photo-1591704951890-0862b2e98acb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYW5rJTIwcnVtJTIwYm90dGxlfGVufDB8fDB8fHww",
 category: "rum", featured: false },
  { id: 8, brand: "Bacardi Superior", price: 18.99, proof: 40, image: "https://images.unsplash.com/photo-1591704951890-0862b2e98acb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYW5rJTIwcnVtJTIwYm90dGxlfGVufDB8fDB8fHww",
 category: "rum", featured: false },
  { id: 9, brand: "Malibu", price: 21.99, proof: 21, image: "https://images.unsplash.com/photo-1591704951890-0862b2e98acb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYW5rJTIwcnVtJTIwYm90dGxlfGVufDB8fDB8fHww",
 category: "rum", featured: false },

  // TEQUILA
  { id: 10, brand: "Patrón", price: 49.99, proof: 40, image: "https://images.unsplash.com/photo-1647620646126-05ba9a5328a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "tequila", featured: true, title: "It's 5 o'clock somewhere", caption: "Here's a shot to that!" },
  { id: 11, brand: "Don Julio", price: 54.99, proof: 40, image: "https://images.unsplash.com/photo-1647620646126-05ba9a5328a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "tequila", featured: false },
  { id: 12, brand: "Jose Cuervo", price: 23.99, proof: 38, image: "https://images.unsplash.com/photo-1647620646126-05ba9a5328a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "tequila", featured: false },

  // GIN
  { id: 13, brand: "Tanqueray", price: 27.99, proof: 47, image: "https://images.unsplash.com/photo-1611425541089-033a53eb2f6e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "gin", featured: false },
  { id: 14, brand: "Bombay Sapphire", price: 29.99, proof: 47, image: "https://images.unsplash.com/photo-1611425541089-033a53eb2f6e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "gin", featured: false },
  { id: 15, brand: "Beefeater", price: 25.99, proof: 44, image: "https://images.unsplash.com/photo-1611425541089-033a53eb2f6e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "gin", featured: false },

  // BOURBON
  { id: 16, brand: "Maker's Mark", price: 32.99, proof: 45, image: "https://plus.unsplash.com/premium_photo-1694994138246-8ea2f659098e?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "bourbon", featured: false },
  { id: 17, brand: "Wild Turkey", price: 28.99, proof: 50, image: "https://plus.unsplash.com/premium_photo-1694994138246-8ea2f659098e?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "bourbon", featured: false },
  { id: 18, brand: "Evan Williams", price: 17.99, proof: 43, image: "https://plus.unsplash.com/premium_photo-1694994138246-8ea2f659098e?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "bourbon", featured: false },

  // WINE
  { id: 19, brand: "Barefoot", price: 9.99, proof: 12, image: "https://plus.unsplash.com/premium_photo-1676590905512-13824f60092a?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "wine", featured: false },
  { id: 20, brand: "Stella Rosa", price: 13.49, proof: 10, image: "https://plus.unsplash.com/premium_photo-1676590905512-13824f60092a?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "wine", featured: true, title: "Wine Down", caption: "With our premium select wines."  },
  { id: 21, brand: "Yellow Tail", price: 11.99, proof: 13, image: "https://plus.unsplash.com/premium_photo-1676590905512-13824f60092a?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "wine", featured: false },

  // BRANDY
  { id: 22, brand: "E&J", price: 15.99, proof: 40, image: "https://images.unsplash.com/photo-1652284299342-21749ba9baa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEJyYW5keSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
 category: "brandy", featured: false },
  { id: 23, brand: "Paul Masson", price: 13.99, proof: 35, image: "https://images.unsplash.com/photo-1652284299342-21749ba9baa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEJyYW5keSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
 category: "brandy", featured: false },
  { id: 24, brand: "Christian Brothers", price: 14.99, proof: 40, image: "https://images.unsplash.com/photo-1652284299342-21749ba9baa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEJyYW5keSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
 category: "brandy", featured: false },

  // COGNAC
  { id: 25, brand: "Hennessy", price: 59.99, proof: 40, image: "https://images.unsplash.com/photo-1609620506709-302c31dd8eee?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "cognac", featured: true, title: "Tis the season.", caption: "The perfect gift, to make some spirits bright." },
  { id: 26, brand: "Rémy Martin", price: 47.99, proof: 40, image: "https://images.unsplash.com/photo-1609620506709-302c31dd8eee?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "cognac", featured: false },
  { id: 27, brand: "Courvoisier", price: 42.99, proof: 40, image: "https://images.unsplash.com/photo-1609620506709-302c31dd8eee?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "cognac", featured: false },

  // SCOTCH
  { id: 28, brand: "Johnnie Walker", price: 39.99, proof: 43, image: "https://plus.unsplash.com/premium_photo-1661286743264-3c977faa9c07?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "scotch", featured: false },
  { id: 29, brand: "Chivas Regal", price: 49.99, proof: 40, image: "https://plus.unsplash.com/premium_photo-1661286743264-3c977faa9c07?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "scotch", featured: false },
  { id: 30, brand: "Dewar's", price: 27.99, proof: 40, image: "https://plus.unsplash.com/premium_photo-1661286743264-3c977faa9c07?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 category: "scotch", featured: false }
]
