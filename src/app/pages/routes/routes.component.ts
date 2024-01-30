import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RouteService } from '../../services/route.service';
import { RouteModel } from '../../models/route.models';
import { DriverModel } from '../../models/driver.models';
import { VehicleModel } from '../../models/vehicles.models';
import { VehicleService } from '../../services/vehicle.service';
import { DriverService } from '../../services/driver.service';





@Component({
  selector: 'app-vehicle',
  templateUrl: './routes.component.html',
 
  
})
export class routesComponent implements OnInit {


  token
  p
  closeResult: string;
  routesM: RouteModel[] = [];
  routeM: RouteModel;
  driversM :DriverModel[]=[]
  driverM :DriverModel;
  vehiclesM:VehicleModel[]=[];
  vehicleM:VehicleModel;

  estado
  empresa_id
  rowIndexGlobal;
  Accion: string;
  totalElements
  limit
  pageNumber
  rows = [];
  temp = [];
  loading: boolean;
 

  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor(private _vehicles: VehicleService,private _drivers: DriverService,private _routes: RouteService, private modalService: NgbModal) { 
   let  token = JSON.parse(localStorage.getItem('token'));
    this.empresa_id=token.empresa_id
    this.routeM =new RouteModel(0,'',0,0,true);
    this.pageNumber=0;
    this.limit=25
    this.token= JSON.parse(localStorage.getItem('token'));
    this.token=this.token.token
    this.totalElements=0;
    this.getroutes(this.token);
    this.getvehicles(this.token);
    this.getdrivers(this.token);
  }
   
  
  ngOnInit() {
  }
  
  setPage(pageInfo) {
    console.log(pageInfo)
    this.getroutes(this.token);
    //this.pageNumber= pageInfo.
  }
  

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
   // console.log(val);

    // filter our data
    
    const temp = this.temp.filter(function (d) {
      return d.linNombre.toLowerCase().indexOf(val) !== -1 || !val;
    });

