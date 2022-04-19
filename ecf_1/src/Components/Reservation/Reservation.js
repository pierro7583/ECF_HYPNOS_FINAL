import React from 'react'
import { useForm } from 'react-hook-form';





export default function Reservation() {



  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);



  return (


    <div>


      <h1>Réservation</h1>

      {/* CARD Biarritz */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src="/images/biarritz.jpg" class="card-img-top" alt="biarritz" />
            <div className="card-body">
              <h5 className="card-title">Biarritz</h5>
              <p className="card-text">Hypnos Biarritz est installé côté plage, au cœur de Biarritz.
              Lumineuses et spacieuses, les suites de l'établissement affichent un décor raffiné et bénéficient de tout le confort moderne avec une télévision 
              à écran plat et une connexion Wi-Fi gratuite.
               Chacune affiche une décoration magnifique conjuguant design et touches naturelles, et certaines possèdent également une grande terrasse.
              </p>
            </div>
            <button type="button" class="btn btn-primary openModalBtn" data-bs-toggle="modal" data-bs-target="#Modal-Biarritz" >Réserver</button>

          </div>

        </div>

        {/* CARD Chamonix */}
        <div className="col">
          <div className="card">
            <img src="/images/chamonix-mont-blanc.jpg" class="card-img-top" alt="chamonix" />
            <div className="card-body">
              <h5 className="card-title">Chamonix</h5>
              <p className="card-text">Décorées de couleurs vives, les suites standards 
              disposent du Wi-Fi gratuit et d'une télévision à écran plat. 
              Celles de catégorie supérieure comprennent en outre un coin salon ou un 
              espace de couchage en mezzanine. Les suites luxe de 2 chambres comportent un 
              espace de vie, un canapé 
              et une cuisine équipée d'un four à micro-ondes ainsi que d'une cave à vin.</p>
            </div>
            <button type="button" class="btn btn-primary openModalBtn" data-bs-toggle="modal" data-bs-target="#Modal-Chamonix"   >Réserver</button>


          </div>

        </div>

        {/* CARD Lille */}
        <div className="col">
          <div className="card">
            <img src="/images/lille_home.jpg" class="card-img-top" alt="lille" />
            <div className="card-body">
              <h5 className="card-title">Lille</h5>
              <p className="card-text">Situé sur la Grand-Place, dans le Vieux-Lille, 
              le Grand Hotel Hypnos occupe un bâtiment à l'architecture 
              flamande. Ses suites disposent d'une salle 
              de bains en marbre et de mobilier d'époque.
               La station de métro Rihour est accessible à 100 mètres. </p>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal-Lille" >Réserver</button>
          </div>
        </div>




        {/* CARD Nice */}
        <div className="col">
          <div className="card">
            <img src="/images/Nice.jpg" class="card-img-top" alt="Nice" />
            <div className="card-body">
              <h5 className="card-title">Nice</h5>
              <p className="card-text">Situé à Nice, à 1,2 km de la plage du Centenaire,
               l'Hôtel Hypnos Nice propose des suites luxueuses,
                un service d'enregistrement et de départ rapides, un bar, 
                une connexion Wi-Fi gratuite dans l'ensemble de ses locaux et un
                 salon commun. Cet hôtel 4 étoiles comporte un centre d’affaires et 
                 assure un service de concierge. Vous profiterez d’une réception 
                 ouverte 24h/24,
               d’un service d'étage et d’un bureau d’excursions.</p>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal-Nice" >Réserver</button>
          </div>
        </div>



        {/* CARD Marseille */}
        <div className="col">
          <div className="card">
            <img src="/images/Marseille.jpg" class="card-img-top" alt="Marseille" />
            <div className="card-body">
              <h5 className="card-title">Marseille</h5>
              <p className="card-text"> L’hôtel se trouve à quelques pas
               de la station de métro Vieux-Port - Hôtel de Ville. 
               Des arrêts de transports en commun desservant tous les 
               principaux sites d’intérêt de la ville se trouvent 
               le long de La Canebière, à 400 mètres.

C'est le quartier préféré des voyageurs visitant Marseille,
 selon les commentaires clients indépendants.

Les couples apprécient particulièrement l'emplacement de cet établissement.
 Ils lui donnent la note de 9,4 pour un séjour à deux.</p>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal-Marseille">Réserver</button>
          </div>
        </div>



        {/* CARD Plouescat */}
        <div className="col">
          <div className="card">
            <img src="/images/Plouescat.jpg" class="card-img-top" alt="Plouescat" />
            <div className="card-body">
              <h5 className="card-title">Plouescat</h5>
              <p className="card-text">Hypnos Plouescat vous acceuille les suites comprennent
               4 chambres, une télévision par satellite à écran 
              plat ainsi qu'une cuisine entièrement équipée et un spa.</p>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal-Plouescat">Réserver</button>
          </div>
        </div>



        {/* CARD Strasbourg */}
        <div className="col">
          <div className="card">
            <img src="/images/Strasbourg.jpg" class="card-img-top" alt="Strasbourg" />
            <div className="card-body">
              <h5 className="card-title">Strasbourg</h5>
              <p className="card-text">L'hôtel Hypnos Strasbourg se situe à 
              proximité du Parlement européen et à seulement 3 arrêts de tramway
               du centre-ville de Strasbourg. Vous aurez accès gratuitement à 
               la salle de sport et au sauna dans le centre de bien-être. 
               La connexion Wi-Fi est gratuite.

Les suites sont climatisées et insonorisées. 
Toutes offrent une vue sur le Parlement ou sur la cathédrale de Strasbourg.
 Certaines bénéficient également d'un accès direct au salon exécutif.</p>
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
              <h5 class="modal-title" id="exampleModalLabel">Biarritz</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">



              <p>Choix de la suite</p>
              <select class="form-select" aria-label="Default select example">

                <option selected>suite standard</option>
                <option value="1">suite junior</option>
                <option value="2">suite plus</option>
                <option value="3">suite luxe</option>
              </select>
              <p>Date Arrivée</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Arrivée" {...register("Arrivée", { required: true })} />



              </form>

              <p>Date de départ</p>


              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Départ" {...register("Départ", { required: true })} />


              </form>


            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
              <button type="submit" class="btn btn-primary">Réserver</button>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Modal Chamonix --> */}
      <div class="modal fade" id="Modal-Chamonix" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Chamonix</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">





              <p>Choix de la suite</p>
              <select class="form-select" aria-label="Default select example">

                <option selected>suite standard</option>
                <option value="1">suite junior</option>
                <option value="2">suite plus</option>
                <option value="3">suite luxe</option>
              </select>
              <p>Date Arrivée</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Arrivée" {...register("Arrivée", { required: true })} />

              </form>

              <p>Date de départ</p>


              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Départ" {...register("Départ", { required: true })} />


              </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
              <button type="button" class="btn btn-primary">Réserver</button>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Modal Lille --> */}
      <div class="modal fade" id="Modal-Lille" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Lille</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">




              <p>Choix de la suite</p>
              <select class="form-select" aria-label="Default select example">

                <option selected>suite standard</option>
                <option value="1">suite junior</option>
                <option value="2">suite plus</option>
                <option value="3">suite luxe</option>
              </select>
              <p>Date Arrivée</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Arrivée" {...register("Arrivée", { required: true })} />



              </form>

              <p>Date de départ</p>


              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Départ" {...register("Départ", { required: true })} />


              </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
              <button type="button" class="btn btn-primary">Réserver</button>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Modal Nice --> */}
      <div class="modal fade" id="Modal-Nice" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Nice</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <p>Choix de la suite</p>
              <select class="form-select" aria-label="Default select example">

                <option selected>suite standard</option>
                <option value="1">suite junior</option>
                <option value="2">suite plus</option>
                <option value="3">suite luxe</option>
              </select>
              <p>Date Arrivée</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Arrivée" {...register("Arrivée", { required: true })} />



              </form>

              <p>Date de départ</p>


              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Départ" {...register("Départ", { required: true })} />


              </form>
              <p></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
              <button type="button" class="btn btn-primary">Réserver</button>
            </div>
          </div>
        </div>
      </div>



      {/* <!-- Modal Marseille --> */}
      <div class="modal fade" id="Modal-Marseille" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Marseille</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <p>Choix de la suite</p>
              <select class="form-select" aria-label="Default select example">

                <option selected>suite standard</option>
                <option value="1">suite junior</option>
                <option value="2">suite plus</option>
                <option value="3">suite luxe</option>
              </select>
              <p>Date Arrivée</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Arrivée" {...register("Arrivée", { required: true })} />



              </form>

              <p>Date de départ</p>


              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Départ" {...register("Départ", { required: true })} />


              </form>
              <p></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
              <button type="button" class="btn btn-primary">Réserver</button>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Modal Plouescat --> */}
      <div class="modal fade" id="Modal-Plouescat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Plouescat</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Choix de la suite</p>
              <select class="form-select" aria-label="Default select example">

                <option selected>suite standard</option>
                <option value="1">suite junior</option>
                <option value="2">suite plus</option>
                <option value="3">suite luxe</option>
              </select>
              <p>Date Arrivée</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Arrivée" {...register("Arrivée", { required: true })} />



              </form>

              <p>Date de départ</p>


              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Départ" {...register("Départ", { required: true })} />


              </form>
              <p></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
              <button type="button" class="btn btn-primary">Réserver</button>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Modal Strasbourg --> */}
      <div class="modal fade" id="Modal-Strasbourg" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Strasbourg</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Choix de la suite</p>
              <select class="form-select" aria-label="Default select example">

                <option selected>suite standard</option>
                <option value="1">suite junior</option>
                <option value="2">suite plus</option>
                <option value="3">suite luxe</option>
              </select>
              <p>Date Arrivée</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Arrivée" {...register("Arrivée", { required: true })} />



              </form>

              <p>Date de départ</p>


              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="datetime-local" placeholder="Départ" {...register("Départ", { required: true })} />


              </form>
              <p></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
              <button type="button" class="btn btn-primary">Réserver</button>
            </div>
          </div>
        </div>
      </div>







    </div>
  )
}

