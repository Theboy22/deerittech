import React, { useState, useEffect } from 'react';
import '../../styles/Career.css';
import Preloader from '../../components/Preloader';

// Sample state-LGA data
const stateLgaData = {
  Abia: ['Aba North', 'Aba South', 'Umuahia North', 'Umuahia South', 'Isiala Ngwa North', 'Isiala Ngwa South', 'Bende', 'Ohafia', 'Arochukwu'],
  Adamawa: ['Yola North', 'Yola South', 'Mubi North', 'Mubi South', 'Ganye', 'Numan', 'Gombi', 'Maiha', 'Hong'],
  AkwaIbom: ['Uyo', 'Ikot Ekpene', 'Eket', 'Oron', 'Abak', 'Itu', 'Etinan', 'Ibeno'],
  Anambra: ['Awka North', 'Awka South', 'Onitsha North', 'Onitsha South', 'Nnewi North', 'Nnewi South', 'Idemili North', 'Idemili South'],
  Bauchi: ['Bauchi', 'Katagum', 'Misau', 'Jama’are', 'Tafawa Balewa', 'Itas/Gadau'],
  Bayelsa: ['Yenagoa', 'Ogbia', 'Brass', 'Ekeremor', 'Kolokuma/Opokuma', 'Nembe', 'Sagbama', 'Southern Ijaw'],
  Benue: ['Makurdi', 'Gboko', 'Otukpo', 'Katsina-Ala', 'Guma', 'Logo', 'Ogbadibo'],
  Borno: ['Maiduguri', 'Biu', 'Damboa', 'Monguno', 'Jere', 'Kaga', 'Ngala'],
  CrossRiver: ['Calabar Municipal', 'Calabar South', 'Ogoja', 'Obudu', 'Ikom', 'Yakurr'],
  Delta: ['Oshimili North', 'Oshimili South', 'Sapele', 'Warri South', 'Ethiope West', 'Udu', 'Ughelli North'],
  Ebonyi: ['Abakaliki', 'Afikpo North', 'Ebonyi', 'Ohaukwu', 'Ezza North', 'Izzi'],
  Edo: ['Oredo', 'Ikpoba-Okha', 'Egor', 'Esan Central', 'Ovia North-East', 'Ovia South-West'],
  Ekiti: ['Ado Ekiti', 'Ikere', 'Ise/Orun', 'Ijero', 'Ikole', 'Irepodun/Ifelodun'],
  Enugu: ['Enugu East', 'Enugu North', 'Nsukka', 'Udi', 'Awgu'],
  Gombe: ['Gombe', 'Akko', 'Billiri', 'Kaltungo', 'Yamaltu/Deba'],
  Imo: ['Owerri Municipal', 'Owerri North', 'Owerri West', 'Orlu', 'Okigwe', 'Mbaitoli'],
  Jigawa: ['Dutse', 'Hadejia', 'Gumel', 'Kazaure', 'Birnin Kudu'],
  Kaduna: ['Kaduna North', 'Kaduna South', 'Zaria', 'Sabon Gari', 'Chikun', 'Igabi'],
  Kano: ['Nassarawa', 'Tarauni', 'Dala', 'Fagge', 'Gwale', 'Kumbotso'],
  Katsina: ['Katsina', 'Daura', 'Funtua', 'Malumfashi', 'Mani'],
  Kebbi: ['Birnin Kebbi', 'Argungu', 'Yauri', 'Zuru', 'Jega'],
  Kogi: ['Lokoja', 'Idah', 'Dekina', 'Kabba/Bunu', 'Okene'],
  Kwara: ['Ilorin East', 'Ilorin West', 'Ilorin South', 'Offa', 'Oyun', 'Edu'],
  Lagos: ['Ikeja', 'Epe', 'Ikorodu', 'Surulere', 'Alimosho', 'Eti-Osa', 'Badagry'],
  Nasarawa: ['Lafia', 'Keffi', 'Akwanga', 'Nasarawa Egon', 'Doma'],
  Niger: ['Minna', 'Bida', 'Suleja', 'Kontagora', 'Lapai'],
  Ogun: ['Abeokuta North', 'Abeokuta South', 'Ijebu Ode', 'Sagamu', 'Ifo', 'Ado-Odo/Ota'],
  Ondo: ['Akure South', 'Akure North', 'Owo', 'Ondo West', 'Irele'],
  Osun: ['Osogbo', 'Ilesa East', 'Ife Central', 'Ejigbo', 'Ede North'],
  Oyo: ['Ibadan North', 'Ibadan South-West', 'Ibadan South-East', 'Ogbomosho North', 'Oyo East'],
  Plateau: ['Jos North', 'Jos South', 'Barkin Ladi', 'Pankshin', 'Langtang North'],
  Rivers: ['Obio-Akpor', 'Port Harcourt', 'Eleme', 'Bonny', 'Ahoada East'],
  Sokoto: ['Sokoto North', 'Sokoto South', 'Wamakko', 'Bodinga', 'Tambuwal'],
  Taraba: ['Jalingo', 'Wukari', 'Bali', 'Takum', 'Gassol'],
  Yobe: ['Damaturu', 'Potiskum', 'Nguru', 'Gashua', 'Geidam'],
  Zamfara: ['Gusau', 'Kaura Namoda', 'Anka', 'Maru', 'Talata Mafara'],
  FCT: ['Abaji', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali', 'Municipal']
};
function Career() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState('');
  const [lgas, setLgas] = useState([]);
  

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setLgas(stateLgaData[state] || []);
  };

  if (loading) return <Preloader />;

  return (
    <div className="career-page">
      <section className="career-hero">
        <h1>Join Our Team</h1>
        <p>We're building a future of innovation. Grow your career with us.</p>
      </section>

      <section className="career-openings">
        <h2>Open Roles</h2>
        <div className="role-list">
          <div className="role-card">
            <h3>Frontend Developer</h3>
            <p>React, HTML, CSS, JavaScript</p>
            <button onClick={handleOpenModal}>Apply Now</button>
          </div>
          <div className="role-card">
            <h3>Backend Developer</h3>
            <p>Node.js, MongoDB, REST APIs</p>
            <button onClick={handleOpenModal}>Apply Now</button>
          </div>
          <div className="role-card">
            <h3>UI/UX Designer</h3>
            <p>Figma, Adobe XD, Prototyping</p>
            <button onClick={handleOpenModal}>Apply Now</button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="career-modal-overlay">
          <div className="career-modal">
            <button className="close-btn" onClick={handleCloseModal}>×</button>
            <h3>Apply for a Role</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Application submitted!');
                handleCloseModal();
              }}
            >
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Phone Number" required />
              <input type="text" placeholder="Role You’re Applying For" required />
              <select value={selectedState} onChange={handleStateChange} required>
                <option value="">Select State of Residence</option>
                {Object.keys(stateLgaData).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <select required disabled={!selectedState}>
                <option value="">Select LGA of Residence</option>
                {lgas.map((lga) => (
                  <option key={lga} value={lga}>{lga}</option>
                ))}
              </select>
               <label htmlFor="cvUpload" className="file-label">Upload Your CV (PDF, DOC, DOCX)</label>
              <input
                type="file"
                id="cvUpload"
                accept=".pdf,.doc,.docx"
                required
              />
    
              
              <textarea placeholder="Why do you want to join us?" rows="4" required></textarea>
              <button type="submit">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Career;
