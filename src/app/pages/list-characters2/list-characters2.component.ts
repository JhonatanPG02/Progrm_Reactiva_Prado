import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-list-characters2',
  templateUrl: './list-characters2.component.html',
  styleUrls: ['./list-characters2.component.css']
})
export class ListCharacters2Component implements OnInit {

  public characters2$: Observable<any>

  constructor(
    private charactersService: CharactersService
  ) {
  }

  ngOnInit(): void {
    this.characters2$ = this.charactersService.getCharacters()
  }

}
