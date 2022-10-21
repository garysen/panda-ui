<template>
    <transition name="dialog-fade">
        <div class="hm-dialog-wrapper" v-show="visible" @click.self="handleClose">
            <div class="hm-dialog" :style="{width, marginTop: top}">
                <div class="hm-dialog-header">
                    <slot name="title">
                        <span class="hm-dialog-title">{{title}}</span>
                    </slot>
                    <button class="hm-dialog-close" @click="handleClose">
                        <i class="hm-icon-close"></i>
                    </button>
                </div>
                <div class="hm-dialog-body">
                    <slot></slot>
                </div>
                <div class="hm-dialog-footer" v-if="$slots.footer">
                    <slot name="footer">
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'HmDialog',
    props: {
        //标题
        title: {
            type: String,
            default: "提示"
        },
        //宽度
        width: {
            type: String,
            default: '50%'
        },
        //离顶部距离
        top: {
            type: String,
            default: '15vh' 
        },
        //显示/隐藏
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClose() {
           this.$emit('update:visible', false);
        }
    }
}
</script>
<style lang="scss" scoped>
    .hm-dialog-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        margin: 0;
        z-index: 2001;
        background-color: rgba($color: #000000, $alpha: 0.5);
    }

    .hm-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba($color: #000000, $alpha: 0.3);
        box-sizing: border-box;
        width: 30%;

        &-header {
            padding: 20px 20px 10px;
            .hm-dialog-title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .hm-dialog-close {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                .el-icon-close {
                    color: #909399;
                }
            }
        }
        &-body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }

        &-footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            ::v-deep .hm-button:first-child {
                margin-right: 20px;
            }
        }
    }
    .dialog-fade-enter-active {
        animation: run 0.5s; 
    }

    .dialog-fade-leave-active {
        animation:  run 0.5s reverse;
    }

    @keyframes run {
        0% {
            opacity: 0;
            transform: translateY(-20px); 
        }

        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }

</style>