import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MetodoPago } from 'src/app/interfaces/metodoPago';
import { MetodoPagoService } from 'src/app/services/metodo-pago.service';
import { VentaService } from 'src/app/services/venta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-registrar-venta',
  templateUrl: './modal-registrar-venta.component.html',
  styleUrls: ['./modal-registrar-venta.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ModalRegistrarVentaComponent implements OnInit {

  public listadoMetodoDePago!: MetodoPago[];

  public formularioRegistrar = new FormGroup({
    metodoPagoId: new FormControl('', [Validators.required]),
  })

  constructor(
    private _metodoPagoservice: MetodoPagoService,
    private _ventaService: VentaService
  ){}

  ngOnInit(): void {


    this.listarMetodoPago()

  }

  listarMetodoPago(){
    this._metodoPagoservice.listarMetodoPago().subscribe(data => this.listadoMetodoDePago = data)
  }

  vender(idUsuario:number, idMetodoPago:number){
    this._ventaService.confirmarVenta(idUsuario, idMetodoPago).subscribe(data => {
    })
  }

  onSubmit() {
    let usuario = JSON.parse(localStorage.getItem('usuario')!);

    if (this.formularioRegistrar.invalid) {
      alert("Formulario no válido");
      return;
    }

    const metodoPagoId = this.formularioRegistrar.get('metodoPagoId')?.value;

    this.vender(usuario.idUsuario, Number.parseInt(metodoPagoId!));

    Swal.fire({
      title: '¡Compra confirmada!',
      text: 'Tu compra ha sido procesada correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });


  }

}
