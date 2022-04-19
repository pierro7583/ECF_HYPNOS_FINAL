import React from 'react'

export default function Sinscrire() {
  return (
    <div>
        <h1>S'inscrire</h1>


        <div class="mb-3 box">
  <label for="exampleFormControlInput1" class="form-label">Adresse email</label>
  <input type="email" class="form-control" id="Input_Email" placeholder="name@example.com"/>
</div>

<div class="mb-3 box">
  <label for="exampleFormControlInput1" class="form-label">Mot de passe</label>
  <input type="text" class="form-control" id="Input_Prénom" placeholder=""/>
</div>

<div class="mb-3 box">
  <label for="exampleFormControlInput1" class="form-label"> Comfirmation Mot de passe</label>
  <input type="text" class="form-control" id="Input_Prénom" placeholder=""/>
</div>


<button type="button" class="btn btn-primary">S'inscrire</button>

    </div>
  )
}
