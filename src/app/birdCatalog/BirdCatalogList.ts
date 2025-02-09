
export interface bird {
  name: string;
  image: string;
  price: number;
  id: number;
  description: string;
}


export const BIRDCATALOGLIST: bird[] = [
    { 
        id: 1,
        name: 'Budgie', 
        image: 'assets/images/budgie.jpg', 
        price: 80, 
        description: 'A small, colorful parrot species, known for their playful and social nature. Budgies are popular as pets because of their friendly demeanor and ability to mimic sounds.'
    },
    { 
        id: 2,
        name: 'Cockatiel', 
        image: 'assets/images/cockatiel.jpg', 
        price: 70, 
        description: 'A charming parrot with a distinctive crest on its head. Known for being affectionate, cockatiels are great companions and can learn to whistle or mimic simple sounds.'
    },
    { 
        id: 3,
        name: 'Lovebird', 
        image: 'assets/images/lovebird.jpg', 
        price: 65, 
        description: 'A small, vibrant parrot famous for forming strong pair bonds. Lovebirds are affectionate, social, and enjoy being in the company of other birds or their owners.'
    },
    { 
        id: 4,
        name: 'Canary', 
        image: 'assets/images/canary.jpg', 
        price: 55, 
        description: 'Known for their bright yellow feathers and beautiful singing ability, canaries are often kept as pets for their melodic tunes and their peaceful nature.'
    },
    { 
        id: 5,
        name: 'Finch', 
        image: 'assets/images/orange-black-finch.jpg', 
        price: 70, 
        description: 'A small bird with vibrant plumage and a cheerful personality. Finches are active, social birds, and many species are admired for their beautiful songs.'
    },
    { 
        id: 6,
        name: 'Meyers Parrot', 
        image: 'assets/images/meyers-parrot.jpg', 
        price: 75, 
        description: 'A smaller African parrot that is playful, intelligent, and affectionate. With a calm nature, Meyers parrots make great pets for first-time bird owners.'
    },
    { 
        id: 7,
        name: 'Pionus Parrot', 
        image: 'assets/images/pionus-parrot.jpg', 
        price: 85, 
        description: 'Known for its sturdy build and gentle nature, the Pionus parrot is an intelligent and affectionate pet. They tend to be quieter compared to other parrots but are very loving.'
    },
    { 
        id: 8,
        name: 'African Grey', 
        image: 'assets/images/african-grey.jpg', 
        price: 60, 
        description: 'Famous for its intelligence and incredible ability to mimic human speech, the African Grey is often considered one of the most intelligent bird species. They are sensitive and form strong bonds with their owners.'
    },
    { 
        id: 9,
        name: 'Corrella', 
        image: 'assets/images/corrella.jpg', 
        price: 70, 
        description: 'The Cockatiel is an elegant, small parrot known for its expressive crest and charming whistle. Its one of the most popular pet birds due to its gentle nature and trainable temperament.'
    },
    { 
        id: 10,
        name: 'Red Tail Black Cockatoo', 
        image: 'assets/images/red-tail-black-cockatoo.jpg', 
        price: 80, 
        description: 'A large, striking parrot with black feathers and a beautiful red tail. Known for their impressive size and intelligence, they are rare and can be very vocal.'
    },
    {   
        id: 11,
        name: 'Alexandrines', 
        image: 'assets/images/alexandrines.jpg', 
        price: 90, 
        description: 'A larger species of parrot native to Asia, Alexandrines are known for their stunning green plumage and playful, talkative nature. They can be great pets, but they require a lot of attent'
    }
]