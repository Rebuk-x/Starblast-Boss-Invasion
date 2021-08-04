aliens = [
  {
    code: 10,
    level: 3,
    crystal_drop: 100
  },
  {
    code: 12,
    level: 0,
    crystal_drop: 200
  }
]

this.options = {
  starting_ship: 502,
  starting_ship_maxed: true,
  max_level: 5,
  root_mode: undefined,
  map_size: 80,
  weapons_store: false,
  custom_map: [],
  friendly_colors: 1,
  max_players: 3
};

count = 0

spawn = function(ship) {
  return ship && ship.set({x: 0, y: 75, stats: 55555555})
}

this.tick = function(game) {
  for (let ship of game.ships) {
    if (!ship.custom.joined) {
      spawn(ship)
      ship.custom.joined = true
    }
  }
  if (game.step % 1200 === 0) {
    if (count < 2) {
      game.addAlien(aliens[0])
      count++
    } else {
      game.addAlien(aliens[1])
      count = 0
    }
  }
}

this.event = function(event, game) {
  switch (event.name) {
    case "ship_spawned":
      spawn(event.ship)
      break
  }
}
