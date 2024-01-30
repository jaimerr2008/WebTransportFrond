import { Component ,EventEmitter,Output} from '@angular/core';
import Swal from 'sweetalert2';
 
import { UserModel } from '../../models/User.models';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.components.html'
})

export class loginComponents {
  
  @Output()
  propagar = new EventEmitter<string>();
  public json ;
  public user: UserModel;
  public token;
  constructor(private _userServices: UserService) {
    this.user = new UserModel(0, '', '', true);
    }

    ngOnInit() {
  

      
    }
    logear(){

    this._userServices.singup(this.user).subscribe(
      response => {
          //tokken
          
          
          //console.log(response.empresa_id);
          if ( response.status != 'error' ) {
            this.token = response.token; 

            this.json=JSON.stringify(response) 
           
            
            localStorage.setItem( 'token', this.json);
            //  this._router.navigate(['menu']);
           // console.log(this.token);
            this.propagar.emit('si');
      
           }
           else { 
            Swal.fire({
              customClass: {
                container: 'my-swal'
              },
              position: 'center',
              icon: 'error',
              title: 'Error ',
              text: "Datos incorrectos",
              showConfirmButton: true
            });
           }

      },
      error =>{
          console.log(<any>error);
      }

  );
    }
    alerta(mensaje){
    
  
     
    }
}
