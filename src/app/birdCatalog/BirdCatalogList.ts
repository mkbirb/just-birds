
export interface bird {
  name: string;
  image: string;
  price: number;
}


export const BIRDCATALOGLIST: bird[] = [

    { name: 'Budgie', image: 'assets/images/budgie.jpg', price: 80},
    { name: 'Cockatiel', image: 'assets/images/cockatiel.jpg', price: 70},
    { name: 'Lovebird', image: 'assets/images/lovebird.jpg' , price: 65},
    { name: 'Canary', image: 'assets/images/canary.jpg', price: 55},
    { name: 'Finch', image: 'assets/images/orange-black-finch.jpg', price: 70},
    { name: 'Meyers Parrot', image: 'assets/images/meyers-parrot.jpg', price: 75},
    { name: 'Pionus Parrot', image:'assets/images/pionus-parrot.jpg', price: 85}
]