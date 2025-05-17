ServerEvents.recipes(event => {
    event.shaped(
        Item.of("minecraft:sculk", 1), // arg 1: output
        [
          'AA ',
          'AA ', // arg 2: the shape (array of strings)
          '   '
        ],
        {
          A: "minecraft:echo_shard",
        }
      )
      event.shaped(
        Item.of("minecraft:sculk_catalyst", 1), // arg 1: output
        [
          'AAA',
          'AAA', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: "minecraft:echo_shard",
        }
      )
})