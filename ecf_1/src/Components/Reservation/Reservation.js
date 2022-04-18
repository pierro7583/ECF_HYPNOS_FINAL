import React  from 'react'




export default function Reservation() {
 




  return (

    
    <div>


        <h1>Réservation</h1>

                          {/* CARD Biarritz */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img  src="/images/biarritz.jpg" class="card-img-top" alt="biarritz"/>
      <div className="card-body">
        <h5 className="card-title">Biarritz</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <button type="button" class="btn btn-primary openModalBtn" data-bs-toggle="modal" data-bs-target="#Modal-Biarritz" >Réserver</button>
    
    </div>
    
  </div>

 {/* CARD Chamonix */}
  <div className="col">
    <div className="card">
      <img  src="/images/chamonix-mont-blanc.jpg" class="card-img-top" alt="chamonix"/>
      <div className="card-body">
        <h5 className="card-title">Chamonix</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <button type="button" class="btn btn-primary openModalBtn" data-bs-toggle="modal" data-bs-target="#Modal-Chamonix"   >Réserver</button>
     
      
    </div>

  </div>

   {/* CARD Lille */}
  <div className="col">
    <div className="card">
      <img  src="/images/lille_home.jpg" class="card-img-top" alt="lille"/>
      <div className="card-body">
        <h5 className="card-title">Lille</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal-Lille" >Réserver</button>
    </div>
  </div>




   {/* CARD Nice */}
  <div className="col">
    <div className="card">
      <img  src="/images/Nice.jpg" class="card-img-top" alt="Nice"/>
      <div className="card-body">
        <h5 className="card-title">Nice</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal-Nice" >Réserver</button>
    </div>
  </div>



 {/* CARD Marseille */}
  <div className="col">
    <div className="card">
      <img  src="/images/Marseille.jpg" class="card-img-top" alt="Marseille"/>
      <div className="card-body">
        <h5 className="card-title">Marseille</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal-Marseille">Réserver</button>
    </div>
  </div>



   {/* CARD Plouescat */}
  <div className="col">
    <div className="card">
      <img  src="/images/Plouescat.jpg" class="card-img-top" alt="Plouescat"/>
      <div className="card-body">
        <h5 className="card-title">Plouescat</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal-Plouescat">Réserver</button>
    </div>
  </div>



 {/* CARD Strasbourg */}
  <div className="col">
    <div className="card">
      <img  src="/images/Strasbourg.jpg" class="card-img-top" alt="Strasbourg"/>
      <div className="card-body">
        <h5 className="card-title">Strasbourg</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal-Strasbourg">Réserver</button>
    </div>
  </div>
</div>



{/* <!-- Modal Biarritz --> */}
<div class="modal fade" id="Modal-Biarritz" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Biarritz
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


{/* <!-- Modal Chamonix --> */}
<div class="modal fade" id="Modal-Chamonix" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Chamonix
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


{/* <!-- Modal Lille --> */}
<div class="modal fade" id="Modal-Lille" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       Lille
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


{/* <!-- Modal Nice --> */}
<div class="modal fade" id="Modal-Nice" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       Nice
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



{/* <!-- Modal Marseille --> */}
<div class="modal fade" id="Modal-Marseille" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       Marseille
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


{/* <!-- Modal Plouescat --> */}
<div class="modal fade" id="Modal-Plouescat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       Plouescat
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


{/* <!-- Modal Strasbourg --> */}
<div class="modal fade" id="Modal-Strasbourg" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       Strasbourg
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>







    </div>
  )
}

