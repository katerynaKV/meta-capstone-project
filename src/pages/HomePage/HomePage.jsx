import { SpecialsCard } from "../../components/SpecialsCard/SpecialsCard";
import { Button } from "../../components/Button/Button";
import "./HomePage.css";
import { Link } from "react-router";
import { Page } from "../../components/Page/Page";

export function HomePage() {
  const linkAlert = () => {
    alert("This link is for demo purposes only");
  };

  return (
    <Page>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-left-content">
            <h2 className="hero-title">Little Lemon</h2>
            <span>Chicago</span>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/reservation" className="reserve-table-button">
              <Button aria-label="Navigate to table reservation page">
                Reserve a Table
              </Button>
            </Link>
          </div>
          <img className="hero-img" src="/hero-section-img.jpg" />
        </div>
      </section>

      <section className="announcement-section">
        <div className="container announcement-content">
          <div className="announcement-heading">
            <h2 className="announcement">This weeks specials!</h2>
            <Button aria-label="Navigate to menu page" onClick={linkAlert}>
              Online Menu
            </Button>
          </div>

          <div className="special-products">
            <SpecialsCard
              image="/greek-salad.jpg"
              title="Greek salad"
              price={12.99}
              description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            />
            <SpecialsCard
              image="/bruchetta.svg"
              title="Bruchetta"
              price={5.99}
              description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
            />
            <SpecialsCard
              image="/lemon-dessert.jpg"
              title="Lemon Desert"
              price="5.00"
              description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            />
          </div>
        </div>
      </section>
    </Page>
  );
}
