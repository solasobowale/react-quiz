/**
 * Mini quiz covering React module (week-1, week-2, week-3) material.
 * Please read the instructions below carefully.
 * Answer questions directly here.
 */

/* DELETE THIS LINE AND WRITE THE ANSWER TO QUESTION 1 HERE */

/*
 * ============= Question 1 =============
 *
 * An import statement is missing from this file.
 *
 * Identify what it is and write it on line 7 above.
 */

/*
 * ============= Question 2 =============
 *
 * Create a new component named Lions.
 *
 * It should render an article element with a class "lions". Within the article,
 * render an h2 element with the text "Lions Exhibit".
 */

const Lions = () => null;

/*
 * ============= Question 3 =============
 *
 * The Tigers component below receives 2 props:
 * - population which is a number
 * - habitat which is an array
 *
 * Replace the dots (...) in the paragraph (<p>) elements below with the props.
 *
 * HINT: you can convert an array into a string by calling the .join(',')
 * method.
 */

function Tigers() {
  return (
    <div className="tigers">
      <h2>Tigers</h2>
      <p>There are ... tigers in the world</p>
      <p>They live in ... habitats</p>
    </div>
  );
}

/*
 * ============= Question 4 =============
 *
 * Convert the Monkeys component below to a class component.
 */

function Monkeys(props) {
  return (
    <section className="monkeys">
      <h2>Latin name: {props.latinName}</h2>
      <ul>
        {props.commonSpecies.map((speciesName, index) => {
          return <li key={index}>{speciesName}</li>;
        })}
      </ul>
    </section>
  );
}

/*
 * ============= Question 5 =============
 *
 * There are 2 bugs in the AnimalSpotter component and 1 bug in the
 * CounterButton component. When you click the "I spotted an animal" button the
 * number of animals spotted number should increase by 1.
 *
 * Find and fix the bugs in the AnimalSpotter and CounterButton components.
 */
class AnimalSpotter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animal-spotter">
        <p>Number of animals spotted: {this.state.animalSpotted}</p>
        <CounterButton handleClick={this.spotAnimal} />
      </div>
    );
  }
}

function CounterButton(props) {
  return (
    <button style={{ background: "lightseagreen", color: "white" }} onClick>
      I spotted an animal!
    </button>
  );
}

/*
 * ============= Question 6 =============
 *
 * The WindowSize component has a memory leak in it.
 *
 * Try resizing your browser window while the JavaScript console is open (where
 * console.logs are shown). Then click the "Toggle WindowWidth" button to mount/
 * unmount the WindowWidth component and see what happens when you resize the
 * browser window.
 *
 * Fix the memory leak in the WindowSize component.
 *
 * HINT: use window.removeEventListener to remove an event listener that is no
 * longer needed
 */
class WindowSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    console.log("Window was resized!", window.innerWidth);
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    return <p>{this.state.windowWidth}</p>;
  }
}

/*
 * ============= Question 7 =============
 *
 * Complete the ImageGallery component so that it fetches an image URL from:
 * https://auspicious-baritone.glitch.me/gorilla.
 *
 * The request will take at least 2 seconds to return so make sure you show
 * something helpful to the user.
 */
class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null
    };
  }

  fetchData = () => {
    fetch().then(res => res.json());
  };

  render() {
    return <img src={this.state.imgSrc} alt="An animal" />;
  }
}

/*
 *
 * DO NOT EDIT BELOW THIS LINE
 *
 */
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingWindowWidth: true };
  }

  toggleWindowWidth = () => {
    this.setState(prevState => {
      return { isShowingWindowWidth: !prevState.isShowingWindowWidth };
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Open src/Quiz.js and complete the questions</h1>
        <Lions />
        <hr />
        <Tigers population={3000} habitat={["forests", "swamps", "savannah"]} />
        <hr />
        <Monkeys
          latinName="Primates"
          commonSpecies={[
            "Macaque",
            "Squirrel Monkey",
            "Marmoset",
            "Howler Monkey"
          ]}
        />
        <hr />
        <AnimalSpotter />
        <hr />
        <div>
          {this.state.isShowingWindowWidth ? <WindowSize /> : null}
          <button onClick={this.toggleWindowWidth}>Toggle WindowWidth</button>
        </div>
        <hr />
        <ImageGallery />
      </div>
    );
  }
}

export default Quiz;
