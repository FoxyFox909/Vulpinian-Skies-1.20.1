# 0.0.1b Modpack Initiallized ⚙️🦊⚙️

## Overview 📝

Vulpinian Skies has taken its first steps to being updated to 1.20.1. The decision to port was made after much consideration and analysis.

 Every major content-adding mod, including Create and all of its addons, are at this point caught up to 1.20.1. After performign an extensive "mod audit", the modpack has only lost 7 minor mods that do not have a version in 1.20.1, or a successor mod, or an otherwise obvious replacement.
 
 This version is not playable as it will not boot up. This is more or less just the preliminary modlist. All in all, the Vulpinian Skies modpack remains almost the same, with its essence intact, just updated!
 
  The modpack will now use semantic versioning x.y.z, where z are minor updates/patches, y are major updates, and x will be the legendary number, where once it is 1 as in 1.0.0, the modpack will be considered release-ready. There might additionalyl be letters to provide some extra meaning, such as b for beta.
 
 Anyone who has helped or contributed up to this point, will still receive credit! The Starter Huts that players have made on the server will be migrated to the new version, etc.
 
 ## Mini Blog / Vulpinian Yapping 🗣
 
 The journey begins anew! There is much work to do. I will salvage and reuse everything I can, from all the progress that was made on 1.18.2, but there will still be over 5,000 lines of JavaScript need to be ported to the newer version. However, I am approaching this endeavor not only with renewed motivation and excitement, but also with a lot more experience.
 
 I have iterated on my modpack development workflow so that time can be used more efficiently, and I am also a significantly more experienced programmer today. As such, the most painful thing about rewriting all 5k lines of custom KubeJS scripts will mainly be reading my old, ameteur-ish code... and it being  JavaScript 😭 I will surely make use of this "clean canvas" opoprtunity to make a cleaner, more organized codebase.
 
 I have also taken this chance to reconsider my development philosophy. Polish and attention to detail will still be the name of the game, but I will try and keep the bigger picture in mind, appropriately prioritizing what I work on depending on its impact. As much as I want things to be perfect, a perfect modpack is a modpack that will never be released because it will never be finished.
 
 "Polish, not perfection". All in all, quality will stay the same. Dev time will be more wisely and efficiently spent. The essence of the modpack will remain the same.
 
 One of the techniques I have implemented to help out in the development of this modpack is utilizing "temporary" or "throwaway" git repos that live within actively-developed modpack instances, which are instantiated with a git alias I crated to initializes and configures a repo for the express purpose of letting me know efficiently what configs,scripts, mods I have changed etc and thus need to reflect on the "main instance" when ready to release a new patch. This lessens the cognitive load and allows me to spend more brainpower developing rather than keeping track of things manually.
 
 As far as  1.20.1, among the reasons  why that version was chosen is because I am more or less placing a bet that it will be a better-supported version in the future. What that means is I'm a bit paranoid that by the time Clockwork is in a feature-complete and polished state, there might be a chance that the Clockwork dev team decides to not backport the complete and polished features to 1.18.2 (and I would NOT blame them, because it would be a fairly old version by then, depending on how long Clockwork takes to be developed).
 
 A lot of mods are already abandoning 1.18.2, which in itself has the positive aspect to it that it leads to a more stable modpack dev environment with less breaking changes and updates, but it is NOT good when such an important mod of the modpack remains in an unfinished state.
 
 If the rest of the modpack is polished and complete, except one of its (if not THE) most important mods, then I think we can agree that's a bit of a bruh moment. On the bright side, as stated in the overview above, most mods have caught up to 1.20.1, and there's a couple signals or indicators that tell me that it's warming up to be a decently stable version for modding.  Among those indicators, the whole Forge kerfuffle with Forge being the loader that better supports 1.20.1, and 1.20.1 being the last version before the Crafter is added, which definitely makes modders rethink the balance of things especially for tech mods.
 
 The biggest concern I have right now, is performance, as I have heard 1.20.1 has a performance drop. I will be on the lookout, using profilers such as Spark to measure how the modpack performs across the board. It does seem like some bugs are fixed, and the lighting engine was rewritten to be a lot better, so this gives me some hope!
 
 # 0.0.2b First Bootable Modpack Instance ⚙️🦊⚙️
 
 ## Overview 📝
 
 - The modpack is now able to boot up, and a world can be created and played in!
 
 - Vulpinian Skies has now introduced the groundbreaking mod Sinytra Connector, which allows playing Fabric mods in Forge to great success. This power will be used wisely, with a minimal amount of  small, non-major-content-providing mods. Currently, the only Fabric mod that Connector is powering is Antique Atlas 4 (only way to keep Antique Atlas from 1.18.2).
 
 - In an unfortunate turn of events for dragon lovers, Ice and Fire has been removed from the modpack. The reason is that it was found via profiling to cause heavy lag. The mod might be reconsidered at a later time, if it can be configured in some way to mitigate the lag, but it was already a bit problematic in 1.18.2 in terms of performance, so no promises are made.
 
 - Rubidium has been replaced by Embeddium, which should help more with performance.
 
 - ModernFix was added to the list of performance mods.
 
 The result of testing is that 100+ fps can be steadily reached in my machine, and the modpack loads in about 1 minute 15 seconds (before Modern Fix, it wa about 2 minutes 45 seconds, a significant performance increase),
 
 # 0.03b Modlist Enhancement
 
 ## Overview 📝
 
 - The modlist has received some new life, as I have taken the time to peruse all the lovely mods that are now available to us at this point in 1.20.1.
 - There are a number of additions, and a few deletions.
 - The essence of the modpack remains the same, but the modlist should be more refined now.
 
 ## Mod Additions ➕
 
 ### Magic
 
 - Biomancy: A lovely magic mod that fills a niche I didn't know  Vulpinian Skies needed. Very unique and polished.
 
 ### Tech
 
