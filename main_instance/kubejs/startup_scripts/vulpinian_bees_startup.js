/** @param {Internal.BlockEntity} entity */
global["beeChrysalisBlockServerTick"] = (entity) => {
    let data = entity.serializeNBT().data
    // Utils.server.tell("Block says helo: " + entity + " Countdown: " + data.Countdown);
    if (data.Countdown > 0) {
      data.Countdown -= 1;
    } else {
      const newBee = entity.level.createEntity("minecraft:bee");
      
      let reserializedNbt = NBT.toTagCompound(data);

      // Utils.server.tell("Popped! " + reserializedNbt.getCompound("essence_data").getCompound("essence_data").getUUID("entity_uuid"));

      // Utils.server.tell("Popped! " + data.essence_data.essence_data.entity_uuid);

      // Utils.server.tell("Popped! " + UUID.toString(data.essence_data.essence_data.entity_uuid));
      const stringUuidFromBlock = reserializedNbt.getCompound("essence_data").getCompound("essence_data").getUUID("entity_uuid")
      newBee.setCustomName(Text.of(stringUuidFromBlock).darkGray());
      newBee.addTag("SoulBoundBeeUUID:" + stringUuidFromBlock);
      newBee.addTag("randomtag");
      newBee.addTag("randomtag2");
      let uuidStringFromTag;
      for (const tag of newBee.tags) { 
        if (tag.startsWith("SoulBoundBeeUUID")) {
          uuidStringFromTag = tag.split(':')[1];
          Utils.server.tell("Found the UUID: " + uuidStringFromTag);
          // Utils.server.tell("Found the UUID: " + UUID.fromString(uuidStringFromTag));
          break;
        }
        // Utils.server.tell("next tag: " + tag);
      }
      // newBee.setUUID(stringUuid);
      newBee.setUUID(stringUuidFromBlock);
      // newBee.setUUID(UUID.fromString(data.essence_data.essence_data.entity_uuid));
      // newBee.setUUID(data.essence_data.essence_data.entity_uuid);
      // let beeNbt = NBT.compoundTag(
      //   {
      //     type:"productivebees:diamond",
      //     isBaby:true
      //   }
      // );
      // newBee.nbt.putInt("Age", -24000);
      // newBee.nbt.merge(beeNbt);
      
     
      Utils.server.tell("tags = " + newBee.tags);
      newBee.position = entity.blockPos;
      // newBee.nbt.putInt("Age", -24000);
      
      // Utils.server.tell("Age = " + newBee.nbt.getInt("Age"))

      // Utils.server.tell("UUID TEST = " + UUID.fromString("fdsf a"))
      
      // Utils.server.tell("UUID TEST = " + UUID.fromString())
      // newBee.markHurt();
      newBee.setAge(-24000);
      newBee.spawn();
      // newBee.age = -24000;
      // newBee.set

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