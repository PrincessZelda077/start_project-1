"use strict";
cc._RF.push(module, '54018w0OxBIpYAvAYGSi9OJ', 'Player');
// Scripts/Player.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // main character's jump height
        jumpHeight: 0,
        // main character's jump duration
        jumpDuration: 0,
        // maximal movement speed
        maxMoveSpeed: 0,
        // acceleration
        accel: 0
    },

    setJumpAction: function setJumpAction() {
        // jump up
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // jump down
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // repeat
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();