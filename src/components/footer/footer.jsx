import "./Footer.css";

function Footer() {
  return (
    <>
      <section class="footer">
        <div class="box-container">
          <div class="box" data-aos="fade-up" data-aos-delay="150">
            <p className="add">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, ad?
            </p>
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>

          <div class="box" data-aos="fade-up" data-aos-delay="300">
            <h3>Quick links</h3>
            <a href="#home" class="links">
              {" "}
              <i class="fas fa-arrow-right"></i> home{" "}
            </a>
            <a href="#about" class="links">
              {" "}
              <i class="fas fa-arrow-right"></i> about{" "}
            </a>
            <a href="#destination" class="links">
              {" "}
              <i class="fas fa-arrow-right"></i> destination{" "}
            </a>
            <a href="#services" class="links">
              {" "}
              <i class="fas fa-arrow-right"></i> services{" "}
            </a>
            <a href="#gallery" class="links">
              {" "}
              <i class="fas fa-arrow-right"></i> gallery{" "}
            </a>
            <a href="#blogs" class="links">
              {" "}
              <i class="fas fa-arrow-right"></i> blogs{" "}
            </a>
          </div>

          <div class="box" data-aos="fade-up" data-aos-delay="450">
            <h3>Contact info</h3>
            <p>
              {" "}
              <i class="fas fa-map"></i> Uzbekisatan, Namangan{" "}
            </p>
            <p>
              {" "}
              <i class="fas fa-phone"></i> +998-50-002-27-01{" "}
            </p>
            <p>
              {" "}
              <i class="fas fa-envelope"></i> shaikhanas@gmail.com{" "}
            </p>
            <p>
              {" "}
              <i class="fas fa-clock"></i> 9:00am - 10:00pm{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
