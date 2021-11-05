import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  estadoModal = false;
  keyListener: any = null;

  abrirModal(){
    this.estadoModal = true;
    this.apertarEsc();
  }

  fecharModal(){
    this.estadoModal = false;
    document.body.removeEventListener("keyup", this.keyListener);
  }

  apertarEsc(){
    this.keyListener = document.body.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        this.fecharModal();
      }
    })
  }

  clickFora(e:any){
    if (e.target.classList.contains("modal")){
      this.fecharModal();
    }
  }

}