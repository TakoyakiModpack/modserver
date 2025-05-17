ServerEvents.recipes(event => {
    event.shaped(
        Item.of("kubejs:antimatter_block", 1), // arg 1: output
        [
          'AAA',
          'AAA', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: "mekanism:pellet_antimatter",
        }
      )
    event.shaped(
        Item.of("mekanism:pellet_antimatter", 9), // arg 1: output
        [
          'A'
        ],
        {
          A: "kubejs:antimatter_block",
        }
      )
})