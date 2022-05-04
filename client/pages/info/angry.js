import { useContext } from "react";
import { UserContext } from "../../context";

const Angry = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <div className="container-fluid bg-light bg-stresspage-image">
      <div className="row py-5">
        <div className="display-1 py-5 text-center">
          <h1 style={{ color: "#3c5153" }}>FURIE</h1>
        </div>
      </div>
      <div class="about-heading-content">
        <div class="row">
          <div class="col-xl-9 col-lg-10 mx-auto">
            <div class="bg-faded rounded p-5">
              <p>
                Stresul este o componenta inevitabila a vietii. Daca inveti cum
                sa-l gestionezi cu succes, iti poate imbunatati in mod
                semnificativ sanatatea mentala si fizica.
              </p>
              <p>
                Toti ne confruntam cu situatii de stres, insa fiecare foloseste
                exemple diferite pentru a-l descrie. Tu poate definesti stresul
                ca fiind traficul bara la bara, un termen strans de executie a
                unui proiect, o boala care iti provoaca griji sau o cearta cu
                partenerul. Un prieten il poate defini intr-un alt mod: o
                relatie care se degradeaza, necesitatea de a ingriji o persoana
                in suferinta sau o atentionare prin e-mail care anunta inca o
                factura neplatita.
              </p>
              <p>
                Daca ai fi insa un psiholog, ai eticheta aceste exemple drept
                factori de stres – adica diverse tipuri de evenimente si
                circumstante stresante. Si ai defini stresul intr-un mod mai
                precis, ca fiind un raspuns fizic automat in fata unor provocari
                sau a oricarei situatii care iti impune adaptarea la o
                schimbare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Angry;
