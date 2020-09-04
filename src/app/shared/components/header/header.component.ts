import { Component, OnInit, HostListener } from '@angular/core';
import { map } from 'rxjs/operators';

import { CartService } from 'src/app/core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public installEvent = null;

  public total$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

  ngOnInit(): void {
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event): void {
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser(): void {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice
        .then(response => {
          console.log(response);
        });
    }
  }

}
