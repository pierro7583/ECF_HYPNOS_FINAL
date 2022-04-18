import React , {useState} from 'react'
import Modal from "./Modal";
import "./Modal.css";

export default function Reservation() {
  const [modalOpen, setModalOpen] = useState(false);

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
      <button type="button" class="btn btn-primary openModalBtn" onClick={() => {setModalOpen(true); }}>Réserver</button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
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
      <button type="button" class="btn btn-primary" >Réserver</button>
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
      <button type="button" class="btn btn-primary">Réserver</button>
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
      <button type="button" class="btn btn-primary">Réserver</button>
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
      <button type="button" class="btn btn-primary">Réserver</button>
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
      <button type="button" class="btn btn-primary">Réserver</button>
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
      <button type="button" class="btn btn-primary">Réserver</button>
    </div>
  </div>
</div>

    </div>
  )
}

