import NavBar from "../../components/NavBar/NavBar";
import image6 from "../../assets/Tesla_About.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <NavBar />
      <img src={image6} className="background fade-in" alt="Tesla Explore" />
      <div className="text-content">
        <h1>About Tesla Cybertruck</h1>
        <p>
          The Tesla Cybertruck is the latest addition to Tesla's innovative
          lineup of electric vehicles, blending the utility of a truck with the
          performance of a sports car. Designed to be durable, versatile, and
          powerful, the Cybertruck represents a bold new vision for the future
          of sustainable transportation.
        </p>
        <h2>Revolutionary Design</h2>
        <p>
          With its unique, angular design, the Cybertruck stands out on the
          road. The exoskeleton is made from ultra-hard 30X cold-rolled
          stainless steel, providing unparalleled protection and durability. The
          nearly impenetrable body ensures maximum safety for passengers and
          reduces damage from impacts.
        </p>
        <h2>Unmatched Performance</h2>
        <p>
          The Cybertruck offers incredible performance with its all-electric
          powertrain. It can go from 0 to 60 mph in as little as 2.9 seconds,
          thanks to its tri-motor all-wheel-drive configuration. With a range of
          up to 500 miles on a single charge, it is designed for both urban
          commutes and long-distance travel.
        </p>
        <h2>Utility Meets Innovation</h2>
        <p>
          The Cybertruck is built for functionality. It features a 6.5-foot bed,
          known as the "Vault," which is fully enclosed and lockable, offering
          100 cubic feet of storage space. The adjustable air suspension ensures
          a smooth ride, regardless of the load or terrain. Additionally, the
          Cybertruck is equipped with advanced technology, including Tesla's
          Autopilot and a 17-inch touchscreen for seamless control and
          navigation.
        </p>
        <h2>Sustainable Future</h2>
        <p>
          Like all Tesla vehicles, the Cybertruck is designed with
          sustainability in mind. By transitioning to electric power, the
          Cybertruck reduces emissions and helps pave the way towards a greener
          future. Tesla's commitment to renewable energy and innovative battery
          technology ensures that the Cybertruck is not just a vehicle, but a
          step forward in the evolution of transportation.
        </p>
      </div>
    </div>
  );
};

export default About;
