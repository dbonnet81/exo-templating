import {Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'sp-popin',
  templateUrl: './popin.component.html',
  styleUrls: ['./popin.component.scss']
})
export class PopinComponent implements OnInit {

  constructor(private render: Renderer2, private spPopin : ElementRef) { }

  @ViewChild('divPopin') divPopin : ElementRef;
  @Output() exit = new EventEmitter<void>();

  ngOnInit() {
    this.render.listen(this.divPopin.nativeElement, 'click', e => {
      e.stopPropagation();
    });
    this.render.listen(this.spPopin.nativeElement, 'click', e => {
      this.exit.emit();
    });

    this.render.listen(document, 'keydown.escape', e => {
      console.log(e);
        this.exit.emit();
    });
  }


}
