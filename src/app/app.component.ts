import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