    console.log(temp);
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
    
  }


  openNuevo(content) {
    //console.log(event);   
    this.routeM = new RouteModel(0,'',0,0,true);
console.log(this.routeM)
    this.Accion = 'Nuevo';
    
    this.modalService.open(content,{ size: 'lg', backdrop: 'static' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  open(content,  id) {
    //console.log(event);
 
 this.getvehicle(id,this.token)

    this.Accion = 'Actualizar';

     
      this.estado = this.routeM.active;
    
    
    this.modalService.open(content,{ size: 'lg', backdrop: 'static' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  guardar(){    
    let typeMsm;
        let titleMsm;
        let textMsm;
   
if (this.routeM.id==0){
  this._routes.register(this.routeM,this.token).subscribe(
    (response) => {
      if (response.id!=undefined) {              
              typeMsm =  "success";                        
                 titleMsm = "La Ruta se registro correctamente.";             
              this.getroutes(this.token);
              textMsm = "";
              // para modal(cuando la transaccion es ok mando a recargar la grilla)
              this.modalService.dismissAll();
      } else {       
        typeMsm =  'error';
        titleMsm = 'Error al crear la Rutas.';
        textMsm = "success"
      }
      Swal.fire({
       customClass: {
         container: 'my-swal'
       },
       position: 'center',
       icon: typeMsm,
       title: titleMsm,
       text: textMsm,
       showConfirmButton: true
     });

      //Valida si es nuevo registro, inserta en la grilla; si ta existe actualiza la fila

  if ( this.Accion == 'Actualizar'){
    console.log('Actualizo!!!');
    this.rows[this.rowIndexGlobal] = this.routeM;
  }
  else{
    //this.rows[this.routesM.length] = this.routeM;
    console.log('Inserto!!!');
    this.rows.push(this.routeM);
    this.rows=[...this.rows]
  }
     
    },
    error => {
      typeMsm =  'error';
      titleMsm = 'Error al crear la Rutas.';
       textMsm = "Error verifique sus datos";
      Swal.fire({
        customClass: {
          container: 'my-swal'
        },
        position: 'center',
        icon: typeMsm,
        title: titleMsm,
        text: textMsm,
        showConfirmButton: true
      });
      console.log(<any>error);
    }
  );
}
else{//update
    this._routes.update(this.routeM,this.token).subscribe(
      (response) => {     
        console.log(response)
        if (response==null) {
                
                typeMsm =  "success";
              
                   titleMsm = "La Rutas se actualizo correctamente.";          
                  
              
              
                this.getroutes(this.token);
                textMsm = "";
                // para modal(cuando la transaccion es ok mando a recargar la grilla)
                this.modalService.dismissAll();
        } else {
         
          typeMsm =  'error';
          titleMsm = 'Error al crear la Rutas.';
          textMsm = "success"
        }
 
        Swal.fire({
         customClass: {
           container: 'my-swal'
         },
         position: 'center',
         icon: typeMsm,
         title: titleMsm,
         text: textMsm,
         showConfirmButton: true
       });
 
        //Valida si es nuevo registro, inserta en la grilla; si ta existe actualiza la fila

    if ( this.Accion == 'Actualizar'){
      console.log('Actualizo!!!');
      this.rows[this.rowIndexGlobal] = this.routeM;
    }
    else{
      //this.rows[this.routesM.length] = this.routeM;
      console.log('Inserto!!!');
      this.rows.push(this.routeM);
      this.rows=[...this.rows]
    }
       
      },
      error => {
        typeMsm =  'error';
        titleMsm = 'Error al crear la Rutas.';
         textMsm = "Error verifique sus datos";
        Swal.fire({
          customClass: {
            container: 'my-swal'
          },
          position: 'center',
          icon: typeMsm,
          title: titleMsm,
          text: textMsm,
          showConfirmButton: true
        });
        console.log(<any>error);
      }
    );
  }
    //
   
  } 


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  getvehicle(id,token) {
    this.loading = true;
    this._routes.getRoute(id,token).subscribe({
      next: response => {
        if (response!= undefined) {
          this.routeM  = response;         
          this.loading = false;    
        }
      },
      error: err => {
        console.log(err);
      },
      complete: () => {}
    });
    }

  getroutes(token) {
    this.loading = true;
    this._routes.getRoutes(token).subscribe({
      next: response => {
        if (response!= undefined) {
          this.routesM  = response;     
          this.rows =  this.routesM; 
          this.temp =  this.routesM;

          this.totalElements= response.totalElements;
          
          this.loading = false;
         console.log(this.routesM);
        }
      },
      error: err => {
        console.log(err);
      },
      complete: () => {}
    });
    }

    deleteroute(route) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading = true;
      this._routes.delete(route,this.token).subscribe({
        next: response => {
          if (response==null) {            
            this.loading = false;
            this.getroutes(this.token);
        
          }
        },
        error: err => {
          console.log(err);
        },
        complete: () => {}
      });
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
      

      }
      getdrivers(token) {
        this.loading = true;
        this._drivers.getDrivers(token).subscribe({
          next: response => {
            if (response!= undefined) {
              this.driversM  = response;     
              this.rows =  this.driversM; 
              this.temp =  this.driversM;
    
              this.totalElements= response.totalElements;
              
              this.loading = false;
             console.log(this.driversM);
            }
          },
          error: err => {
            console.log(err);
          },
          complete: () => {}
        });
        }
        getvehicles(token) {
          this.loading = true;
          this._vehicles.getVehicles(token).subscribe({
            next: response => {
              if (response!= undefined) {
                this.vehiclesM  = response;     
                this.rows =  this.vehiclesM; 
                this.temp =  this.vehiclesM;
      
                this.totalElements= response.totalElements;
                
                this.loading = false;
               console.log(this.vehiclesM);
              }
            },
            error: err => {
              console.log(err);
            },
            complete: () => {}
          });
          }
      
}
