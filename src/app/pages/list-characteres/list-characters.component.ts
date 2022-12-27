import { Component, OnDestroy } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListDogsComponent implements OnDestroy {

  public characters: any = []
  public charactersSubscribe$: Subscription

  constructor(
    private charactersService: CharactersService
  ) {
    this.charactersSubscribe$ = this.charactersService.getCharacters()
    .subscribe((res) => this.characters = res)
   }

   ngOnDestroy(): void {
    this.charactersSubscribe$.unsubscribe();
  }

}
