import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Suggestion } from '../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  apiUrl='/api/suggestions/';
  constructor(private http: HttpClient) { }

  getSuggestions(){
    return this.http.get(this.apiUrl);
  }
  getSuggestionById(id: number){
    return this.http.get(this.apiUrl + id);
  }
  addSuggestion(suggestion: Suggestion){
    return this.http.post(this.apiUrl, suggestion);
  }
  updateSuggestion(id: number, suggestion: Suggestion){
    return this.http.put(this.apiUrl + id, suggestion);
  }
  deleteSuggestion(id: number){
    return this.http.delete(this.apiUrl + id);
  }
}

