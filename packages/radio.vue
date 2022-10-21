<template>
    <label class="hm-radio" :class="{'is-checked': label == model}">
        <span class="hm-radio-input">
            <span class="hm-radio-inner"></span>
            <input class="hm-radio-original" 
                type="radio" 
                :value="label"
                :name="name" 
                v-model="model"
             />
        </span>
        <span class="hm-radio-label">
            <slot />
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
export default {
    name: 'HmRadio',
    inject:{
        RadioGroup: {
            default: ''
        }
    },
    computed: {
        model: {
            get() {
                return this.isGroup ? this.RadioGroup.value : this.value;
            },
            set(value) {
                this.$emit('input', value);
                this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value);
            }
        },
        isGroup() {
            return !!this.RadioGroup
        }
    },
    props: {
        label: {
            type: [String, Number, Boolean],
            default: ''
        },
        value: null,
        name: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .hm-radio {
        color: #606266;
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        outline: none;
        font-size: 14px;
        margin-right: 30px;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        .hm-radio-input {
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;
        }
        &-inner {
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            border: 1px solid #888888;
            &:after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform 0.15s ease-in;
            }
        }
        &-original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
        }
        &.is-checked {
            .hm-radio {
                &-inner {
                    border-color: #409eff;
                    background: #409eff;
                    &:after {
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
                &-label {
                    color: #409eff;
                }
            }
        }
        .hm-radio-label {
            font-size: 14px;
            padding-left: 10px;
        }
    }
</style>