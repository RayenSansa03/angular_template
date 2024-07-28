
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl = 'http://localhost:3000'; // Remplacez cela par l'URL de votre API Node.js

  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  getCategoriesById(id: number) {
    return this.http.get(`${this.apiUrl}/categories/${id}`);
  }

 
  



  
  apiUrl1 = 'http://localhost:3000/jointure/images';

  // Méthode pour récupérer les données avec 3 paramètres
  getDataWithThreeParams(nomCategorie: string, nomChoixCategories: string, nomTypeChoix: string) {
    const params = {
      nomCategorie,
      nomChoixCategories,
      nomTypeChoix
    };
    return this.http.get<any>(`${this.apiUrl1}`, { params });
  }

  // Méthode pour récupérer les données avec 2 paramètres
  getDataWithTwoParams(nomCategorie: string, nomChoixCategories: string) {
    const params = {
      nomCategorie,
      nomChoixCategories
    };
    return this.http.get<any>(`${this.apiUrl1}`, { params });
  }




}



