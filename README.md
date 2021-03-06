# Project Overview

## 2048-clone

## Project Description

2048-clone is the classic 2048 game. You move the tiles by swiping left, right, up, or down. If a tile is next to a tile of equal value and the user "swipes" in that same direction, the tiles are combined and the value is doubled. The game ends when you double the tile values enough times that you get to the 2048 tile. The game ends when you have no more moves. This happens when every tile is full and no tile has an adjascent tile of the same value. The project will be built using React Hooks with airtable as a backend to hold scores. 

## API and Data Sample

Airtable: https://api.airtable.com/v0/appzTXHo32UrzQAzt/Leaderboard?maxRecords=3&view=Grid%20view

The only data I will collect is username and score. 

## Wireframes

Mobile Home:
![Mobile Home Wireframe](images/home-page-mobile-wireframe.png)

Mobile Playing:
![Mobile Playing Wireframe](images/playing-page-mobile-wireframe.png)

Mobile How to:
![Mobile How to Wireframe](images/how-to-page-mobile-wireframe.png)

Mobile Leaderboard: 
![Mobile Leaderboard Wireframe](images/leaderboard-mobile-wireframe.png)

Tablet Main:
![Mobile Home Wireframe](images/tablet-main-wireframe.png)

Tablet How to:
![Mobile Home Wireframe](images/tablet-how-to-wireframe.png)

Descktop View:
![Desktop Wireframe](images/desktop-wireframe.png)


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Built a funcitonal 2048 game
- The game will know when the user wins (2048 tile shows up)
- The game will know when the user loses (no more moves)
- The game will end and ask the user for the username. Those will be stored and the top 10 scores will show in the leaderboard component. 
- Basic styling. Will worry about cleaning transitions with post-MVP

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Use local storage to hold the username
- Add mobile swipe functionality
- Add CSS animations

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|July 13| Project Approval | Incomplete
|July 13| Core components && work on game login | Incomplete
|July 14| Finalize game logic | Incomplete
|July 15| Build out game visually (using login from above) && Finalize MVP | Incomplete
|July 16| Add post MVP | Incomplete
|July 17| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

