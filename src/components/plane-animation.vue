<template>
    <div class="view">
        <div class="plane main">
            <div class="circle" v-for="i in 6" :key="i"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "plane-animation"
    }
</script>

<style lang="sass" scoped>
    $side: 120px
    $l: 90px
    $num: 10
    $dur: 10s

    @mixin plane($w, $h)
        width: $w
        height: $h
        transform-style: preserve-3d

    @mixin view($p)
        $side: 120px
    $l: 90px
    $num: 10
    $dur: 10s

    @mixin plane($w, $h)
        width: $w
        height: $h
        transform-style: preserve-3d

    @mixin view($p)
        position: absolute
        perspective: $p

    @mixin center
        margin: auto

    html, body
        background: #222
        overflow: hidden
        width: 100%
        height: 100%

    .view
        @include view(400)

    .plane
        @include plane($side, $side)

        &.main
            @include center
            transform: rotateX(60deg) rotateZ(-30deg)
            animation: rotate 20s infinite linear

            .circle
                width: $side
                height: $side
                position: absolute
                transform-style: preserve-3d
                border-radius: 100%
                //border: 2px solid white
                box-sizing: border-box
                box-shadow: 0 0 60px rgba(#cce2cc, 1), inset 0 0 60px rgba(#63b763, 1)

                &::before, &::after
                    content: ''
                    display: block
                    @include center
                    width: 10%
                    height: 10%
                    border-radius: 100%
                    background: rgba(green, 1)
                    //border: 4px solid black
                    box-sizing: border-box
                    box-shadow: 0 0 60px 2px rgba(green, 1)

                &::before
                    transform: translateZ(-$l)
                &::after
                    transform: translateZ($l)

                @for $i from 1 through 5
                    &:nth-child(#{$i})
                        transform: rotateZ($i / 5 * 360deg) rotateX(63.435deg)

    @keyframes rotate
        0%
            transform: rotateX(0) rotateY(0) rotateZ(0)
        100%
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)

</style>
