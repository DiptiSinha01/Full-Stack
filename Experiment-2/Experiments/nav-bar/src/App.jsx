import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(){
  const destinations = [
    {
      id: 1,
      name: "Dubai",
      visas: "53K+",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Egypt",
      visas: "24K+",
      image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Australia",
      visas: "7K+",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Sri Lanka",
      visas: "16K+",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Singapore",
      visas: "9K+",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Scotland",
      visas: "17K+",
      image: "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=500&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Iceland",
      visas: "17K+",
      image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=500&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Thailand",
      visas: "32K+",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&h=300&fit=crop"
    },
    {
      id: 9,
      name: "Vietnam",
      visas: "27K+",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=500&h=300&fit=crop"
    },
    {
      id: 10,
      name: "Malaysia",
      visas: "12K+",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=500&h=300&fit=crop"
    },
    {
      id: 11,
      name: "Japan",
      visas: "45K+",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&h=300&fit=crop"
    },
    {
      id: 12,
      name: "France",
      visas: "38K+",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=300&fit=crop"
    },
    {
      id: 13,
      name: "Italy",
      visas: "29K+",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&h=300&fit=crop"
    },
    {
      id: 14,
      name: "Greece",
      visas: "21K+",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&h=300&fit=crop"
    },
    {
      id: 15,
      name: "Switzerland",
      visas: "19K+",
      image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=500&h=300&fit=crop"
    },
    {
      id: 16,
      name: "New Zealand",
      visas: "14K+",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=500&h=300&fit=crop"
    },
    {
      id: 17,
      name: "Brazil",
      visas: "26K+",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=500&h=300&fit=crop"
    },
    {
      id: 18,
      name: "Morocco",
      visas: "18K+",
      image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=500&h=300&fit=crop"
    },
    {
      id: 19,
      name: "Turkey",
      visas: "31K+",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=500&h=300&fit=crop"
    },
    {
      id: 20,
      name: "Canada",
      visas: "22K+",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=500&h=300&fit=crop"
    }
  ];

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPngnbIeVrijPwuMOboFGIdabc9DhqZJj6A&s" alt="Logo" width="40" height="40" className="d-inline-block me-2"/>
            TravelWorld
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Destinations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{paddingTop: '80px'}}>
        <h1 className="text-center mb-5 pt-5">Popular Destinations</h1>
        <div className="container-fluid p-0">
          <div className="row g-2 m-0">
            {destinations.map((destination) => (
              <div key={destination.id} className="col-12 col-md-6 col-lg-4 p-1">
                <div className="card destination-card h-100 shadow-sm">
                  <div className="card-image-wrapper position-relative overflow-hidden" style={{height: '320px'}}>
                    <img src={destination.image} alt={destination.name} className="card-img-top" style={{height: '100%', objectFit: 'cover', width: '100%'}}/>
                    <span className="badge bg-primary position-absolute top-0 end-0 m-2">{destination.visas}</span>
                  </div>
                  <div className="card-body text-center p-3">
                    <h5 className="card-title fw-bold mb-0" style={{fontSize: '1.2rem'}}>{destination.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;