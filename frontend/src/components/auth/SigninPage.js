import React from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';

const SigninPage = () =>  {
    return (
        <Base >
        <div className="login-form ">
    <form >
        <h2 class="text-center">Sign in</h2>		
        <div class="text-center social-btn">
			<Link class="btn btn-primary btn-block" to='/'><i class="fa fa-google"></i> Sign in with <b>Google</b></Link>
        </div>
		<div class="or-seperator"><i>or</i></div>
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
            <button type="submit" class="btn btn-success btn-block login-btn">Sign in</button>
        </div>
        <div class="clearfix">
            <label class="float-left form-check-label"><input type="checkbox"/> Remember me</label>
            <Link  class="float-right text-success">Forgot Password?</Link>
        </div>  
        
    </form>
    <div class="hint-text">Don't have an account? <Link class="text-success" to='/register'>Register Now!</Link></div>
</div>
    </Base>
    );
};

export default SigninPage;
