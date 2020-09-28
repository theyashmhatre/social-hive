import React from 'react';
import Base from '../core/Base';
import { Link} from "react-router-dom";

export default function RegisterPage() {
    return (
        <Base >
       <div class="login-form ">
    <form action="/examples/actions/confirmation.php" method="post">
        <h2 class="text-center">Register</h2>		
        <div class="text-center social-btn">
            
			<Link class="btn btn-primary btn-block" to='/'><i class="fa fa-google"></i> Register with <b>Google</b></Link>
        </div>
		<div class="or-seperator"><i>or</i></div>
    <div class="form-group">
        	<div class="input-group">                
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <span class="fa fa-envelope"></span>
                    </span>                    
                </div>
                <input type="text" class="form-control" name="email" placeholder="email" required="required"/>
            </div>
        </div>
        <div class="form-group">
        	<div class="input-group">                
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <span class="fa fa-user"></span>
                    </span>                    
                </div>
                <input type="text" class="form-control" name="username" placeholder="Username" required="required"/>
            </div>
        </div>
		<div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <i class="fa fa-lock"></i>
                    </span>                    
                </div>
                <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
            </div>
        </div>        
        <div class="form-group">
            <button type="submit" class="btn btn-success btn-block login-btn">Register</button>
        </div>
     
        
    </form>
    
</div>
        </Base>
    )
}
