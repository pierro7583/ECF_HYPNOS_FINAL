
import React from "react";




export default function Nouscontacter() {
  return (
    <div>
      <h1>Nous contacter</h1>
<div className="mb-3 box" >

<select class="form-select" aria-label="Default select example">

<option selected> Je souhaite poser une réclamation</option>
<option value="1"> Je souhaite commander un service supplémentaire</option>
<option value="2">Je souhaite en savoir plus sur une suite
</option>
<option value="3">J’ai un souci avec cette application</option>
</select>

</div>


      <div className="mb-3 box">
        <label for="exampleFormControlInput1" class="form-label">Nom</label>
        <input type="text" class="form-control" id="Input_Nom" placeholder="Votre Nom" />
      </div>
      <div className="mb-3 box">
        <label for="exampleFormControlInput1" class="form-label">Prénom</label>
        <input type="text" class="form-control" id="Input_Prénom" placeholder="Votre Prénom" />
      </div>

      <div className="mb-3 box">
        <label for="exampleFormControlInput1" class="form-label">Adresse email</label>
        <input type="email" class="form-control" id="Input_Email" placeholder="name@example.com" />
      </div>
      <div className="mb-3 box">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea className="form-control" id="Input_Text" rows="3"></textarea>
      </div>

      <button type="button" class="btn btn-primary">Envoyé</button>


    </div>
  )
}
