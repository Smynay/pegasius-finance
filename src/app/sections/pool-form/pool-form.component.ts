import { Component, OnInit } from "@angular/core";

import { PoolsService } from "src/app/services/api/pools.service";

import { Pool } from "src/app/models/pool";

@Component({
  selector: "app-pool-form",
  templateUrl: "./pool-form.component.html",
  styleUrls: ["./pool-form.component.scss"],
})
export class PoolFormComponent implements OnInit {
  poolToShow: Pool;

  constructor(private poolsService: PoolsService) {}

  async ngOnInit(): Promise<void> {
    const response = await this.poolsService.getAll();

    this.poolToShow = response[0];
  }
}
