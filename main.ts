namespace SpriteKind {
    export const block = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
function getPos (Sprite2: Sprite, otherSprite: Sprite) {
    if (Sprite2.x < otherSprite.x - -8 || Sprite2.x > otherSprite.x - -8) {
        direction = 1
    } else {
        direction = 0
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.block, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    getPos(sprite, otherSprite)
    if (direction == 1) {
        sprite.setVelocity(-1 * sprite.vx, sprite.vy)
    } else {
        sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    }
    otherSprite.destroy()
})
let direction = 0
let title: Sprite = null
let titlepick = 0
let x = 0
let Paddle = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ..bddddddddddddddb..............
    .ccbbbbbbbbbbbbbbcc.............
    fffccccccccccccccfff............
    ...ffffffffffffff...............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
Paddle.setPosition(79, 100)
Paddle.setStayInScreen(true)
controller.moveSprite(Paddle, 100, 0)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, Paddle, 50, -55)
projectile.setFlag(SpriteFlag.DestroyOnWall, false)
projectile.setBounceOnWall(true)
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        x = index * 18
        if (index2 % 2 == 1) {
            x = index * 18 + 8
        }
        titlepick = randint(0, 2)
        if (titlepick == 0) {
            title = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f d d d d d d d d d d d d d d f 
                f d d d d d d d d d d d d d d f 
                f d d d d d d d d d d d d d d f 
                f d d d d d d d d d d d d d d f 
                f b d d d d d d d d d d d b b f 
                f b b b b b b d d b b b b b b f 
                f b b b b b b b b b b b b b b f 
                f b b b b b b b b b b b b b b f 
                f b b b b b b b b b b b b b b f 
                f b b b b b b b b b b b b b c f 
                f c c c c c c c c b b b c c c f 
                f c c c c c c c c c c c c c c f 
                f c c c c c c c c c c c c c c f 
                f c c c c c c c c c c c c c c f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.block)
        } else if (titlepick == 1) {
            title = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f d d d d d d d d d d d d d d f 
                f d d d d d d d d d d d d d d f 
                f d d d d d d d d d d d d d d f 
                f d d d d d d d d d d d d b b f 
                f d d d d d d d d d d d b b b f 
                f b d d d d d d d d b b b b b f 
                f b b d d d d d d b b b b b b f 
                f b b b d d d b b b b b b b b f 
                f b b b b b b b b b b b c c c f 
                f b b b b b b b b b b c c c c f 
                f c b b b b b b b b b c c c c f 
                f c c b b b b b b b c c c c c f 
                f c c c c c c c c c c c c c c f 
                f c c c c c c c c c c c c c c f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.block)
        } else {
            title = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f d d d d d d d d d d d d d d f 
                f d d d d d d d d d d d d d d f 
                f d d d d d d d d d d d d d d f 
                f b d d d d d d d d b b d d d f 
                f b b d d d d d d b b b b d d f 
                f b b b d d d d b b b b b b b f 
                f b b b b b b b b b b b b b b f 
                f b b b b b b b b b b b b b b f 
                f b b b b b b b b b b b c c c f 
                f c c b b b b b b b c c c c c f 
                f c c c b b b b b c c c c c c f 
                f c c c c b b c c c c c c c c f 
                f c c c c c c c c c c c c c c f 
                f c c c c c c c c c c c c c c f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.block)
        }
        title.setPosition(x, index2 * 18 + 20)
    }
}
info.setScore(0)
scene.setBackgroundColor(3)
direction = 1
forever(function () {
    if (projectile.bottom > 119) {
        game.over(false)
    }
    if (info.score() == 20) {
        game.over(true)
    }
})
