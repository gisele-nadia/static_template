import { Component } from '@angular/core';
import { Newsletter } from "../newsletter/newsletter";

@Component({
  selector: 'app-aside',
  imports: [Newsletter],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {}
