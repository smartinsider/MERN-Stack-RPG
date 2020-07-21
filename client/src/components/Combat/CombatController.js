import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Import Combat Components
import Combat from "./CombatComponents/Combat";

// Import Combat Types
import { CELESTIAL_TOWER } from "./CombatFunctions/CombatTypes";

// Import Calculate Initial Abilities function
import calculateAbilityPosition from "./CombatFunctions/CalculateAbilityPosition";

// Import Calculate Combat Images function
import calculateCombatImages from "./CombatFunctions/CalculateCombatImages";

// Import Calculate Combat Enemies function
import calculateCombatEnemies from "./CombatFunctions/CalculateCombatEnemies";

// Temp Monster Import, Will be removed once I implement user abilities.
import { enemies } from "./CombatFunctions/MonstersTemp";

class CombatController extends Component {
  // Get Player's Location
  // Set Initial state for combat, importing the user's preferred starting position and abilities(Will be default for now)
  // Retrieve Monster Data for that location(Create an api post to retrieve monster data from another file)
  // Set Monster Data to State
  constructor(props) {
    super(props);
    const { user } = this.props.auth;
    // Calculate Initial Abilities
    if (this.checkObj(user.character)) {
      let initialAbilities = calculateAbilityPosition(
        user.character.combatPrefs.preferredPosition,
        user.character.combatPrefs.weaponOne.position,
        user.character.combatPrefs.weaponOne.chainers,
        user.character.combatPrefs.weaponOne.finisher,
        user.character.combatPrefs.utility.reposition,
        user.character.combatPrefs.utility.generic
      );
      let images = calculateCombatImages(user.character.location);
      let monster = calculateCombatEnemies(user.character.location);
      //Position, Combat Abilities and Reposition Abilities will be pulled in from combat prefs. These will be within user.character.combatPrefs.
      this.state = {
        validCombat: true,
        completedCombat: false,
        hasWon: false,
        position: user.character.combatPrefs.preferredPosition,
        combatAbilities: user.character.combatPrefs.weaponOne.position,
        chainerAbilities: user.character.combatPrefs.weaponOne.chainers,
        finisherAbility: user.character.combatPrefs.weaponOne.finisher,
        repositionAbilities: user.character.combatPrefs.utility.reposition,
        genericAbility: user.character.combatPrefs.utility.generic,
        enemy: enemies.skeleton,
        playerLocation: user.character.location,
        initialAbilities: initialAbilities,
        imageLeft: images.left,
        imageRight: images.right,
        monsterImage: monster.image,
      };
    } else {
      this.state = {
        validCombat: false,
      };
    }
  }

  componentDidMount = () => {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    const { user } = this.props.auth;

    //console.log(user);
    // console.log("Getting User");
    // getUser(user);
    // this.setState({ characterLoaded: true });
    console.log("Combat Controller Mounted");
    console.log(user);
  };

  componentDidUpdate = () => {
    console.log(this.state);
    const { user } = this.props.auth;
    // If statement at the top to catch completed combats. If the enemy has been killed, the combat component will perform a function callback to set the this.state.hasWon variable to true. If they lost, this.state.hasWon will be false. Regardless if they have won or not, completedCombat will be true, and will redirect the user back to the location they were previously at.
    if (this.state.completedCombat) {
      if (this.state.hasWon) {
        console.log("User Has Won!");
        //If user has won, distribute the loot here.
      } else {
        console.log("User Has Lost!");
      }
      this.props.history.push(user.character.location);
    }
  };

  checkObj = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return true;
    }
    return false;
  };

  returnToLastLocation = () => {
    const { user } = this.props.auth;
    this.props.history.push(user.character.location);
  };

  // Callback function for the current combat component to pass the boolean back to combat controller.
  winCombat = () => {
    this.setState({ completedCombat: true, hasWon: true });
  };

  render() {
    // Switch/Case to choose which return combat component to use
    // Pass the full CombatController state to the combat component to use as props.
    // Render Combat Component
    if (this.state.hasWon === true) {
      alert("You have won the combat");
    }
    const { user } = this.props.auth;

    if (this.state.validCombat === true) {
      switch (this.state.playerLocation) {
        case CELESTIAL_TOWER:
          return (
            <Combat winCombat={this.winCombat} controllerState={this.state} />
          );
        default:
          return (
            <div>
              <p>You are in the wrong place!</p>
              <p>Click the button below to return to your current zone.</p>
            </div>
          );
      }
    } else {
      return (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>
            Comabt is invalid, click below to return to your last known
            location.
          </p>
          <button onClick={this.returnToLastLocation()}>Return</button>
        </div>
      );
    }
  }
}

CombatController.propTypes = {
  auth: PropTypes.object.isRequired,
  calculateAbilityPosition: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { calculateAbilityPosition })(
  CombatController
);