- Create: Metallurgy has been added to fill the void left by the removal of Tinkers Construct. We can still melt and cast metals, and now it's integrated with Create!
- Create: Optical is a lovely mod allowing us to use electromanetic waves, including visible light, to transfer data and small amounts of rotational power in create. Has really nice visuals and goodies inside!
- Create: New Age has been added to allow us to access late game power via thorium-fueled Nuclear Reactors, among other electrical goodies such as beautiful dynamo contraptions to actually generate the power.
- Botarium, a dependency of New Age, has been added.
- Create: Destroy has been added as an extremely unique and extremely in-depth mod about Chemistry! It will be used to gate the New Age nuclear reactor, by requiring an elaborate thorium enrichment process.
- Petrol's Parts adds a variety of beautiful and flexible mid-to-late game parts that can transmit rotational power in new ways, such as a planetary gear.
- pquality basically implements Quality from Factorio into the game.
- Petrolpark Library has been added as a dependency to Destroy, Petrol's parts, and pquality


### General

- Pufferfish's Skills has been added, as the modpack will implement its own custom skill trees!
- Pufferfish's Attributes are added to have more attribute to play with.
- Sophisticated Backpacks have been readded to the modpack. Forgor to add these. However, we will not be adding Sophisticated Storage, due to Create 6 basically making it redundant. If players want a sophisticated, automated storage system, I would like them to interact with Create. However, backpacks are still too good and useful on their own, so those stay.
- Sophisticated Core is added as Bacpacks dependency.
- Soul fire'd has been readded. Forgor about it, oops.
- Cobweb added, which is the dependency of Soul fire'd.
- Truly Modular Item API has been added as a replacement for Tinker's Construct. This is a modern, very polished, powerful, and vanilla-friendly alternative which is also a lot easier to use and does not require multiple in-game books to learn! For the fans of casting and melting metals, worry not! For Create: Metallurgy has been added to fill that hole and badass mechanic of Tinker's. Tinker's has served well.
     - Archery
	 - Arsenal
	 - Armory

## Food and Drink

- Vinery has been added because the modpack needs more booze. This mods adds beautiful  vineyard capabilities, placeable winebottles, and more goodies.
- Spice of Life: Carrot Edition has been added... forgor to add it previously, oops.

### Mobs and Worldgen

- Alex's Mobs and Alex's caves have been added!
- As such, their dependency Citadel has been added. I have concerns about Citadel's performance, but these mods are too high quality, and it's kind of a disservice to Forge players to deny them of them.
- Mobs from these mods will have their spawns configured and balanced as time goes.
- The Midnight is back! A 1.12.2 classic, it is back on 1.20.1, and its environment is beautiful and breath-taking!
- Lucent has been added, a Midnight dependency. There will be a close watch on this mod for performance. It has potential for compat with Create Dynamic Lights
- SmartBrainLib has been added as a midnight dependency. It enables advanced mob behavior.
- Nullscape; although Vulpinian Skies wants to have a more lively rather than barren End, the landscapes created by these gen rules are just breathtaking and fantastic..

### Utility

- CrashAssistant. It is not a matter of if, but a matter of when the modpack crashes. This will increase our tools to fix whatever caused the crash.
- Just Enough Resources to allow viewing mob, loot, and plant, drops and more.
- No Chat Reports is added because Vulpinian Skies values privacy and self-sovereignty.
- EntityJS has been added for some custom entity, arrow, and projectiel toomfoolery.
 
 ## Mod Deletions ➖
 
 - Tinker's Construct: See above about Truly Modular and Create: Metallurgy. It has served well o7
 - Mantle, Tinker's Dependency thus is also removed (I don't think anything else depends on it at least...)
 - Enlightend: It started feeling a bit off, as a sort of abandoned MCreator mod. The upper mini islands were getting in the way a lot and not looking the best.
 - Pam's mod suite is getting removed, as the mods honestly prioiritize quantity over quality and feels rather bloated. Not to worry, some new food mods will be added in a future update, which are of higher quality (even in the textures alone) and have much better intergration and fun mechanics.
 - Cooking For Blockheads is also getting removed sadly, as it is no longer needed since no Pam's. There is still a whole suite of Create food-related add-ons to help with automated food, though, and more coming... (Bitterballen is one)
 
 ## Configs ⚙

 - Finally configured Quark
 - Tweaked BetterCombat so that combat is more vanilla-like.
     - Buffed default sweeping edge (but not too much, so Sweeping Edge enchant is still relevant.
	 - Also made it so the aoe damage is reduced less, relative to the number of entities struck (more damage to more entities will be dealt now).
	 - Buffed movespeed multiplier while attacking from 0.5 to 0.85.
	 
