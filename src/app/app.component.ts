import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello world!</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [
  //   `
  //     p {
  //       color: orange;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  name = 'swagata bose';
  imageURL = 'https://picsum.photos/id/237/500/500';
  images = [
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500',
  ];
  currentDate = new Date();
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['Bacon', 'Pepperoni'],
    size: 'Large',
  };
  blueClass = false;
  fontSize = 16;

  getName() {
    return this.name;
  }
  changeImage(e: KeyboardEvent) {
    this.imageURL = (e.target as HTMLInputElement).value;
  }
  logImg(event: string) {
    console.log(event);
  }
}
