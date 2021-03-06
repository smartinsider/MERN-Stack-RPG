const Abilities = {
  dagger: {
    basic: {
      DBThrust: {
        info: {
          id: "DBThrust",
          name: "Thrust",
          weapon: "Dagger",
          type: "Basic",
          description: "A close thrusting strike against the target.",
          combatText: [
            "thrust the",
            "lunge forward and thrust with",
            "make rude faces and quickly thrust the",
          ],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 0,
          energy: 0,
        },
        damage: {
          doesDamage: true,
          attackCount: 1,
          damageMulti: 1.2,
        },
        position: {
          doesReposition: false,
          repositionDirection: "None",
          minPosition: 1,
          maxPosition: 2,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
      DBSlice: {
        info: {
          id: "DBSlice",
          name: "Slice",
          weapon: "Dagger",
          type: "Basic",
          description:
            "A quick horizontal slice attack, maybe someday itll bleed too!",
          combatText: [
            "slice with your",
            "duck and slice with your favorite weapon,",
          ],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 0,
          energy: 0,
        },
        damage: {
          doesDamage: true,
          attackCount: 1,
          damageMulti: 1.0,
        },
        position: {
          doesReposition: false,
          repositionDirection: "None",
          minPosition: 3,
          maxPosition: 4,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
      DBThrow: {
        info: {
          id: "DBThrow",
          name: "Throw",
          weapon: "Dagger",
          type: "Basic",
          description: "A ranged attack, in which the dagger is thrown. ",
          combatText: ["throw the", "chuck the"],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 0,
          energy: 0,
        },
        damage: {
          doesDamage: true,
          attackCount: 1,
          damageMulti: 0.8,
        },
        position: {
          doesReposition: false,
          repositionDirection: "None",
          minPosition: 5,
          maxPosition: 6,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
    },
    chainer: {
      DCShadowStep: {
        info: {
          id: "DCShadowStep",
          name: "Shadow Step",
          weapon: "Dagger",
          type: "Chainer",
          description: "Dash forward through the shadows and stab the enemy.",
          combatText: [
            "duck into the shadows, reappearing closer and damaging the",
          ],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 1,
          energy: 0,
        },
        damage: {
          doesDamage: true,
          attackCount: 1,
          damageMulti: 1.2,
        },
        position: {
          doesReposition: true,
          repositionDirection: "Forward",
          minPosition: 1,
          maxPosition: 6,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
      DCSmokeBomb: {
        info: {
          id: "DCSmokeBomb",
          name: "Smoke Bomb",
          weapon: "Dagger",
          type: "Chainer",
          description:
            "A retreating skill, giving you distance from the enemy.",
          combatText: [
            "throw a smoke bomb, giving you space to breathe. You hit the",
          ],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 0,
          energy: 0,
        },
        damage: {
          doesDamage: true,
          attackCount: 1,
          damageMulti: 0.8,
        },
        position: {
          doesReposition: true,
          repositionDirection: "Backward",
          minPosition: 1,
          maxPosition: 6,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
    },
    finisher: {
      DFThousandHits: {
        info: {
          id: "DFThousandHits",
          name: "Thousand Hits",
          weapon: "Dagger",
          type: "Finisher",
          description:
            "A widly known skill, praised for its quick succession attacks.",
          combatText: [
            "stab the",
            "thrust and twist into the",
            "gut the",
            "slice off an unrecognizable body part from the",
            "poke a hole in the",
            "yell really loud and thrust into the",
          ],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 5,
          energy: 0,
        },
        damage: {
          doesDamage: true,
          attackCount: 3,
          damageMulti: 1.0,
        },
        position: {
          doesReposition: false,
          repositionDirection: "None",
          minPosition: 1,
          maxPosition: 6,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
    },
  },
  bow: {
    basic: {
      BBPointBlank: {
        info: {
          id: "BBPointBlank",
          name: "Point Blank",
          weapon: "Bow",
          type: "Basic",
          description: "A point blank shot against an enemy.",
          combatText: ["shoot the", "pull back your bow and shoot the"],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 0,
          energy: 0,
        },
        damage: {
          doesDamage: true,
          attackCount: 1,
          damageMulti: 1.0,
        },
        position: {
          doesReposition: false,
          repositionDirection: "None",
          minPosition: 1,
          maxPosition: 2,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
      BBShoot: {
        info: {
          id: "BBShoot",
          name: "Shoot",
          weapon: "Bow",
          type: "Basic",
          description: "A generic shot with a bow.",
          combatText: ["shoot with your", "shoot the arrow with your"],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 0,
          energy: 0,
        },
        damage: {
          doesDamage: true,
          attackCount: 1,
          damageMulti: 1.0,
        },
        position: {
          doesReposition: false,
          repositionDirection: "None",
          minPosition: 3,
          maxPosition: 4,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
      BBLongShot: {
        info: {
          id: "BBLongShot",
          name: "Long Shot",
          weapon: "Bow",
          type: "Basic",
          description: "A long range bow attack that does high damage.",
          combatText: ["shoot the"],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 0,
          energy: 0,
        },
        damage: {
          doesDamage: true,
          attackCount: 1,
          damageMulti: 1.0,
        },
        position: {
          doesReposition: false,
          repositionDirection: "None",
          minPosition: 5,
          maxPosition: 6,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
    },
    chainer: {
      BCMirrorShot: {
        info: {
          id: "BCMirrorShot",
          name: "Mirror Shot",
          weapon: "Bow",
          type: "Chainer",
          description:
            "Shoot an arrow that moves your position closer to the enemy.",
          combatText: ["shoot the arrow, appearing closer to the enemy."],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 1,
          energy: 0,
        },
        damage: {
          doesDamage: true,
          attackCount: 1,
          damageMulti: 1.0,
        },
        position: {
          doesReposition: true,
          repositionDirection: "Forward",
          minPosition: 1,
          maxPosition: 6,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
      BCDefyingLeap: {
        info: {
          id: "BCDefyingLeap",
          name: "Defying Leap",
          weapon: "Bow",
          type: "Chainer",
          description:
            "A retreating skill, giving you distance from the enemy.",
          combatText: [
            "leap backwards, gaining space and damaging the enemy with a shower of arrows.",
          ],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 0,
          energy: 0,
        },
        damage: {
          doesDamage: true,
          attackCount: 1,
          damageMulti: 1.0,
        },
        position: {
          doesReposition: true,
          repositionDirection: "Backward",
          minPosition: 1,
          maxPosition: 6,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
    },
    finisher: {
      BFBarrage: {
        info: {
          id: "BFBarrage",
          name: "Barrage",
          weapon: "Bow",
          type: "Finisher",
          description:
            "A common finisher among bow users, deadly when used frequently.",
          combatText: ["shoot the"],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 5,
          energy: 0,
        },
        damage: {
          doesDamage: true,
          attackCount: 3,
          damageMulti: 1.0,
        },
        position: {
          doesReposition: false,
          repositionDirection: "None",
          minPosition: 1,
          maxPosition: 6,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
    },
  },
  utility: {
    reposition: {
      forward: {
        URFCharge: {
          info: {
            id: "URFCharge",
            name: "Charge",
            weapon: "Utility",
            type: "Reposition",
            description:
              "A forward charging attack that moves you closer to the enemy.",
            combatText: ["charge at", "sprint forward and charge towards"],
          },
          cost: {
            experience: 0,
            health: 0,
            mana: 0,
            energy: 0,
          },
          damage: {
            doesDamage: true,
            attackCount: 1,
            damageMulti: 1.0,
          },
          position: {
            doesReposition: true,
            repositionDirection: "Forward",
            minPosition: 1,
            maxPosition: 6,
          },
          heal: {
            doesHealHealth: false,
            healMulti: 0.0,
            doesHealMana: false,
            manaMulti: 0.0,
            doesHealEnergy: false,
            energyMulti: 0.0,
          },
        },
      },
      backward: {
        URBDodgeBack: {
          info: {
            id: "URBDodgeBack",
            name: "Dodge Back",
            weapon: "Utility",
            type: "Reposition",
            description:
              "A retreating dodge that moves you away from the enemy.",
            combatText: [
              "dodge backwards to gain better footing.",
              "retreat backwards in effort to gain control.",
            ],
          },
          cost: {
            experience: 0,
            health: 0,
            mana: 0,
            energy: 0,
          },
          damage: {
            doesDamage: true,
            attackCount: 1,
            damageMulti: 1.0,
          },
          position: {
            doesReposition: true,
            repositionDirection: "Backward",
            minPosition: 1,
            maxPosition: 6,
          },
          heal: {
            doesHealHealth: false,
            healMulti: 0.0,
            doesHealMana: false,
            manaMulti: 0.0,
            doesHealEnergy: false,
            energyMulti: 0.0,
          },
        },
      },
    },
    heal: {
      UHLesserHeal: {
        info: {
          id: "UHLesserHeal",
          name: "Lesser Heal",
          weapon: "Utility",
          type: "Heal",
          description: "A generic healing spell that heals your health.",
          combatText: [
            "heal yourself for",
            "try to remember how to heal and successfully heal for",
          ],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 0,
          energy: 0,
        },
        damage: {
          doesDamage: false,
          attackCount: 0,
          damageMulti: 0.0,
        },
        position: {
          doesReposition: false,
          repositionDirection: "None",
          minPosition: 1,
          maxPosition: 6,
        },
        heal: {
          doesHealHealth: true,
          healMulti: 0.35,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
      UHHeal: {
        info: {
          id: "UHHeal",
          name: "Heal",
          weapon: "Utility",
          type: "Heal",
          description: "A generic healing spell that heals your health.",
          combatText: [
            "dodge backwards to gain better footing.",
            "retreat backwards in effort to gain control.",
          ],
        },
        cost: {
          experience: 1000,
          health: 0,
          mana: 0,
          energy: 0,
        },
        damage: {
          doesDamage: false,
          attackCount: 0,
          damageMulti: 0.0,
        },
        position: {
          doesReposition: false,
          repositionDirection: "None",
          minPosition: 1,
          maxPosition: 6,
        },
        heal: {
          doesHealHealth: true,
          healMulti: 0.7,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
    },
    generic: {
      UGFeint: {
        info: {
          id: "UGFeint",
          name: "Feint",
          weapon: "Utility",
          type: "Generic",
          description: "A skill used when you're desperate for a new position.",
          combatText: [
            "project your voice to distract the enemy, giving you time to run.",
            "throw your most valued posessions that you don't own and quickly run away to get a solid footing.",
            "believe in yourself, just kidding.",
            "think of a better plan and move.",
            "try your best, but at least you're in a better spot.",
            "yell 'Hey there! Stop!', and then quickly move.",
          ],
        },
        cost: {
          experience: 0,
          health: 0,
          mana: 0,
          energy: 0,
        },
        damage: {
          doesDamage: false,
          attackCount: 0,
          damageMulti: 1.0,
        },
        position: {
          doesReposition: true,
          repositionDirection: "Any",
          minPosition: 1,
          maxPosition: 6,
        },
        heal: {
          doesHealHealth: false,
          healMulti: 0.0,
          doesHealMana: false,
          manaMulti: 0.0,
          doesHealEnergy: false,
          energyMulti: 0.0,
        },
      },
    },
    magic: {},
  },
};

exports.Abilities = Abilities;
