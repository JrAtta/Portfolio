import { Component, OnInit } from '@angular/core';
import { Iproject } from '../../iproject';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {

    projects: Iproject[] = [];

  constructor(private _ProjectsService:ProjectsService) {}

  ngOnInit(): void {
    this.projects = this._ProjectsService.projects
  }
}
