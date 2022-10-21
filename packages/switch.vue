<template>
    <div class="hm-switch" :class="{'is-checked': value}" @click="handleClick">
        <span class="hm-switch-core" ref="core">
            <span class="hm-switch-button"></span>
        </span>
        <input class="hm-switch-input" type="checkbox" :name="name" ref="input" />
    </div>
</template>

<script>
export default {
    name: 'HmSwitch',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ''
        },
        activeColor: {
            type: String,
            default: ''
        },
        cancelColor: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.setColor();
        this.$refs.input.checked = this.value;
    },
    methods: {
        async handleClick() {
            this.$emit('input', !this.value);
            await this.$nextTick();
            this.setColor();
            this.$refs.input.checked = this.value;
        },

        setColor() {
            if(this.activeColor || this.cancelColor) {
                let color = this.value ? this.activeColor : this.cancelColor;
                this.$refs.core.style.borderCorlor = color;
                this.$refs.core.style.backgroundColor = color;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .hm-switch {
        display: inline-flex;
        align-items: center;
        position: relative;
        font-size: 14px;
        line-height: 20px;
        vertical-align: middle;
        &-input {
            position: absolute;
            width: 0;
            height: 0;
            opacity: 0;
            margin: 0;
        }
        &-core {
            margin: 0;
            display: inline-block;
            position: relative;
            width: 40px;
            height: 20px;
            border: 1px soild #dcdfe6;
            outline: none;
            border-radius: 10px;
            box-sizing: border-box;
            background: #dcdfe6;
            cursor: pointer;
            transition: border-color 0.3s, background-color 0.3;
            vertical-align: middle;
        }
        &-button {
            position: absolute;
            top: 2px;
            left: 1px;
            border-radius: 100%;
            transition: all 0.3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
        &.is-checked {
            .hm-switch-core {
                border-color: #409eff;
                background-color: #409eff;
                .hm-switch-button {
                    transform: translateX(20px);
                }
            }
        }
    }
</style>