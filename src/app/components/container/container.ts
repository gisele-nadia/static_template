import { Component } from '@angular/core';
import { Main } from "../main/main";
import { Aside } from "../aside/aside";

@Component({
  selector: 'app-container',
  imports: [Main, Aside],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {}
