
import React from "react";




export default function Nouscontacter() {
  return (
    <div>
        <h1>Nous contacter</h1>
        <div class="mb-3 box">
  <label for="exampleFormControlInput1" class="form-label">Nom</label>
  <input type="text" class="form-control" id="Input_Nom" placeholder="Votre Nom"/>
</div>
<div class="mb-3 box">
  <label for="exampleFormControlInput1" class="form-label">Prénom</label>
  <input type="text" class="form-control" id="Input_Prénom" placeholder="Votre Prénom"/>
</div>

        <div class="mb-3 box">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="Input_Email" placeholder="name@example.com"/>
</div>
<div class="mb-3 box">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="Input_Text" rows="3"></textarea>
</div>

<button type="button" class="btn btn-primary">Primary</button>


    </div>
  )
}
