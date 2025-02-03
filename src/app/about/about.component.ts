import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  whoAreWePicture = "assets/images/bird-in-wooden-hole.jpg"

  checkbox = "assets/images/check-box.png"

  reasonsPicture = "assets/images/orange-bird-with-colourful-spots-in-back.jpg"

  team = [
    {name: "Danny", status: "Founder", image: "assets/images/danny.png", description: "The visionary behind JustBirds, Danny established the company with a passion for connecting people with beautiful pet birds."},
    {name: "John", status: "CEO", image: "assets/images/john.jpg", description: "As the Chief Executive Officer, John leads the company’s growth, ensuring top-quality service and customer satisfaction."},
    {name: "Linda", status: "CFO", image: "assets/images/linda.png", description: "Overseeing the financial health of JustBirds, Linda manages budgeting, investments, and strategic financial planning."}
  ]

  reasons = [
    {heading: "Ethical & Responsible Breeding", description: "We partner with experienced breeders who prioritize bird health and well-being."},
    {heading: "Expert Care Advice", description: "Our team provides guidance on nutrition, training, and proper bird care."},
    {heading: "Safe & Secure Adoption", description: "We ensure a stress-free transition for both birds and owners."}
  ]
}