![2048-clone Priority Matrix](https://app.lucidchart.com/publicSegments/view/922a5b18-7bef-4a23-a502-481d70467b93/image.png)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic Structure | L-M | 3hrs| 4hrs | 4hrs |
| Base Styling | L-M | 3hrs| 4hrs | 4hrs |
| Game Logic | H | 6hrs| 8hrs | 6hrs |
| Game Design (visual) | H | 6hrs| 4hrs | 4hrs |
| Leaderboard | M | 4hrs| 4hrs | 4hrs |
| How-to | L | 4hrs| 2hrs | 2hrs |
| Design Tablet | M | 3hrs| 3hrs | 3hrs |
| Design Desktop | M | 3hrs| 4hrs | 4hrs |
| Add Swipe | L-M | 4hrs| 1hrs | 1hrs |
| Add Local Storage | L | 4hrs| 0hrs | 0hrs |
| Add Animations | L | 2hrs | 4hrs | 4hrs |
| Debugging | n/a | n/a | 4hrs | 4hrs |
| Total | H | 43hrs| 40hrs | 40hrs |

## Code Snippet

Below is the code to move the tiles. Based on the direction, different values are fed into value0-3 and updateValue0-3. I call it four times for each row or column depending on the direction.  

```
const moveTiles = (
  value0,
  value1,
  value2,
  value3,
  updateValue0,
  updateValue1,
  updateValue2,
  updateValue3,
  updateScore,
  updateHit2048Tile
) => {
  // all truthy
  let moveValue = "move";

  if (value0 && value1 && value2 && value3) {
    if (value0 === value1) {
      updateValue0(value0 * 2);
      updateScore((prevState) => prevState + value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateValue1(null);
      if (value2 === value3) {
        updateValue1(value2 * 2);
        updateScore((prevState) => prevState + value2 * 2);
        if (value2 * 2 === 2048) {
          updateHit2048Tile(true);
        }
        updateValue2(null);
        updateValue3(null);
      } else {
        updateValue1(value2);
        updateValue2(value3);
        updateValue3(null);
      }
    } else if (value1 === value2) {
      updateValue1(value1 * 2);
      updateScore((prevState) => prevState + value1 * 2);
      updateValue2(value3);
      if (value1 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateValue3(null);
    } else if (value2 === value3) {
      updateValue2(value2 * 2);
      updateScore((prevState) => prevState + value2 * 2);
      if (value2 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateValue3(null);
    } else {
      moveValue = "no-move";
    }
    // 0, 1, 2 = truthy
  } else if (value0 && value1 && value2 && !value3) {
    if (value0 === value1) {
      updateValue0(value0 * 2);
      updateScore((prevState) => prevState + value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateValue1(value2);
      updateValue2(null);
    } else if (value1 === value2) {
      updateValue1(value1 * 2);
      if (value1 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateValue2(null);
    } else {
      moveValue = "no-move";
    }
    // 0, 2, 3 = truthy
  } else if (value0 && !value1 && value2 && value3) {
    if (value0 === value2) {
      updateValue0(value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value0 * 2);
      updateValue1(value3);
      updateValue2(null);
      updateValue3(null);
    } else if (value2 === value3) {
      updateValue1(value2 * 2);
      if (value2 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value2 * 2);
      updateValue2(null);
      updateValue3(null);
    } else {
      updateValue1(value2);
      updateValue2(value3);
      updateValue3(null);
    }
    // 0, 1, 3 = truthy
  } else if (value0 && value1 && !value2 && value3) {
    if (value0 === value1) {
      updateValue0(value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value0 * 2);
      updateValue1(value3);
      updateValue3(null);
    } else if (value1 === value3) {
      updateValue1(value1 * 2);
      if (value1 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value1 * 2);
      updateValue3(null);
    } else {
      updateValue2(value3);
      updateValue3(null);
    }
  } else if (!value0 && value1 && value2 && value3) {
    if (value1 === value2) {
      updateValue0(value1 * 2);
      if (value1 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value1 * 2);
      updateValue1(value3);
      updateValue2(null);
      updateValue3(null);
    } else if (value2 === value3) {
      updateValue0(value1);
      updateValue1(value2 * 2);
      if (value2 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value2 * 2);
      updateValue2(null);
      updateValue3(null);
    } else {
      updateValue0(value1);
      updateValue1(value2);
      updateValue2(value3);
      updateValue3(null);
    }
    // 0, 1 = truthy
  } else if (value0 && value1 && !value2 && !value3) {
    if (value0 === value1) {
      updateValue0(value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value0 * 2);
      updateValue1(null);
    } else {
      moveValue = "no-move";
    }
    // 0, 2 = truthy
  } else if (value0 && !value1 && value2 && !value3) {
    if (value0 === value2) {
      updateValue0(value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value0 * 2);
      updateValue2(null);
    } else {
      updateValue1(value2);
      updateValue2(null);
    }
    // 0, 3 = truthy
  } else if (value0 && !value1 && !value2 && value3) {
    if (value0 === value3) {
      updateValue0(value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value0 * 2);
      updateValue3(null);
    } else {
      updateValue1(value3);
      updateValue3(null);
    }
    // 1, 3 = truthy
  } else if (!value0 && value1 && !value2 && value3) {
    if (value1 === value3) {
      updateValue0(value1 * 2);
      if (value1 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value1 * 2);
      updateValue1(null);
      updateValue3(null);
    } else {
      updateValue0(value1);
      updateValue1(value3);
      updateValue3(null);
    }
    // 1, 2 = truthy
  } else if (!value0 && value1 && value2 && !value3) {
    if (value1 === value2) {
      updateValue0(value1 * 2);
      if (value1 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value1 * 2);
      updateValue1(null);
      updateValue2(null);
    } else {
      updateValue0(value1);
      updateValue1(value2);
      updateValue2(null);
    }
    // 2, 3 = truthy
  } else if (!value0 && !value1 && value2 && value3) {
    if (value2 === value3) {
      updateValue0(value2 * 2);
      if (value2 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value2 * 2);
      updateValue2(null);
      updateValue3(null);
    } else {
      updateValue0(value2);
      updateValue1(value3);
      updateValue2(null);
      updateValue3(null);
    }
    // 1 = truthy
  } else if (!value0 && value1 && !value2 && !value3) {
    updateValue0(value1);
    updateValue1(null);
    // 2 = truthy
  } else if (!value0 && !value1 && value2 && !value3) {
    updateValue0(value2);
    updateValue2(null);
  } else if (!value0 && !value1 && !value2 && value3) {
    updateValue0(value3);
    updateValue3(null);
  } else {
    moveValue = "no-move";
  }
  return moveValue;
};

export default moveTiles;

```

