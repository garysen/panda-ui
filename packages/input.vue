<template>
    <div class="hm-input" :class="{'hm-input-suffix': showSuffix}">
        <input 
            class="hm-input-inner"
            :class="{'is-disabled': disabled}" 
            :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" 
            :name="name"
            :placeholder="placeholder"
            :disabled="disabled"
            :value="value"
            @input="handleInput" />
        <span class="hm-input-suffix" v-if="showSuffix">
            <i class="hm-icon-close" v-if="clearable && value" @click="clear" />
            <i class="hm-icon-eye" v-if="showPassword" @click="handlePassword" :class="{'password-icon-active': passwordVisible}" />
        </span>    
    </div>
</template>

<script>
export default {
    name: 'HmInput',
    data() {
        return {
            //用于控制是否显示密码
            passwordVisible: false
        }
    },
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        showSuffix() {
            return this.clearable || this.showPassword;
        }
    },

    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
        },
        handlePassword() {
            this.passwordVisible = !this.passwordVisible;
        },
        clear() {
            this.$emit('input', '');
        }
    }

}
</script>

<style lang="scss" scoped>
    .hm-input {
        width: 100%;
        position: relative;
        font-size: 14px;
        display: inline-block;
        &-inner {
            -webkit-appearance: none;
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 40px;
            line-height: 40px;
            outline: none;
            padding: 0 15px;
            transition: border-color 0.2s cubic-bezier(0.645, 0.045, 355, 1);
            width: 100%;

            &:focus {
                outline: none;
                border-color: #309eff;
            }

            &.is-disabled {
                background-color: #f5f7fa;
                border-color: #e4e7ed;
                color: #c0c4cc;
                cursor: not-allowed;
            }
        }
    }

    .hm-input-suffix {
        .hm-input-inner {
            padding-right: 30px;
        }
        .hm-input-suffix {
            position: absolute;
            right: 10px;
            height: 100%;
            top: 0;
            line-height: 40px;
            color: #c0c4cc;
            transition: all 0.5s;
            z-index: 900;
            i {
                color: #c0c4cc;
                font-size: 14px;
                cursor: pointer;
                transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
                &.password-icon-active {
                    color: #309eff;
                }
            }
        }
    }
</style>