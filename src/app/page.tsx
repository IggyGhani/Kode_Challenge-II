export default function Home() {
  return (
    <>
      <main className="h-screen flex items-center">
        <div className="carousel rounded-box h-[600px] min-h-screen max-h-screen">
          <div className="carousel-item">
            <img src="/Antelope.jpg" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img
              src="/Ayam-Cemani.jpg"
              alt="Rare native chicken who has rare black pigment"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/red-panda.jpg"
              alt="Distant cousin of the Giant panda with similar diet"
            />
          </div>
          <img
            src="/Howler-monkey.jpg"
            alt="Smallest body to brain ratio of all Primates"
          />
        </div>
      </main>
      <footer className="flex justify-between">
        <div className="max-w-[300px]">
          <p>
            Taman Margasatwa Ragunan Jl. Harsono RM. No. 1, Ragunan, Pasar
            Minggu, Jakarta Selatan 12550 Indonesia Tel. (021) 7884 7114 // Fax.
            (021) 780 5280 Email : ragunanzoo@jakarta.go.id
          </p>
        </div>
        <div>
          <ul>
            <li>
              <a href="">Tiket</a>
            </li>
            <li>
              <a href="">Layanan</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
