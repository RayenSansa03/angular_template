import { Component, OnInit } from '@angular/core';
import { ClientService } from 'services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  clients: any[] = [];
  client: any = {};

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService
      .getClients()
      .subscribe((clients) => (this.clients = clients));
  }

  getClient(id: string): void {
    this.clientService
      .getClient(id)
      .subscribe((client) => (this.client = client));
  }

  createClient(): void {
    this.clientService.createClient(this.client).subscribe((client) => {
      this.clients.push(client);
      this.client = {}; // Reset the form
    });
  }

  updateClient(id: string): void {
    this.clientService.updateClient(id, this.client).subscribe((client) => {
      const index = this.clients.findIndex((c) => c._id === id);
      if (index > -1) {
        this.clients[index] = client;
      }
    });
  }

  deleteClient(id: string): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.clients = this.clients.filter((c) => c._id !== id);
    });
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      console.log('Fichier sélectionné :', file);

      // Exemple de lecture du fichier en tant que texte
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const fileContent = e.target.result;
        console.log('Contenu du fichier :', fileContent);
      };
      reader.readAsText(file);
    }
  }
}
