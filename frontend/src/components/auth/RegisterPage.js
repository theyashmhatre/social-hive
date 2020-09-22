import React from 'react';
import Base from '../core/Base';

export default function RegisterPage() {
    return (
        <Base >
        <div className="container">
        <form className="needs-validation" novalidate>
        <div className="form-group">
        <label for="uname">Username:</label>
        <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required></input>
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
</div>
<div className="form-group">

<label for="pwd">Password:</label>
<input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required></input>
<div className="valid-feedback">Valid.</div>
  <div className="invalid-feedback">Please fill out this field.</div>
  
</div>
<div className="form-group form-check">
<label className="form-check-label">
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Check this checkbox to continue.</div>
  </label>
</div>

<button type="submit" className="btn btn-primary">Submit</button>
        </form>
</div>
        </Base>
    )
}
/* <form action="/action_page.php" className="needs-validation" novalidate>
<div className="form-group">
  <label for="uname">Username:</label>
  <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required>
  <div className="valid-feedback">Valid.</div>
  <div className="invalid-feedback">Please fill out this field.</div>
</div>
<div className="form-group">
  <label for="pwd">Password:</label>
  <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required>
  <div className="valid-feedback">Valid.</div>
  <div className="invalid-feedback">Please fill out this field.</div>
</div>
<div className="form-group form-check">
  <label className="form-check-label">
    <input class="form-check-input" type="checkbox" name="remember" required> I agree on blabla.
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Check this checkbox to continue.</div>
  </label>
</div>
<button type="submit" claclassNamess="btn btn-primary">Submit</button>
</form> */