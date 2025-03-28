import { Component } from '@angular/core';
import { Instrumento } from 'src/app/interfaces/instrumento';
import { InstrumentoService } from 'src/app/services/instrumento.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  public rutaRelativa = 'det-instrumento';

  public listImgCarrusel:any[] = [
    {
    id:0,
    url:'https://expomusic.com.pe/wp-content/uploads/2022/01/slider-rokit.jpg',
    link:'#',
    marginLeft:0,
    },
    {
    id:1,
    url:'https://expomusic.com.pe/wp-content/uploads/2022/01/slider-minifuse.jpg',
    link:'#',
    marginLeft:0,
    },
    {
    id:2,
    url:'https://makemusic.pe/wp-content/uploads/2024/12/Banner-web-Envio-e-instalacion-gratis-2089x764.webp',
    link:'#',
    marginLeft:0,
    },
    {
    id:3,
    url:'https://audiomusica.vtexassets.com/assets/vtex.file-manager-graphql/images/c841a1e7-ce6e-4e89-9515-ef7e042f003b___fb6db0123b0532d6a36eb7a96df1498d.png',
    link:'#',
    marginLeft:0,
    },
  ]

  // PRODUCTOS MAS VENDIDOS
  public tituloProductosMasVendidos:string = 'Productos más vendidos';
  public listaProductosMasVendidos:Instrumento[] = [
    {
      idInstrumento: 30,
      nombre: "LP Tito Puente Timbales",
      imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/LPTitoPuenteTimbales.jpg",
      descripcion: "Timbal de acero inoxidable para música latina.",
      precio: 800.0,
      stock: 12,
      activo: true,
      fechaIngreso: "2024-11-24T05:00:00.000+00:00",
      categoria: {
          idCategoria: 12,
          nombre: "TIMBAL",
          descripcion: "TIMBAL"
      },
      marca: {
          idMarca: 15,
          nombre: "LP"
      }
    },
    {
      idInstrumento: 39,
        nombre: "Sennheiser EW 112P G4",
        imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/SennheiserEW112PG4.jpg",
        descripcion: "Micrófono inalámbrico de alta calidad.",
        precio: 2500.0,
        stock: 4,
        activo: true,
        fechaIngreso: "2024-11-24T05:00:00.000+00:00",
        categoria: {
            idCategoria: 17,
            nombre: "AUDIO",
            descripcion: "AUDIO"
        },
        marca: {
            idMarca: 25,
            nombre: "SENNHEISER"
        }
    },
    {
      idInstrumento: 10,
        nombre: "Pearl",
        imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraPearl.webp",
        descripcion: "Guitarra eléctrica de alta resonancia.",
        precio: 600.0,
        stock: 5,
        activo: true,
        fechaIngreso: "2024-11-24T05:00:00.000+00:00",
        categoria: {
            idCategoria: 1,
            nombre: "GUITARRA ELECTRICA",
            descripcion: "GUITARRA ELÉCTRICA"
        },
        marca: {
            idMarca: 5,
            nombre: "PEARL"
        }
    },
    {
      idInstrumento: 29,
        nombre: "Roland V-Drums TD-17KVX",
        imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/RolandV-DrumsTD-17KVX.jpg",
        descripcion: "Batería electrónica avanzada con múltiples configuraciones.",
        precio: 2500.0,
        stock: 8,
        activo: true,
        fechaIngreso: "2024-11-24T05:00:00.000+00:00",
        categoria: {
            idCategoria: 10,
            nombre: "BATERIA ELECTRICA",
            descripcion: "BATERÍA ELÉCTRICA"
        },
        marca: {
            idMarca: 21,
            nombre: "Roland"
        }
    },
    {
      idInstrumento: 17,
        nombre: "Ibanez GSR200",
        imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/BajoIbanezGSR200.webp",
        descripcion: "Bajo eléctrico versátil de Ibanez.",
        precio: 949.0,
        stock: 0,
        activo: true,
        fechaIngreso: "2024-11-24T05:00:00.000+00:00",
        categoria: {
            idCategoria: 3,
            nombre: "BAJO",
            descripcion: "BAJO"
        },
        marca: {
            idMarca: 3,
            nombre: "IBANEZ"
        }
    }
  ];


  // ULTIMOS AGREGADOS
  public tituloUltimosAgregados:string = 'Ultimos productos agregados';
  public listaUltimosAgregados:Instrumento[] = [
    {
      idInstrumento: 1,
      nombre: "Fender Player Anniversary",
      imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraFenderPlayerAnniversary.webp",
      descripcion: "Guitarra eléctrica de alta calidad.",
      precio: 3199.0,
      stock: 0,
      activo: true,
      fechaIngreso: "2024-11-24T05:00:00.000+00:00",
      categoria: {
          idCategoria: 1,
          nombre: "GUITARRA ELÉCTRICA",
          descripcion: "GUITARRA ELÉCTRICA"
      },
      marca: {
          idMarca: 1,
          nombre: "FERNDER"
      }
    },
    {
      idInstrumento: 2,
      nombre: "Gibson SG",
      imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraGibsonSG.webp",
      descripcion: "Guitarra Gibson estilo clásico.",
      precio: 7899.0,
      stock: 0,
      activo: true,
      fechaIngreso: "2024-11-24T05:00:00.000+00:00",
      categoria: {
          idCategoria: 1,
          nombre: "GUITARRA ELÉCTRICA",
          descripcion: "GUITARRA ELÉCTRICA"
      },
      marca: {
          idMarca: 2,
          nombre: "GIBSON"
      }
    },
    {
      idInstrumento: 3,
      nombre: "Yamaha Pacifica",
      imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraYamahaPacifica.webp",
      descripcion: "Guitarra eléctrica Yamaha profesional.",
      precio: 1999.0,
      stock: 0,
      activo: true,
      fechaIngreso: "2024-11-24T05:00:00.000+00:00",
      categoria: {
          idCategoria: 1,
          nombre: "GUITARRA ELÉCTRICA",
          descripcion: "GUITARRA ELÉCTRICA"
      },
      marca: {
          idMarca: 4,
          nombre: "YAMAHA"
      }
    },
    {
      idInstrumento: 4,
      nombre: "Pearl Custom",
      imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraPearlCustom.webp",
      descripcion: "Guitarra eléctrica Pearl edición limitada.",
      precio: 3399.0,
      stock: 0,
      activo: true,
      fechaIngreso: "2024-11-24T05:00:00.000+00:00",
      categoria: {
          idCategoria: 1,
          nombre: "GUITARRA ELÉCTRICA",
          descripcion: "GUITARRA ELÉCTRICA"
      },
      marca: {
          idMarca: 5,
          nombre: "PEARL"
      }
    },
    {
      idInstrumento: 5,
      nombre: "Ibanez Jem",
      imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraIbanezJem.webp",
      descripcion: "Guitarra Ibanez diseño moderno.",
      precio: 8599.0,
      stock: 0,
      activo: true,
      fechaIngreso: "2024-11-24T05:00:00.000+00:00",
      categoria: {
          idCategoria: 1,
          nombre: "GUITARRA ELÉCTRICA",
          descripcion: "GUITARRA ELÉCTRICA"
      },
      marca: {
          idMarca: 3,
          nombre: "IBANEZ"
      }
    }
  ];

  // PROMOCIONES
  public tituloPromociones:string = 'En oferta!';
  public listaPromociones:Instrumento[] = [
    {
      idInstrumento: 1,
      nombre: "Fender Player Anniversary",
      imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraFenderPlayerAnniversary.webp",
      descripcion: "Guitarra eléctrica de alta calidad.",
      precio: 3199.0,
      stock: 0,
      activo: true,
      fechaIngreso: "2024-11-24T05:00:00.000+00:00",
      categoria: {
          idCategoria: 1,
          nombre: "GUITARRA ELÉCTRICA",
          descripcion: "GUITARRA ELÉCTRICA"
      },
      marca: {
          idMarca: 1,
          nombre: "FERNDER"
      }
    },
    {
      idInstrumento: 2,
      nombre: "Gibson SG",
      imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraGibsonSG.webp",
      descripcion: "Guitarra Gibson estilo clásico.",
      precio: 7899.0,
      stock: 0,
      activo: true,
      fechaIngreso: "2024-11-24T05:00:00.000+00:00",
      categoria: {
          idCategoria: 1,
          nombre: "GUITARRA ELÉCTRICA",
          descripcion: "GUITARRA ELÉCTRICA"
      },
      marca: {
          idMarca: 2,
          nombre: "GIBSON"
      }
    },
    {
      idInstrumento: 3,
      nombre: "Yamaha Pacifica",
      imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraYamahaPacifica.webp",
      descripcion: "Guitarra eléctrica Yamaha profesional.",
      precio: 1999.0,
      stock: 0,
      activo: true,
      fechaIngreso: "2024-11-24T05:00:00.000+00:00",
      categoria: {
          idCategoria: 1,
          nombre: "GUITARRA ELÉCTRICA",
          descripcion: "GUITARRA ELÉCTRICA"
      },
      marca: {
          idMarca: 4,
          nombre: "YAMAHA"
      }
    },
    {
      idInstrumento: 4,
      nombre: "Pearl Custom",
      imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraPearlCustom.webp",
      descripcion: "Guitarra eléctrica Pearl edición limitada.",
      precio: 3399.0,
      stock: 0,
      activo: true,
      fechaIngreso: "2024-11-24T05:00:00.000+00:00",
      categoria: {
          idCategoria: 1,
          nombre: "GUITARRA ELÉCTRICA",
          descripcion: "GUITARRA ELÉCTRICA"
      },
      marca: {
          idMarca: 5,
          nombre: "PEARL"
      }
    },
    {
      idInstrumento: 5,
      nombre: "Ibanez Jem",
      imagen: "https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraIbanezJem.webp",
      descripcion: "Guitarra Ibanez diseño moderno.",
      precio: 8599.0,
      stock: 0,
      activo: true,
      fechaIngreso: "2024-11-24T05:00:00.000+00:00",
      categoria: {
          idCategoria: 1,
          nombre: "GUITARRA ELÉCTRICA",
          descripcion: "GUITARRA ELÉCTRICA"
      },
      marca: {
          idMarca: 3,
          nombre: "IBANEZ"
      }
    }
  ];


  public currentPosition = 0;

  constructor (
    private _instrumentosService:InstrumentoService
  ){
  }

  listarUltimosProductosAgregados(){
    this._instrumentosService.listarInstrumentos().subscribe(data => {
      // Ordenar los productos por fechaIngreso de forma descendente
      const productosOrdenados = data.sort((a, b) => {
        const fechaA = new Date(a.fechaIngreso).getTime();
        const fechaB = new Date(b.fechaIngreso).getTime();
        return fechaB - fechaA; // De más reciente a más antiguo
      });

      // Limitar la lista a los primeros 6 productos
      this.listaUltimosAgregados = productosOrdenados.slice(0, 6);
    });
  }


  ngOnInit(){
    this.listImgCarrusel.map((i, index) => {
    })

    this.listarUltimosProductosAgregados();
    // this.productosMasVendidos()
  }

  setCurrentPosition(position:number){
    this.currentPosition = position
    this.listImgCarrusel.find(i => i.id === 0).marginLeft = -100 * position;
  }

  setNext(){
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if(nextPosition <= this.listImgCarrusel.length-1){
      finalPercentage = -100 * nextPosition;
    }
    else{
      nextPosition = 0;
    }
    this.listImgCarrusel.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack(){
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if(backPosition >= 0){
      finalPercentage = -100 * backPosition;
    }
    else{
      backPosition = this.listImgCarrusel.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.listImgCarrusel.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  }

}
