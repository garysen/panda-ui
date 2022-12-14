<template>
    <label class="hm-checkbox" :class="{'is-checked': isChecked}">
        <span class="hm-checkbox-input">
            <span class="hm-checkbox-inner"></span>
            <input type="checkbox" 
            class="hm-checkbox-original"
            :name="name"
            :value="label"
            v-model="model" />
        </span>
        <span class="hm-checkbox-label">
            <slot />
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
import { set } from 'vue';
export default {
    name: 'HmCheckbox',
    inject: {
        CheckboxGroup: {
            default: ''
        }
    },
    computed: {
        model: {
            get() {
                return this.isGroup ? this.CheckboxGroup.value : this.value;
            },
            set(value) {
                this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value);
            }
        },
        isGroup() {
            return !!this.CheckboxGroup
        },
        isChecked() {
            return this.isGroup ? this.model.includes(this.label) : this.model;
        }
    },
    props: {
        label: {
            type: [String, Number, Boolean],
            default: ''
        },
        value: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .hm-checkbox {
        color: #606266;
        font-weight: 500;
        font-size: 14px;
        position: relative;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        user-select: none;
        margin-right: 30px;
        &-input {
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;
        }
        &-inner {
            display: inline-block;
            position: relative;
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            box-sizing: border-box;
            width: 14px;
            height: 14px;
            background-color: #fff;
            z-index: 1;
            transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
            &:after {
                box-sizing: content-box;
                content: "";
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                width: 3px;
                transition: transform 0.15s ease-in 0.05s;
                transform-origin: center;
            }
        }
        &-original {
            opacity: 0;
            outline: none;
            position: absolute;
            left: 10px;
            margin: 0;
            width: 0;
            height: 0;
            z-index: -1;
        }
        &-label {
            display: inline-block;
            padding-left: 10px;
            line-height: 19px;
            font-size: 12px;
        }

        &.is-checked {
            .hm-checkbox {
                &-inner {
                    background-color: #409eff;
                    &:after {
                        transform: rotate(45deg) scaleY(1);
                    }
                }
                &-label {
                    color: #409eff;
                }
            }
        }
    }
</style>