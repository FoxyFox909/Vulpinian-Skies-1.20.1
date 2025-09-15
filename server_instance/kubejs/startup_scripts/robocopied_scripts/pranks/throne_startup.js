StartupEvents.registry("block", event => {
    event.create("vulpinian_skies:throne_block")
        .textureAll("minecraft:gold_block")
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .resistance(1200)
        .hardness(50)
        .soundType("metal")
        .displayName("Gold Block")
});