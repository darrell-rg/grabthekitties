info.onScore(400, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.hearts)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.rings, 500)
    mySprite.startEffect(effects.rings, 200)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
mySprite = sprites.create(assets.image`miles`, SpriteKind.Player)
controller.moveSprite(mySprite)
game.splash("Catch the Kitties!")
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e 2 2 2 2 2 2 2 2 e . . . . 
        e 2 1 1 2 2 1 1 2 e . b f b 
        f 2 2 1 2 2 1 2 2 f . f d f 
        f b 2 2 2 2 2 2 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `, randint(10, 50), 50)
})
