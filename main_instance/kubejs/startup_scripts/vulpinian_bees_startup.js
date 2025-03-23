/** @param {Internal.BlockEntity} entity */
global["beeChrysalisBlockServerTick"] = (entity) => {
    let data = entity.serializeNBT().data
    // Utils.server.tell("Block says helo: " + entity + " Countdown: " + data.Countdown);
    data.Countdown -= 1;


}

StartupEvents.registry('block', event => {
    event.create('vulpinian_skies:example_block').blockEntity(be => {
        be.initialData(NBT.toTagCompound(
            {
                Countdown:50,
                essence_data: {}
            }
        ));
        be.serverTick(20, 0, entity => {
            // let countdown 
            // Utils.server.tell("Block says helo: " + entity);
            global["beeChrysalisBlockServerTick"](entity);
        })
    }) // Create a new block
      .item(blockItem => {
        blockItem.displayName(Text.of("TEEEST").color("dark_purple"))        
      })
      .displayName('My Custom Block') // Set a custom name
      .soundType('wool') // Set a material (affects the sounds and some properties)
      .hardness(1.0) // Set hardness (affects mining time)
      .resistance(1.0) // Set resistance (to explosions, etc)
    //   .tagBlock('my_custom_tag') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
      .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    //   .tagBlock('my_namespace:my_other_tag') // Tag the block with `#my_namespace:my_other_tag`
      .tagBlock('minecraft:mineable/axe') //can be mined faster with an axe
      .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
      .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
      
      
  })