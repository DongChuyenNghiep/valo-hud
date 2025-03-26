import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-mapinfo",
  templateUrl: "./mapinfo.component.html",
  styleUrls: ["./mapinfo.component.scss"],
})
export class MapinfoComponent implements OnChanges {
  @Input() map!: string;
  @Input() mapinfo!: any;
  @Input() index: number = -1; // ✅ Gán giá trị mặc định để tránh undefined
  type: "past" | "present" | "future" | "next" = "future";

  ngOnChanges(changes: SimpleChanges): void {
    console.log("🛠️ ngOnChanges triggered!");

    if (changes["mapinfo"]) {
      console.log("🔍 mapinfo:", this.mapinfo);
    }
    
    if (changes["index"]) {
      console.log("📌 index nhận được:", this.index);
    }

    this.type = this.mapinfo?.type || "future"; // Đảm bảo `mapinfo` không bị undefined
  }

  isDecider(): boolean {
    return this.type === "future" && this.index === 2;
  }
}
