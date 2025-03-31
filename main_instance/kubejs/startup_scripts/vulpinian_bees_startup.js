const $BiomancySoundTypes = Java.loadClass("com.github.elenterius.biomancy.init.ModSoundTypes");

/** @param {Internal.BlockEntity} entity */
global["beeChrysalisBlockServerTick"] = (entity) => {
    let data = entity.serializeNBT().data
    // Utils.server.tell("Block says helo: " + entity + " Countdown: " + data.Countdown);
    Utils.server.tell("Ticking: " + data.Countdown);
    if (data.Countdown > 0) {
      data.Countdown -= 3;
    } else {
      let reserializedNbt = NBT.toTagCompound(data);
      const essenceData = reserializedNbt.getCompound("essence_data");

      if (!essenceData) {
        // console.log("Something went very wrong with a Bee egg");
        entity.level.destroyBlock(entity.blockPos, false);
        return;
      }

      // Utils.server.tell("reserializedNbt = " + reserializedNbt.getCompound("essence_data").getUUID("entity_uuid"));

      // Utils.server.tell("Popped! " + reserializedNbt.getCompound("essence_data").getCompound("essence_data").getUUID("entity_uuid"));
      // Utils.server.tell("Popped! " + data.essence_data.essence_data.entity_uuid);
      // Utils.server.tell("Popped! " + UUID.toString(data.essence_data.essence_data.entity_uuid));

      const stringUuidFromBlock = essenceData.getUUID("entity_uuid");

      // Verify that the bee is legal, soulbound to a player. This check also happens on the bee's own spawn.
      let isSouldBoundBee = false;
      let playerUuid;

      /** @type {Internal.CompoundTag} */
      let beeRecord;
      const SoulboundBeeList = Utils.server.persistentData.SoulboundBeeList;
      for (const playerRecordUuid in SoulboundBeeList) {
        // Utils.server.tell("player record = " + playerRecord);
        const nextRecordValue = SoulboundBeeList[playerRecordUuid]
        // Utils.server.tell("player record value = " + nextRecordValue);
        const playerBeeList = nextRecordValue["Bees"];
        // Utils.server.tell("player bees = " + playerBeeList);
        for (const nextBeeUuid in playerBeeList) {
            if (nextBeeUuid == stringUuidFromBlock) {
              isSouldBoundBee = true;
              playerUuid = playerRecordUuid;
              beeRecord = playerBeeList[nextBeeUuid]
              // Utils.server.tell("Bee is legally soulbound to a player.");
              break;}
        }
      }

      // Safeguard against potential cheese.
      if (!isSouldBoundBee) {
        // Utils.server.tell("Bee is not soulbound, and so cannot spawn from block");
        console.log(`Bee is not soulbound, and so cannot spawn from block at ${entity.blockPos}`);
        entity.level.destroyBlock(entity.blockPos, false);
        return;
      }

      const newBee = entity.level.createEntity("productivebees:configurable_bee");
      // newBee.setCustomName(Text.of(stringUuidFromBlock).darkGray());
      newBee.addTag("SoulBoundBeeUUID:" + stringUuidFromBlock);

      const beeNbtToMerge = NBT.toTagCompound(
        {
          type: essenceData.getString("bee_type")
        }
      );

      newBee.mergeNbt(beeNbtToMerge);

      // newBee.nbt.putString("type", "productivebees:iron");
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
        entity.level.destroyBlock(entity.blockPos, false);
        return;
      }

      newBee.setUUID(stringUuidFromBlock);      
      newBee.position = entity.blockPos;
      newBee.setAge(-24000);

      const customBeeName = beeRecord["CustomNameString"];
      if (customBeeName) {
        newBee.setCustomName(Text.of(customBeeName));
      }

      newBee.potionEffects.add("minecraft:glowing", 400, 0, true, false);

      // Utils.server.tell("Bee NBT: " + newBee.nbt);
      newBee.spawn();

      // const playerFromUuuid = Utils.server.getPlayer(playerUuid);
      if (!beeRecord["HasDoneFirstHatch"]) {
        Utils.server.tell(Text.of(`${SoulboundBeeList[playerUuid]["PlayerName"]} has hatched a new ${newBee.name.getString()}!`).color("gold"));
        beeRecord["HasDoneFirstHatch"] = true;
      }
      // entity.setRemoved());
      // entity.level.setBlock(entity.blockPos, Blocks.AIR.defaultBlockState(), 3);
      entity.level.destroyBlock(entity.blockPos, false);
      // entity.clearRemoved()
      // entity.setBlock('minecraft:air');
    }
}


StartupEvents.registry('block', event => {
  const chrysalisBlockBulider = event.create('vulpinian_skies:configurable_bee_chrysalis').blockEntity(be => {
      
        be.initialData(NBT.toTagCompound(
            {
                Countdown:5,
                essence_data: {}
            }
        ));
        be.serverTick(20, 0, entity => {
          global["beeChrysalisBlockServerTick"](entity);
        })
    }) // Create a new block
      .item(blockItem => {
        // blockItem.displayName(Text.of("TEEEST").color("dark_purple"));
        blockItem.unstackable();
      })
      .soundType($BiomancySoundTypes.FLESH_BLOCK)
      .box(4, 0, 4, 12, 12, 12)
      .displayName('My Custom Block') // Set a custom name
      // .soundType('wool') // Set a material (affects the sounds and some properties)
      .hardness(0.2) // Set hardness (affects mining time)
      .resistance(0.3) // Set resistance (to explosions, etc)
    //   .tagBlock('my_custom_tag') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
      // .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    //   .tagBlock('my_namespace:my_other_tag') // Tag the block with `#my_namespace:my_other_tag`
      // .tagBlock('minecraft:mineable/axe') //can be mined faster with an axe
      // .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
      // .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
      .notSolid()
      .fullBlock(false)
      .viewBlocking(false)

      // .defaultTranslucent()

  })

  // StartupEvents.registry('item', event =>
  //   {})

  StartupEvents.registry('item', event => {
    event.create("vulpinian_skies:empty_configurable_bee_chrysalis");

  });