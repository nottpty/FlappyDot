var Player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/dot.png' );
        this.vy = 15;
    },

    update: function( dt ) {
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x, pos.y + this.vy ) );
        this.vy += -1;
    },

    jump: function() {
        this.vy = Player.JUMPING_VELOCITY;
    },
 
    onKeyDown: function( keyCode, event ) {
    	this.jump();
    },
 
    onKeyUp: function( keyCode, event ) {
    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },
    
});

Player.G = -1;
Player.STARTING_VELOCITY = 15;
Player.JUMPING_VELOCITY = 15;