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
  lives: 0,
  root_mode: "survival",
  map_size: 80,
  weapons_store: false,
  custom_map: [],
  friendly_colors: 1,
  max_players: 3
};

count = 0

this.tick = function(game) {
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
