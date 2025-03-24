/** @param {Internal.BlockEntity} entity */
global["beeChrysalisBlockServerTick"] = (entity) => {
    let data = entity.serializeNBT().data
    // Utils.server.tell("Block says helo: " + entity + " Countdown: " + data.Countdown);
    if (data.Countdown > 0) {
      data.Countdown -= 1;
    } else {
      
      
      let reserializedNbt = NBT.toTagCompound(data);

      // Utils.server.tell("Popped! " + reserializedNbt.getCompound("essence_data").getCompound("essence_data").getUUID("entity_uuid"));
      // Utils.server.tell("Popped! " + data.essence_data.essence_data.entity_uuid);
      // Utils.server.tell("Popped! " + UUID.toString(data.essence_data.essence_data.entity_uuid));

      const stringUuidFromBlock = reserializedNbt.getCompound("essence_data").getCompound("essence_data").getUUID("entity_uuid")

      // Verify that the bee is legal, soulbound to a player. This check also happens on the bee's own spawn.
      let isSouldBoundBee = false;
      const SoulboundBeeList = Utils.server.persistentData.SoulboundBeeList;
      for (const playerRecord in SoulboundBeeList) {
        // Utils.server.tell("player record = " + playerRecord);
        const nextRecordValue = SoulboundBeeList[playerRecord]
        // Utils.server.tell("player record value = " + nextRecordValue);
        const playerBeeList = nextRecordValue["Bees"];
        // Utils.server.tell("player bees = " + playerBeeList);
        for (const nextBeeUuid in playerBeeList) {
            if (nextBeeUuid == entityUuid) {
              isSouldBoundBee = true;
              playerUuid = playerRecord;
              Utils.server.tell("RIP BUZZY BUDDY");
              break;}
        }
      }

      // Safeguard against potential cheese.
      if (!isSouldBoundBee) {
        // Utils.server.tell("Bee is not soulbound, and so cannot spawn from block");
        // return;
      }

      const newBee = entity.level.createEntity("minecraft:bee");
      // newBee.setCustomName(Text.of(stringUuidFromBlock).darkGray());
      newBee.addTag("SoulBoundBeeUUID:" + stringUuidFromBlock);
      // newBee.addTag("randomtag");
      // newBee.addTag("randomtag2");
      let uuidStringFromTag;
      for (const tag of newBee.tags) { 
        if (tag.startsWith("SoulBoundBeeUUID")) {
          uuidStringFromTag = tag.split(':')[1];
          // Utils.server.tell("Found the UUID: " + UUID.fromString(uuidStringFromTag));
          break;
        }
      }

      if (!uuidStringFromTag) {
        // Something went wrong with Tags.
        newBee.discard();
        return;
      }

      newBee.setUUID(stringUuidFromBlock);      
      newBee.position = entity.blockPos;
      newBee.setAge(-24000);
      newBee.spawn();
    }
}


StartupEvents.registry('block', event => {
    event.create('vulpinian_skies:example_block').blockEntity(be => {
        be.initialData(NBT.toTagCompound(
            {
                Countdown:5,
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