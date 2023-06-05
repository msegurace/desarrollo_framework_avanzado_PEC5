import { Component, OnInit } from '@angular/core';
import { ApiResponse, Character } from 'src/app/models/api-response';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  private apiResponse?: ApiResponse;
  characters: Character[] = [];

  constructor(private characterService: CharactersService) {
    
  }

  ngOnInit(): void {
    const response = this.characterService.getAllCharacters().subscribe((api) => {
      console.log(api); 
      this.apiResponse! = api;
    });
    //this.characters = this.apiResponse!.data.results;
  }

}
