import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-app';

ngAfterViewInit(): void {
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader')
    loader?.classList.add('opacity-0')
    if(loader){
    setTimeout(() => {
        loader.style.display = 'none';
      }, 500);}
  });
}

}
