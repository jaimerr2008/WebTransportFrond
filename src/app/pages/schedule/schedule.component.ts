import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RouteService } from '../../services/route.service';
import { ScheduleModel } from '../../models/schedule.models';
import { DriverModel } from '../../models/driver.models';
import { VehicleModel } from '../../models/vehicles.models';
import { VehicleService } from '../../services/vehicle.service';
import { DriverService } from '../../services/driver.service';
import { routesComponent } from '../routes/routes.component';
import { ScheduleService } from '../../services/schedule.service';
import { RouteModel } from '../../models/route.models';





@Component({
  selector: 'app-vehicle',
  templateUrl: './schedule.component.html',
 
  
})
export class ScheduleComponent implements OnInit {


  token
  p
  closeResult: string;
  shedulesM: ScheduleModel[] = [];
  sheduleM: ScheduleModel;
  routesM :RouteModel[]=[]
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

  constructor(private _schedule: ScheduleService,private _routes: RouteService, private modalService: NgbModal) { 
   let  token = JSON.parse(localStorage.getItem('token'));
    this.empresa_id=token.empresa_id
    this.sheduleM =new ScheduleModel(0,0,0,'','',true);
    this.pageNumber=0;
    this.limit=25
    this.token= JSON.parse(localStorage.getItem('token'));
    this.token=this.token.token
    this.totalElements=0;
    this.getshedules(this.token);
 this.getroutes1(this.token);
  }
   
  
  ngOnInit() {
  }
  
  setPage(pageInfo) {
    console.log(pageInfo)
    this.getshedules(this.token);
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
    this.sheduleM = new ScheduleModel(0,0,0,'','',true);
console.log(this.sheduleM)
    this.Accion = 'Nuevo';
    
    this.modalService.open(content,{ size: 'lg', backdrop: 'static' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  open(content,  id) {
    //console.log(event);
 

    this.Accion = 'Actualizar';

     
      this.estado = this.sheduleM.active;
    
    
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
   
if (this.sheduleM.id==0){
  this._schedule.register(this.sheduleM,this.token).subscribe(
    (response) => {
      if (response.id!=undefined) {              
              typeMsm =  "success";                        
                 titleMsm = "La Programacion se registro correctamente.";             
              this.getshedules(this.token);
              textMsm = "";
              // para modal(cuando la transaccion es ok mando a recargar la grilla)
              this.modalService.dismissAll();
      } else {       
        typeMsm =  'error';
        titleMsm = 'Error al crear la Programacions.';
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
    this.rows[this.rowIndexGlobal] = this.sheduleM;
  }
  else{
    //this.rows[this.shedulesM.length] = this.sheduleM;
    console.log('Inserto!!!');
    this.rows.push(this.sheduleM);
    this.rows=[...this.rows]
  }
     
    },
    error => {
      typeMsm =  'error';
      titleMsm = 'Error al crear la Programacions.';
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
    this._schedule.update(this.sheduleM,this.token).subscribe(
      (response) => {     
        console.log(response)
        if (response==null) {
                
                typeMsm =  "success";
              
                   titleMsm = "La Programacions se actualizo correctamente.";          
                  
              
              
                this.getshedules(this.token);
                textMsm = "";
                // para modal(cuando la transaccion es ok mando a recargar la grilla)
                this.modalService.dismissAll();
        } else {
         
          typeMsm =  'error';
          titleMsm = 'Error al crear la Programacions.';
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
      this.rows[this.rowIndexGlobal] = this.sheduleM;
    }
    else{
      //this.rows[this.shedulesM.length] = this.sheduleM;
      console.log('Inserto!!!');
      this.rows.push(this.sheduleM);
      this.rows=[...this.rows]
    }
       
      },
      error => {
        typeMsm =  'error';
        titleMsm = 'Error al crear la Programacions.';
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
  

  getshedules(token) {
    this.loading = true;
    this._schedule.getSchedules(token).subscribe({
      next: response => {
        if (response!= undefined) {
          this.shedulesM  = response;     
          this.rows =  this.shedulesM; 
          this.temp =  this.shedulesM;

          this.totalElements= response.totalElements;
          
          this.loading = false;
         console.log(this.shedulesM);
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
      this._schedule.delete(route,this.token).subscribe({
        next: response => {
          if (response==null) {            
            this.loading = false;
            this.getshedules(this.token);
        
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
      getroutes1(token) {
        this.loading = true;
        this._routes.getRoutes(token).subscribe({
          next: response => {
            if (response!= undefined) {
              this.routesM  = response;     
            
    
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
      
      
}
