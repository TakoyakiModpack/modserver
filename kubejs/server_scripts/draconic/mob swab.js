ServerEvents.recipes(event => {
    event.remove({output: "mob_grinding_utils:mob_swab"})
    event.shaped(
        Item.of("mob_grinding_utils:mob_swab", 1), // arg 1: output
        [
          '  C',
          ' B ', // arg 2: the shape (array of strings)
          'A  '
        ],
        {
          A: "draconicevolution:chaos_shard",
          B: "minecraft:stick",
          C: "kubejs:antimatter_block",
        }
      )
})